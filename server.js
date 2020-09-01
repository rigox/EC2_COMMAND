const express =   require("express")
const app  =  express()

const dotenv =  require("dotenv")

//import routes 
const ec2 =  require("./routes/commands")



//setup routes

app.use('/api/v1/ec2',ec2)


const PORT =  process.env.PORT || 5001 



const server =   app.listen(PORT,()=>{console.log(`listening on PORT ${PORT}`)})
