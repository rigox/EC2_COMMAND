const express  =  require("express")
const router  = express.Router()

const {createEC2}   =  require("../controllers/commands")

router.
    route('/')
        .post(createEC2)

    
module.exports =  router;