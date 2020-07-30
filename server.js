const express =   require("express")
const app  =  express()

const dotenv =  require("dotenv")


const PORT =  process.env.PORT || 5001 

const server =   app.listen(PORT,()=>{console.log(`listening on PORT ${PORT}`)})
