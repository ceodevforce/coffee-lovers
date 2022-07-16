//TODO: Build fetchUser API

// Get fetchUser API will be used in both Static and SSR

/* ---------------------------------- List ---------------------------------- */
//1. Extract the jwt token from the client from the request header

//2. Decode the jwt token to get the user email 

//3. Send response back to client

import { GraphQLClient, gql } from 'graphql-request'
import jwt from 'jsonwebtoken'

const config = useRuntimeConfig()

const { GRAPHQL_URL_CMS } = config.public
const { GRAPHQL_CMS_TOKEN_PERMISSIONS, JWT_SECRET_KEY } = config

const client = new GraphQLClient(GRAPHQL_URL_CMS, {
    headers: {
        Authorization: `Bearer ${GRAPHQL_CMS_TOKEN_PERMISSIONS}`
    }
})

const getUserByEmailQuery = gql`
    query GetUserByEmailQuery($email: String!) {
        nuxtUser(where: { email: $email }, stage: DRAFT) {
            email
            firstName
            lastName
        }
    }
`;

export default defineEventHandler(async (event) => {
    const defaultResponse = {
        authenicated: false,
        user: null
    }

    try {
        const token = String(event.req?.headers?.authorization?.replace("Bearer ", ""))
        const decode = jwt.verify(token, JWT_SECRET_KEY)

        const getUserResponse = await client.request(getUserByEmailQuery, { email: decode.email })
        const { nuxtUser } = getUserResponse
        if (!nuxtUser) {
            event.res.end()
            return defaultResponse
        }
        const newResponse = {
            authenicated: true,
            user: nuxtUser
        }
           
        return {
            newResponse
        }
        
    } catch(error) {
        console.log("Get Authenticated User failed", error)
        event.res.end()
    }
})

