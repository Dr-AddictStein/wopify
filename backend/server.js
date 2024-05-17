import express from 'express';
import dotenv from 'dotenv';

import workOutRoutes from './routes/workouts.js'

dotenv.config();

// creates express app
const app = express();

// use of middlewars
app.use(express.json())

app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next();
})


app.use('/api/workOuts',workOutRoutes);


// listen for request
app.listen(process.env.PORT,()=>{
    console.log(`Listening on PORT ${process.env.PORT}`)
});