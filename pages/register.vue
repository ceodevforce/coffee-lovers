<script setup>
import { useUserStore } from '../store/user'


const store = useUserStore()
const router = useRouter()
const route = useRoute()


// Log Section 


const email = ref('')
const password = ref('')
const firstName = ref('')
const lastName = ref('')
const loading = ref(false)


// Methods

const redirectAuthenticated = () => {
    const isUserAuthenticated = store.getAuthenticatedUser()
    if (!isUserAuthenticated) {
        router.push('/login')
    }
}

const registerHandler = async () => {
    loading.value = true
   
    await $fetch('/api/signup', { method: 'POST', body: { 
        email: email.value,
        password: password.value,
        firstName: firstName.value,
        lastName: lastName.value
     } })
    const user = {
        email: email.value,
        password: password.value,
        firstName: firstName.value,
        lastName: lastName.value
    }
    console.log(user)
    store.authenticatedUser = true
    store.user = user
    loading.value = false
    router.push('/')

    // if (users) {
    //     store.setAuthenticatedUser(users)
    //     router.push('/')
    // }
    // const user = {
    //     email: email.value,
    //     password: password.value,
    //     firstName: firstName.value,
    //     lastName: lastName.value
    // }

    // const response = await store.register(user)
    // if (response.status === 200) {
    //     router.push('/login')
    // }    
}

onMounted(() => {
    redirectAuthenticated()
})

</script>
<template>
  <div>
    <div
      class="page-header align-items-start min-vh-50 pt-5 pb-11 m-3 border-radius-lg"
      style="background-image: url('https://images.unsplash.com/photo-1569358731637-7a6c762adf28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNvZmZlZSUyMGRlc3NlcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60'); background-size: cover; background-position: center center;">
    
      <span class="mask bg-gradient-dark opacity-6" />
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-5 text-center mx-auto">
            <h1 class="text-black mb-2 mt-5 text-3xl font-medium">
              Welcome to Coffee Lovers
            </h1>
            <p class="text-2x1 text-black">
              Register for free to get access to the best coffee lovers in the world.
            </p>
          </div>
        </div>
      </div>
    </div>
    
    <div class="bg-white dark:bg-gray-900">
        <div class="flex justify-center h-screen">
            <div class="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
                <div class="flex-1">
                    <div class="text-center">
                        <h2 class="text-4xl font-bold text-center text-gray-700 dark:text-white">Coffee|| Lovers</h2>
                        
                        <p class="mt-3 text-gray-500 dark:text-gray-300">Sign in to access your account</p>
                    </div>

                    <div class="mt-8">
                        <form>
                            <div>
                                <label for="email" class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email Address</label>
                                <input type="email" name="email" id="email" placeholder="example@example.com" class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" v-model="email"/>
                            </div>

                            <div class="mt-6">
                                <label for="firstName" class="block mb-2 text-sm text-gray-600 dark:text-gray-200">First Name</label>
                                <input type="text" name="firstName" id="firstName" placeholder="Please to enter your first name" class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" v-model="firstName"/>
                            </div>

                            <div class="mt-6">
                                <label for="lastName" class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Last Name</label>
                                <input type="text" name="lastName" id="lastName" placeholder="Please to enter your last name" class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" v-model="lastName"/>
                            </div>

                            <div class="mt-6">
                                <div class="flex justify-between mb-2">
                                    <label for="password" class="text-sm text-gray-600 dark:text-gray-200">Password</label>
                                    <a href="#" class="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline">Forgot password?</a>
                                </div>

                                <input v-model="password" type="password" name="password" id="password" placeholder="Your Password" class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>

                            <div class="mt-6">
                                <button @click.prevent="registerHandler"
                                    class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                    Sign in
                                </button>
                            </div>

                        </form>

                        <p class="mt-6 text-sm text-center text-gray-400">Don&#x27;t have an account yet? <a href="#" class="text-blue-500 focus:outline-none focus:underline hover:underline">Sign up</a>.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>