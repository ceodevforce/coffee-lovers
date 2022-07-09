import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ['nuxt-graphql-client'],
    runtimeConfig: {
        public: {
            GQL_HOST: 'https://api-us-east-1.graphcms.com/v2/cl5bdjg2p03h801uleip904bq/master'
        }
    }
})
