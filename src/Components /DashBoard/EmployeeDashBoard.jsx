import React from "react";
import HeaderEmployee from "../EmployeeDashBoardComponents/HeaderEmployee"
import TaskStatus from "../EmployeeDashBoardComponents/TaskStatus";
import TaskListCard from "../EmployeeDashBoardComponents/TaskListCard";
import TaskCategory from "../EmployeeDashBoardComponents/TaskCategory";

const EmployeeDashBoard = ({ employeeLoggedInData }) => {
  return (
    <div
      id="employeeDashBoard"
      className="p-5 bg-[#1c1c1c] text-white h-full">
      <HeaderEmployee employeeLoggedInData={employeeLoggedInData} />
      <TaskStatus employeeLoggedInData={employeeLoggedInData} />
      {/* <TaskListCard employeeLoggedInData={employeeLoggedInData} /> */}
      <TaskCategory employeeLoggedInData = {employeeLoggedInData}/>
    </div>
  );
};

export default EmployeeDashBoard;
