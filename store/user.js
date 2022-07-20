import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    state: () => {
        return {
            authenticatedUser: null,
            user: null,
        }
    },
    getters: {},
    actions: {
        getAuthenticatedUser: async (context) => {
            // const response = await $fetch('/api/auth/user', {
            //     headers: {
            //         'Authorization': `Bearer ${context.getters.getToken}`
            //     }
            // })
            // const user = await response.json()
            // context.commit('setAuthenticatedUser', user)
        }
    },
})

