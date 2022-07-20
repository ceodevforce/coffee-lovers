import { GraphQLClient, gql } from "graphql-request"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { sendError } from "h3";

const config = useRuntimeConfig()
// console.log(config)

const { GRAPHQL_URL_CMS } = config.public
const { GRAPHQL_CMS_TOKEN_PERMISSIONS, JWT_SECRET_KEY } = config

const client = new GraphQLClient(GRAPHQL_URL_CMS, {
    headers: {
        Authorization: `Bearer ${GRAPHQL_CMS_TOKEN_PERMISSIONS}`
    }
})

const createNuxtUserMutation = gql`
    mutation CreateNuxtUser($userData: NuxtUserCreateInput!) {
        createNuxtUser(data: $userData) {
            id
            email
            token
        }
    }
`

export default defineEventHandler(async (event) => {
    // useBody can not be used on General only POST files or method
    const body =  await useBody(event)

    const { email, password, firstName, lastName } = body

    if(!email || !password || !firstName || !lastName ) {
        event.res.end()
    }

    const token = jwt.sign({ email }, JWT_SECRET_KEY, { expiresIn: '1day' })
    const hashedPassword = await bcrypt.hash(password, 8)
    const userData = {
        email,
        password: hashedPassword,
        firstName,
        lastName,
        token
    }

    const response = await client.request(createNuxtUserMutation, { userData })
    // console.log("RESPONSE", response)
    
    if(!response?.CreateNuxtUser?.id) {
        event.res.end()
    }
    return { 
        token
    }
})