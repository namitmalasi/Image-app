import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center border-black border-4 p-4 rounded-md">
      <div>
        <h1 className="text-3xl">Imager</h1>
      </div>

      <div className="flex gap-6 text-xl">
        
        <Link to="/login">
          <button className="border-black border-4 p-2 rounded">
            Sign up/Sign in
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
