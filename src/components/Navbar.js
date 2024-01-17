import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center border-black border-4 p-4 rounded-md">
      <div>
        <h1 className="text-3xl">Imager</h1>
      </div>

      <div className="flex gap-6 text-xl">
        <button>Login</button>
        <button className="border-black border-4 p-2 rounded">
          Create Account
        </button>
      </div>
    </div>
  );
};

export default Navbar;
