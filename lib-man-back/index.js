require('dotenv').config()
require('./DB/Connection')

const express=require('express')

const driverRouter = require('./Routes/driverRoute')
const vehicleRouter = require('./Routes/vehicleRoute')


const cors=require('cors')
const library=express()
library.use(cors())
library.use(express.json())



library.use('/lib/drivers',driverRouter)
library.use('/lib/vehicles',vehicleRouter)




const PORT=5000 || process.env.PORT
library.listen(PORT, ()=>{
    console.log(`library running at port ${PORT}`);
})


