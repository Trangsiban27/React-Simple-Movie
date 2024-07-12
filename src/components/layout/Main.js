import React from "react";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <nav className="flex items-center py-5 cursor-pointer gap-x-10 page-container">
        <div>Home</div>
        <div>Movies</div>
        <div>Home</div>
      </nav>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
