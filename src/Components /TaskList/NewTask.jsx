import React, { useContext } from "react";

const NewTask = ({employeeLoggedInData}) => {
    
  return (
    <>
      {employeeLoggedInData.tasks.map((task, key) => (
        <div
          key={key}
          id="taskCard"
          className="h-[350px] w-[400px] rounded-[20px] bg-green-200 flex-shrink-0 p-2 relative">
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
          <div className="flex w-full justify-center absolute bottom-[10px] flex justify-center items-center">
            <button className="px-[100px] py-2 bg-green-500 text-white rounded-xl cursor-pointer hover:bg-green-600 transition">
              Accept 
            </button>
            {/* its for reject task if you reject the task you should give a reason */}
            {/* <button className="px-4 py-2 bg-red-500 text-white rounded-xl cursor-pointer hover:bg-red-600 transition">
              Failed
            </button> */}
          </div>
        </div>
      ))}
    </>
  );
};

export default NewTask;
