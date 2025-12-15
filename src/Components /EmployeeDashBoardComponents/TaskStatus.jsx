import React from "react";

const TaskStatus = ({employeeLoggedInData}) => {
  return (
    <div className="flex justify-between gap-5 my-10 w-full text-black">
      <div className="py-5 px-10 w-[25%] bg-white gap-5 justify-center items-center rounded-xl">
        <h2 className="text-[30px] font-semibold">{employeeLoggedInData.taskCount.newTask}</h2>
        <h3 className="text-[20px] font-medium">New Task</h3>
      </div>
      <div className="py-5 px-10 w-[25%] bg-yellow-300 gap-5 justify-center items-center rounded-xl">
        <h2 className="text-[30px] font-semibold">{employeeLoggedInData.taskCount.active}</h2>
        <h3 className="text-[20px] font-medium">Active</h3>
      </div>
      <div className="py-5 px-10 w-[25%] bg-green-400 gap-5 justify-center items-center rounded-xl">
        <h2 className="text-[30px] font-semibold">{employeeLoggedInData.taskCount.completed}</h2>
        <h3 className="text-[20px] font-medium">Completed</h3>
      </div>
      <div className="py-5 px-10 w-[25%] bg-red-500 gap-5 justify-center items-center rounded-xl">
        <h2 className="text-[30px] font-semibold">{employeeLoggedInData.taskCount.failed}</h2>
        <h3 className="text-[20px] font-medium">Failed</h3>
      </div>
    </div>
  );
};

export default TaskStatus;
