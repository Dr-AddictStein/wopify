import React from "react";
import { useWorkoutsContext } from "../hooks/UseWorkoutsContext";


const WorkoutCard = ({ workout }) => {
  const {dispatch}=useWorkoutsContext();
  const { title, load, reps } = workout;

  const handleDelete=async()=>{
    const response = await fetch("http://localhost:4000/api/workOuts/"+workout._id,{
      method:"DELETE",
    });

    const data=await response.json();

    if(response.ok){
      dispatch({type:"DELETE_WORKOUT",payload:data});
    }
  }


  return (
    <div className="bg-white py-6 px-10 rounded-xl my-2">
      <h4 className="text-emerald-400 font-bold text-2xl">{title}</h4>
      <div className="mt-2 flex justify-between">
        <div className="">
          <p>
            <strong>Load (kg):</strong>
            {load}
          </p>
          <p>
            <strong>Reps :</strong>
            {reps}
          </p>
        </div>
        <div className="buttons">
          <button className="bg-red-500 px-3 py-1 rounded-lg text-white font-bold" onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default WorkoutCard;
