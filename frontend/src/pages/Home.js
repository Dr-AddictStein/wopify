import React, { useEffect, useState } from "react";
import WorkoutCard from "../components/WorkoutCard";

const Home = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("http://localhost:4000/api/workOuts");
      const data = await response.json();

      if (response.ok) {
        setWorkouts(data);
        console.log("sdds", workouts);
      }
    };

    fetchWorkouts();
  }, []);

  return (
    <div className="container mx-auto h-screen bg-[#f1f1f1]">
      <div className="grid grid-cols-12">
        <div className="col-span-8">
          <div className="mt-6">
            {workouts.length > 0 &&
              workouts.map((item) => {
                return <WorkoutCard key={item._id} workout={item} />;
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
