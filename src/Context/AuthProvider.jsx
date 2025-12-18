import React, { children, createContext, useEffect, useState } from "react";
import Data from "../Util/LocalStorage.json";
export const AuthContext = createContext();

 const AuthProvider = ({ children }) => {
  // this are the local data
  const [employeeData, setEmployeeData] = useState([]);
  const [adminData, setAdminData] = useState();
  // this is the useState witch have who was logedin admin or employee for page routing
  const [user, setUser] = useState(null);
  // this is the useState which have employee personal data (like: name and tasks, role)
  const [loggedInEmployeeData, setLoggedInEmployeeData] = useState();
  useEffect(() => {
    const employee = localStorage.getItem("employeeDataJ");
    const admin = localStorage.getItem("adminDataJ");

    if (!employee || !admin) {
      localStorage.setItem("adminDataJ", JSON.stringify(Data.admin));
      localStorage.setItem("employeeDataJ", JSON.stringify(Data.employees));

      setAdminData(JSON.parse(localStorage.getItem("adminDataJ")));
      setEmployeeData(JSON.parse(localStorage.getItem("employeeDataJ")));
    } else {
      setAdminData(JSON.parse(admin));
      setEmployeeData(JSON.parse(employee));
    }
    // Logged In user data
    // after refresh useState's data was null but localstorage still have data thats why this has to write there (setUser(savedEmployee.role) setLoggedInEmployeeData(savedEmployee);)
    const savedEmployee = JSON.parse(localStorage.getItem("loggedInUser"));
    if (savedEmployee) {
      setUser(savedEmployee.role);
      setLoggedInEmployeeData(savedEmployee);
    }
  }, []);
  // Update Employee and Admin and auto save
  return (
    <>
      <AuthContext.Provider
        value={{
          employeeData,
          setEmployeeData,
          adminData,
          setAdminData,
          user,
          setUser,
          loggedInEmployeeData,
          setLoggedInEmployeeData,
        }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
