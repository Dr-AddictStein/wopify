import React, { useEffect } from "react";
import WorkoutCard from "../components/WorkoutCard";
import { useWorkoutsContext } from "../hooks/UseWorkoutsContext";
import {useAuthContext} from '../hooks/useAuthContext'

const Home = () => {
  const {workouts,dispatch}=useWorkoutsContext();
  
  const {user}=useAuthContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("http://localhost:4000/api/workOuts",{
        headers:{
          'Authorization':`Bearer ${user.token}`
        }
      });
      const data = await response.json();

      if (response.ok) {
        dispatch({type:"SET_WORKOUTS",payload:data}); 
      }
    };

    if(user){
      fetchWorkouts();
    }
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
