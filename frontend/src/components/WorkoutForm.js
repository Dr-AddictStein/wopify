import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useWorkoutsContext } from "../hooks/UseWorkoutsContext";
import { useAuthContext } from "../hooks/useAuthContext";

const WorkoutForm = () => {
  const { dispatch } = useWorkoutsContext();
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const navigate = useNavigate();
  const { user } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      return;
    }

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
        Authorization: `Bearer ${user.token}`,
      },
    });
    console.log("SDASDASD", workout);

    const json = await response.json();

    if (response.ok) {
      setTitle("");
      setLoad("");
      setReps("");
      dispatch({ type: "CREATE_WORKOUT", payload: json });
    }

    navigate("/");
  };

  return (
    <form
      action=""
      onSubmit={handleSubmit}
      className="h-72 flex flex-col justify-between items-center"
    >
      <h3 className="text-center text-xl text-teal-500">Add a new Workout</h3>

      <div className="flex justify-center">
        <input
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          type="text"
          placeholder="Exercise Title"
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <div className="flex justify-center">
        <input
          onChange={(e) => {
            setLoad(e.target.value);
          }}
          type="number"
          placeholder="Load"
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <div className="flex justify-center">
        <input
          onChange={(e) => {
            setReps(e.target.value);
          }}
          type="number"
          placeholder="Reps"
          className="input input-bordered w-full max-w-xs"
        />
      </div>

      <button className="mt-2 bg-teal-500 w-1/4 p-1 text-white font-semibold rounded-2xl">
        Add Workout
      </button>
    </form>
  );
};

export default WorkoutForm;
