import { GraphQLClient, gql } from "graphql-request"

const config = useRuntimeConfig()

const { GRAPHQL_URL_CMS } = config.public
const { GRAPHQL_CMS_TOKEN_PERMISSIONS, JWT_SECRET_KEY } = config

const client = new GraphQLClient(GRAPHQL_URL_CMS, {
    headers: {
        Authorization: `Bearer ${GRAPHQL_CMS_TOKEN_PERMISSIONS}`
    }
}
)

////////////////////////////////////////////////////////////////
// Create a new coffee
// {title: "", size: 10, createdAt: "", category: "", drinkImage: {create: {fileName: "", handle: ""}}, flavor: {create: {additives: "", syrups: ""}}, milk: {create: {foamMaster: "", milkOptions: ""}}}

////////////////////////////////////////////////////////////////

const createCoffee = gql`
    mutation createBaseDrinkMutation ($coffeeData: BaseDrinkCreateInput!) {
    createBaseDrink(data: $coffeeData) {
        title
        size
        createdAt
        milk {
        foamMaster
        }
        drinkImage {
        url
        }
    }
}

`

export default defineEventHandler(async (event) => {
    const body =  await useBody(event)

    const { title, size, createdAt, category, drinkImage, flavor, milk } = body


    const response = await client.request(createCoffee, { headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }, coffeeData: { title, size, createdAt, category, drinkImage, flavor, milk } })
    return { 
        response
     }
})
