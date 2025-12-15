import { use, useContext, useEffect, useState } from "react";
import Login from "./Components /Auth/Login";
import EmployeeDashBoard from "./Components /DashBoard/EmployeeDashBoard";
import AdminDashBoard from "./Components /DashBoard/AdminDashBoard";
import { AuthContext } from "./Context/AuthProvider";

function App() {
  const {
    employeeData,
    adminData,
    setUser,
    user,
    loggedInEmployeeData,
    setLoggedInEmployeeData,
  } = useContext(AuthContext);

  const handleLogIn = (email, password) => {
    const employee = employeeData.find((e) => e.email == email && e.password == password);
    if (email == adminData.email && password == adminData.password) {
      setUser("admin");
      const adminObj = { role: "admin" };
      localStorage.setItem("loggedInUser", JSON.stringify(adminObj));
      return;
    }
    if (employee) {
      const employeeObj = {
        name: employee.name,
        role: "employee",
        email: employee.email,
        employeeId: employee.id,
        tasks: employee.tasks,
        taskCount: employee.taskCount,
      };
      localStorage.setItem("loggedInUser", JSON.stringify(employeeObj));
      setUser("employee");
      setLoggedInEmployeeData(employeeObj);
      return;
    }
    alert("Id don't match");
  };
  return (
    <>
      {!user ? <Login handleLogIn={handleLogIn} /> : ""}
      {user == "employee" ? (
        <EmployeeDashBoard employeeLoggedInData={loggedInEmployeeData} />
      ) : (
        ""
      )}
      {user == "admin" ? <AdminDashBoard /> : ""}
    </>
  );
}

export default App;
