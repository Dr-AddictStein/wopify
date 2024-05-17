import React from "react";

const WorkoutCard = ({ workout }) => {
  const { title, load, reps } = workout;
  return (
    <div className="bg-white py-6 px-10 rounded-xl my-2">
      <h4 className="text-emerald-400 font-bold text-2xl">{title}</h4>
      <div className="mt-2 ">
        <p>
          <strong>Load (kg):</strong>
          {load}
        </p>
        <p>
          <strong>Reps :</strong>
          {reps}
        </p>
      </div>
    </div>
  );
};

export default WorkoutCard;
