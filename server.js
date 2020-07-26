const express =   require("express")
const app  =  express()



const PORT =  process.env.PORT || 5001 

const server =   app.listen(PORT,()=>{console.log(`listening on PORT ${PORT}`)})
