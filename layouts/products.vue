<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container flex mx-auto p-4">
                <NuxtLink to="/products" class="font-bold">Brand product</NuxtLink>
            </nav>
        </header>


        <div class="container mx-auto p-4">
            <slot/>
        </div>

        <footer class="conatiner mx-auto p-4 flex justify-between border-t-2">
            <ul class="flex gap-4">
                <li><nuxt-link to="/">Home</nuxt-link></li>
                <li><nuxt-link to="/about">About</nuxt-link></li>
                <li><nuxt-link to="/products">Products</nuxt-link></li>
            </ul>
        </footer>
    </div>
</template>
<style scoped>
    .router-link-exact-active{
        color: aquamarine;
    }
</style>