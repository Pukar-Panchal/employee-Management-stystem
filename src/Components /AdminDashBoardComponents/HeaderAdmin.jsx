import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const HeaderAdmin = () => {
  const { setUser } = useContext(AuthContext);

  const handleLogOutAdmin = () => {
    localStorage.removeItem("loggedInUser");
    setUser(null);
  };
  return (
    <div className="flex justify-between items-center p-5">
      <h1 className="text-2xl">
        Hello
        <br />
        <span className="text-3xl font-semibold">admin 👋</span>
      </h1>
      <button
        className="text-xl text-white rounded-full border-none bg-red-600 text-center py-3 px-5 cursor-pointer"
        onClick={handleLogOutAdmin}
      >
        Log Out
      </button>
    </div>
  );
};

export default HeaderAdmin;
