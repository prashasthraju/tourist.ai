import React from "react";

const Navbar = () => {
  return (
    <div className="main wrapper flex p-5  w-full justify-between bg-amber-50 text-black">
      <div className="logo mx-2">LOGO</div>
      <div className="navwrapper mx-4">
        <ul className="flex gap-4">
          <li>Home </li>
          <li>About</li>
          <li>contact us</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
