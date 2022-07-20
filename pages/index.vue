<script setup>
import { useCoffeeStore } from '@/store/coffee';
const store = useCoffeeStore();
console.log(store)

const { data } = await useAsyncData('coffee', () => $fetch('/api/coffee'));
console.log(data)
const coffees = reactive(data)

store.coffeeDrinks = coffees.value

</script>
<template>
  <div>
    <div class="pt-12 mx-auto bg-gray-50">
        <div class="flex justify-center mx-auto">
          <div class="flex">
            <div class="item flex justify-center items-center" style="background-color:#fa91aa"><img
                alt="Two yellow iced drinks with pineapple inclusions in tall glasses." class="block"
                src="https://images.unsplash.com/photo-1634113077529-90edd7b82ddf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"></div>
            <div class="py5 flex items-center justify-center text-center md-size6of12 textBlockGutter"
              style="background-color:#fa91aa">
              <div class="">
                <h1 class="sb-heading mb4 xl text-semibold" tabindex="-1" style="color:#1e3932"><span
                    class="rich-text_text__02jRf rich-text_width__0GHdb rich-text_greenLinks__BNG4d"><strong>Summer’s
                      brightest new drinks</strong></span></h1>
                <div class="md rich-text_text__02jRf rich-text_width__0GHdb rich-text_greenLinks__BNG4d"
                  style="color:#1e3932">Introducing the coffee and cake mix all new.</div><a
                  class="sb-button sb-button--default sb-button--houseGreen mt5"
                  href="" >Learn
                  more</a>
              </div>
            </div>
          </div>
        </div>
    </div>
    <!-- <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto flex flex-column">
        <div class="lg:w-4/6 mx-auto">
          <div class="rounded-lg h-64 overflow-hidden">
            <img class="object-cover object-center h-full w-full"
              src="https://images.unsplash.com/photo-1542372147193-a7aca54189cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt="Coffee">
          </div>
          <div class="flex flex-col sm:flex-row mt-10">
            <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                <p> No Idea </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->
    <section class="text-gray-600">
      <div class="container px-5 py-24 text-center">
        <h2 class="text-xl font-medium title-font mb-2">Coffee Lovers</h2>
        <p class="leading-relaxed text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam atque
          doloremque doloribus, dolorum eaque error est facere fugiat id illum ipsa ipsam iste itaque iure labore maxime
          minima minus nam natus necessitatibus neque nihil nulla obcaecati omnis optio, quae quam quas quia quibusdam
          quod ratione repellat repudiandae saepe sunt suscipit tempora temporibus tenetur totam ullam vel velit vero
          voluptatum.</p>

      </div>
      <div class="flex flex-wrap -m-4 bg-slate-100">
        <div class=" xl:w-1/4 md:w-1/2 p-4" v-for="drink in coffees.response.baseDrinks" :key="drink.name">
          <div class="bg-black p-6 rounded-lg">
            <div v-for="image in drink.drinkImage">
              <img :src="image.url" alt="" />
            </div>
            <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">{{ drink.title }}</h3>
            <h2 class="text-lg text-white font-medium title-font mb-4">
              lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam atque doloremque doloribus, dolorum
              eaque
            </h2>
          </div>

        </div>
      </div>
    </section>
      
    </div>
</template>