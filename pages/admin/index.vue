<script setup>
const router = useRouter()
const route = useRoute()


const redirectUnauthenticated = () => {
    console.log('Redirecting to login')
    
}

const submitHandler = () => {
    console.log('Submitting')
}


onMounted(() => {
    redirectUnauthenticated()

})

watchEffect(() => {
    console.log('Watching')
})


</script>
<template>
    <h1>Admins</h1>
</template>