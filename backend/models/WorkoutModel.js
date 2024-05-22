import mongoose from "mongoose";

const workoutSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  load:{
    type:Number,
    required:true,
  },
  reps: {
    type: Number,
    required: true,
  },
  user_id:{
    type:String,
    required:true
  }
},{
    timestamps:true
});


const workout = mongoose.model('WorkoutCollection',workoutSchema);

export default workout;
