import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container mx-auto">
      <div className="navbar  bg-white">
        <Link className="btn btn-ghost text-xl">Workout Dude</Link>
      </div>
    </div>
  );
};

export default Navbar;
