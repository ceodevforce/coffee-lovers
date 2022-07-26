<template>
<section class="relative w-full px-8 text-gray">
    <nav class="bg-white shadow dark:bg-gray-800">
        <div class="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
            <NuxtLink to="menu" class="text-gray-800 transition-colors duration-200 transform dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6">Menu</NuxtLink>

            <NuxtLink to="/rewards" class="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Rewards</NuxtLink>

            <NuxtLink to="/promotions" class="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Promotions</NuxtLink>

            <NuxtLink to="/blog" class="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">blog</NuxtLink>
            <div class="justify-end">
                <div class="">
                    <NuxtLink to="/login" class="text-gray-800 transition-colors duration-200 transform dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6">Login</NuxtLink>
                    <NuxtLink to="/register" class="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Register</NuxtLink>
                     <NuxtLink to="/admin" class="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Admin</NuxtLink>
                </div>
        </div>
        </div>
        
    </nav>
</section>
</template>
