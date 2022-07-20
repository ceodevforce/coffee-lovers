import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ['nuxt-graphql-client', '@nuxtjs/tailwindcss', '@pinia/nuxt'],
    runtimeConfig: {
        JWT_SECRET_KEY:'',
        GRAPHQL_CMS_TOKEN_PERMISSIONS: '',
        public: {
            GQL_HOST: 'https://api-us-east-1.graphcms.com/v2/cl5bdjg2p03h801uleip904bq/master',
            GRAPHQL_URL_CMS: '',
            MANAGEMENT_API: '',

        }
    }
})
