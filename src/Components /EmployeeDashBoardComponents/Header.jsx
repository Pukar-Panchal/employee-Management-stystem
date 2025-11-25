import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-5">
      <h1 className="text-2xl">
        Hello
        <br />
        <span className="text-3xl font-semibold">Pukar 👋</span>
      </h1>
      <button className="text-xl text-white rounded-full border-none bg-red-600 text-center py-3 px-5 ">Log Out</button>
    </div>
  );
};

export default Header;
