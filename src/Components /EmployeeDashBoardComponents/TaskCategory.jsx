import React from "react";
import AcceptTask from "../TaskList/AcceptTask";
import CompleteTask from "../TaskList/CompleteTask";
import NewTask from "../TaskList/NewTask";
import FailedTask from "../TaskList/FailedTask";

const TaskCategory = ({ employeeLoggedInData }) => {
  return (
    <div className="w-full flex flex-col justify-start gap-3">
      {employeeLoggedInData.taskCount.active > 0 &&
        <div className="flex flex-col">
          <div>
            <h3 className="text-white text-[2vw]">Accepted Task</h3>
          </div>
          <div className="flex gap-3 overflow-x-auto text-black">
            <AcceptTask employeeLoggedInData={employeeLoggedInData} />
          </div>
        </div>}

        {employeeLoggedInData.taskCount.Completed > 0 &&
        <div className="flex flex-col">
          <div>
            <h3 className="text-white text-[2vw]">Failed Task</h3>
          </div>
          <div className="flex gap-3 overflow-x-auto text-black">
            <CompleteTask employeeLoggedInData={employeeLoggedInData} />
          </div>
        </div>}

        {employeeLoggedInData.taskCount.newTask > 0 &&
        <div className="flex flex-col">
          <div>
            <h3 className="text-white text-[2vw]">New Task</h3>
          </div>
          <div className="flex gap-3 overflow-x-auto text-black">
            <NewTask employeeLoggedInData={employeeLoggedInData} />
          </div>
        </div>}

        {employeeLoggedInData.taskCount.failed > 0 &&
        <div className="flex flex-col">
          <div>
            <h3 className="text-white text-[2vw]">Failed Task</h3>
          </div>
          <div className="flex gap-3 overflow-x-auto text-black">
            <FailedTask employeeLoggedInData={employeeLoggedInData} />
          </div>
        </div>}

    </div>
  );
};

export default TaskCategory;
