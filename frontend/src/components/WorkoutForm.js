import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const WorkoutForm = () => {
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const navigate=useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const workout = {
      title,
      load,
      reps,
    };

    const response = await fetch("http://localhost:4000/api/workOuts", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("SDASDASD", workout);

    const json = await response.json();

    if (response.ok) {
      setTitle("");
      setLoad("");
      setReps("");
    }

    navigate('/');
  };

  return (
    <form action="" onSubmit={handleSubmit} className="h-72 flex flex-col justify-between items-center">
      <h3 className="text-center text-xl text-teal-500">Add a new Workout</h3>

      <div className="flex justify-center">
        <input onChange={(e)=>{
            setTitle(e.target.value);
        }} type="text" placeholder="Exercise Title" className="input input-bordered w-full max-w-xs" />
      </div>
      <div className="flex justify-center">
        <input onChange={(e)=>{
            setLoad(e.target.value);
        }} type="number" placeholder="Load" className="input input-bordered w-full max-w-xs" />
      </div>
      <div className="flex justify-center">
        <input onChange={(e)=>{
            setReps(e.target.value);
        }} type="number" placeholder="Reps" className="input input-bordered w-full max-w-xs" />
      </div>

      

      <button className="mt-2 bg-teal-500 w-1/4 p-1 text-white font-semibold rounded-2xl">Add Workout</button>
    </form>
  );
};

export default WorkoutForm;
