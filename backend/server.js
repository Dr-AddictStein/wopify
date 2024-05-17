import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

// creates express app
const app = express();

// use of middlewars
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next();
})




app.get('/',(req,res)=>{
    res.json({
        mssg:"Backend OK"
    })
})


// listen for request
app.listen(process.env.PORT,()=>{
    console.log(`Listening on PORT ${process.env.PORT}`)
});