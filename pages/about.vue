<template>
    <div>
        <h2>About</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Ratione blanditiis quo esse nobis autem mollitia nulla atque soluta minus magnam! Alias, quae. Quibusdam quia saepe nostrum voluptatibus, unde ab voluptate.</p>
        <p>{{ data }}</p>
    </div>
</template>

<script setup>
    // const {data}=await useFetch('/api/hlwan?name=mairo',{
    //     method:'post',
    //     body:{age:33}
    // })
    const {data}=await useFetch('/api/currency/GBP')
</script>

<style scoped>

</style>