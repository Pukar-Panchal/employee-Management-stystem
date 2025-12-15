import React, { useContext } from "react";

const CompleteTask = ({employeeLoggedInData}) => {
  
  return (
    <>
      {employeeLoggedInData.tasks.map((task, key) => (
        <div
          key={key}
          id="taskCard"
          className="h-[350px] w-[400px] rounded-[20px] bg-green-200 flex-shrink-0 p-2">
          <div className="flex justify-between items-center rounded-2 py-3">
            {/* add task priority by admin */}
            <h3 className="text-black text-[20px]">
              {task.category || "No category available"}
            </h3>
            {/* <div className="">date of that day when task gives time will automatically given by code</div> */}
            <div className="text-[20px]">
              {task.date || "No date available"}
            </div>
          </div>
          <div id="taskContainer" className="w-full">
            <div id="taskTitle" className="rounded-[20px]">
              <h2 className="text-[30px] flex justify-center items-center">
                {task.title || "No title available"}
              </h2>
            </div>
            <div id="taskDiv" className="flex justify-center mt-1 p-2">
              <p className="text-[20px] max-w-[600px] text-center leading-7">
                {task.description || "No description available"}
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CompleteTask;
