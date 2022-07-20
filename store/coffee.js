import { defineStore } from 'pinia'

export const useCoffeeStore = defineStore('main', {
    state: () => {
        return {
            coffeeDrinks: [],
            coffeeDrink: {},
            users: null,
            coffeeRank: null,
        }
    }
})



