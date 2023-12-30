// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  app:{
    head:{
      title:'Nuxt Try',
      meta:[
        {name:'description',content:'Everything about Nuxt'}
      ],
      link:[{
        rel:'stylesheet',href:'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0'
      }]
    }
  },
  runtimeConfig:{
    currencyKey:process.env.CURRENCY_API_KEY,
    xKey:process.env.X_API_KEY
  }
})
