<script setup>
const { data } = await useAsyncData('coffee', () => GqlCoffee())
const coffees = reactive(data)

console.log(coffees)
</script>
<template>
<div>
    <div v-for="drink in coffees.baseDrinks" :key="drink.name">
        <h1>{{ drink.title }}</h1>
        <div v-for="image in drink.drinkImage">
          <img :src="image.url"/>  
        </div>
    </div>
</div>
</template>