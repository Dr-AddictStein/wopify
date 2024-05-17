import workoutModel from "../models/WorkoutModel.js";
import mongoose from "mongoose";

// get all workouts

export const getAllWorkouts = async (req, res) => {
  const workouts = await workoutModel.find({}).sort({ createdAt: -1 });

  res.status(200).json(workouts);
};

// get a single workout
export const getSingleWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid ID.!." });
  }

  const workout = await workoutModel.findById(id);

  if (workout) {
    res.status(200).json(workout);
  } else {
    return res.status(400).json({ error: "No Such Workout Found.!." });
  }
};

// create a new workout
export const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body;
  try {
    const newWorkout = await workoutModel.create({ title, load, reps });
    res.status(200).json(newWorkout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a workout
export const deleteWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid ID.!." });
  }

  const workout = await workoutModel.findOneAndDelete({ _id: id });

  if (workout) {
    res.status(200).json(workout);
  } else {
    return res.status(400).json({ error: "No Such Workout Found.!." });
  }
};

// update a workout
export const updateWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid ID.!." });
  }

  const workout = await workoutModel.findOneAndUpdate({ _id: id },{
    ...req.body
  });

  if (workout) {
    res.status(200).json(workout);
  } else {
    return res.status(400).json({ error: "No Such Workout Found.!." });
  }
};
