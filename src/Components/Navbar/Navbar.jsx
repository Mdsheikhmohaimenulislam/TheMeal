import React from "react";

const Navbar = () => {
  return (
    <div className="w-[95%] mx-auto mt-5 mb-10">
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 text-xl">
            <li>
              <a>Home</a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Navbar;
