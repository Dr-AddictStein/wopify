import express from 'express';
import workoutModel from '../models/WorkoutModel.js'
import { createWorkout, deleteWorkout, getAllWorkouts, getSingleWorkout, updateWorkout } from '../controllers/workoutControllers.js';

const router = express.Router();



router.get('/',getAllWorkouts)
router.get('/:id',getSingleWorkout)

router.post('/', createWorkout);

router.delete('/:id',deleteWorkout);

router.patch('/:id',updateWorkout);


export default router;