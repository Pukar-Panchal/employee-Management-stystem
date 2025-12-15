import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const AboutEmployeeCardAdminDashBoard = () => {
  const { employeeData } = useContext(AuthContext);
  return (
    <div
    id="EmployeeTaskListInAdminDashBoardContainer"
    className="p-5 bg-[#2e2e2e] rounded-b-2xl">
      {employeeData.map((employee, key) => (
        <div
          key={key}
          className="bg-[#242424] rounded-2xl p-4 grid grid-cols-4 items-center mb-[10px]">
          <div id="EmployeeTaskListInAdminDashBoardEmployeeName">
            <h3>{employee.name}</h3>
          </div>
          <div
            id="EmployeeTaskListInAdminDashBoardEmployeeeTotalTasks"
            className="gap-[10px]">
            <h3>Total New Task : {employee.taskCount.newTask}</h3>
            <h3>Total Completed Task : {employee.taskCount.completed}</h3>
            <h3>Total Failed Task : {employee.taskCount.failed}</h3>
          </div>
          <div
            id="EmployeeTaskListInAdminDashBoardEmployeeEmailPassword"
            className="flex">
            <h3>{employee.email}</h3>/<h3>{employee.password}</h3>
          </div>
          <div
            id="EmployeeTaskListInAdminDashBoardPlaceholderToEmployeeContainer"
            className="flex gap-[10px]">
            <input
              placeholder="Ask Employee"
              className="rounded-[10px] border border-gray-600 bg-[#1f1f1f] text-white px-4 py-2 focus:outline-none focus:border-[#4f8cff] transition-all"/>
            <button className="border border-gray-600 rounded-[10px] px-5 py-2 hover:outline-none hover:border-blue-500 bg-[#53B587]">Send</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutEmployeeCardAdminDashBoard;
