import React from "react";

const TaskStatus = () => {
  return (
    <div className="flex justify-between gap-5 my-10 w-full text-black">
      <div className="py-5 px-10 w-[25%] bg-white flex gap-5 justify-center items-center rounded-xl">
        <h2 className="text-[30px] font-semibold">0</h2>
        <h3 className="text-[20px] font-medium">New Task</h3>
      </div>
      <div className="py-5 px-10 w-[25%] bg-yellow-300 flex gap-5 justify-center items-center rounded-xl">
        <h2 className="text-[30px] font-semibold">0</h2>
        <h3 className="text-[20px] font-medium">Accepted</h3>
      </div>
      <div className="py-5 px-10 w-[25%] bg-green-400 flex gap-5 justify-center items-center rounded-xl">
        <h2 className="text-[30px] font-semibold">0</h2>
        <h3 className="text-[20px] font-medium">Completed</h3>
      </div>
      <div className="py-5 px-10 w-[25%] bg-red-500 flex gap-5 justify-center items-center rounded-xl">
        <h2 className="text-[30px] font-semibold">0</h2>
        <h3 className="text-[20px] font-medium">Failed</h3>
      </div>
    </div>
  );
};

export default TaskStatus;
