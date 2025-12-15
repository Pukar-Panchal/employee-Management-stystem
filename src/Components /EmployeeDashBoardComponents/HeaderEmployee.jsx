import React from "react";
import { useContext } from "react";
import {AuthContext} from "../../Context/AuthProvider";

const Header = ({employeeLoggedInData}) => {
  const {setUser,setLoggedInEmployeeData} = useContext(AuthContext);
  const handleLogOutEmployee = () => {
    localStorage.removeItem("loggedInUser");
    setUser(null);
    setLoggedInEmployeeData(null);
  }
  return (
    <div className="flex justify-between items-center p-5">
      <h1 className="text-2xl">
        Hello
        <br />
        <span className="text-3xl font-semibold">{employeeLoggedInData.name} 👋</span>
      </h1>
      <button className="text-xl text-white rounded-full border-none bg-red-600 text-center py-3 px-5 cursor-pointer" onClick={handleLogOutEmployee}>Log Out</button>
    </div>
  );
};

export default Header;
