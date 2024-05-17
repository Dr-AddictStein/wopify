import express from 'express';
import workoutModel from '../models/Workout.js'

const router = express.Router();

router.get('/',(req,res)=>{
    res.json({mssg:"GET all workouts"})
})
router.get('/:id',(req,res)=>{
    res.json({mssg:"GET a single workout"})
})


router.post('/',async (req,res)=>{
    const {title,load,reps}=req.body;
    try {
        const newWorkout = await workoutModel.create({title,load,reps})
        res.status(200).json(newWorkout);
    } catch (error) {
        res.status(400).json({error:error.message})
    }
})



router.delete('/:id',(req,res)=>{
    res.json({mssg:"DELETE a new workout"})
})



router.patch('/:id',(req,res)=>{
    res.json({mssg:"UPDATE a new workout"})
})


export default router;