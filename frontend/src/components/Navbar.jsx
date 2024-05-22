import React from "react";
import { Link } from "react-router-dom";
import WorkoutForm from "./WorkoutForm";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  return (
    <div className="container mx-auto">
      <div className="navbar  bg-white flex justify-between">
        <Link to="/" className="btn btn-ghost text-xl">Workout Dude</Link>
        <div className="">
          <button
            className="btn bg-teal-600 text-white"
            onClick={() => document.getElementById("my_modal_2").showModal()}
          >
            Add New Workout
          </button>
          <dialog id="my_modal_2" className="modal h-screen">
            <div className="modal-box">
              <WorkoutForm />
            </div>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>
        </div>
        {!user ? (
          <div className=" flex gap-3">
            <Link
              to="/login"
              className="btn btn-neutral bg-teal-600 text-white"
            >
              Log In
            </Link>
            <Link
              to="/signup"
              className="btn btn-primary bg-teal-600 text-white"
            >
              Sign Up
            </Link>
          </div>
        ) : (
          <div className=" flex gap-3">
            <p>{user.email}</p>
            <button
              onClick={(e) => {
                logout();
              }}
              className="btn btn-neutral bg-teal-600 text-white"
            >
              Log Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
