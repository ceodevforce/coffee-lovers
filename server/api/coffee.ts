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

const coffeeQuery = gql`
    query CoffeeQuery {
        baseDrinks {
            id
            title
            createdAt
            createdBy {
            name
            }
            publishedAt
            drinkImage {
            url
            }
            size
            flavor {
            syrups
            additives
            }
        }
    }

`
export default defineEventHandler(async (event) => {
    const response = await client.request(coffeeQuery)
    return { 
        response
     }
})
