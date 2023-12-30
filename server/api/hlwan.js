export default defineEventHandler(async (event)=>{

    // const{name}= getQuery(event)
    
    // const{age}=await readBody(event)

    const{data}=await $fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_LbPzn0AeFJOxKblF3jgirvxnMzuIGK8O5eZClD2n')
    // return{
    //     message:`Hello, ${name}, You are ${age}`
    // }
    // const{data}=await $fetch('https://api.api-ninjas.com/v1/dogs',{
    //     method: 'GET',
    //     headers: { 'X-Api-Key': '6z6Ifux9kaITL9jsrxa2Yw==55HXiERRq1Wmq2EO'},
    //     contentType: 'application/json',
    // })

    
    return data;
})