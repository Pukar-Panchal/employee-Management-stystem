import React from "react";
import CompleteTask from "../TaskList/CompleteTask";
import NewTask from "../TaskList/NewTask";
import FailedTask from "../TaskList/FailedTask";
import AcceptedTask from "../TaskList/AcceptTask";

const TaskListCard = ({ employeeLoggedInData }) => {
  return (
    <div
      id="taskListHorizontalContainer"
      className="w-full flex-nowrap flex justify-start gap-3 overflow-x-auto text-black">
        {employeeLoggedInData.taskCount.active && <AcceptedTask employeeLoggedInData = {employeeLoggedInData} />}
        {employeeLoggedInData.taskCount.completed > 0 && <CompleteTask employeeLoggedInData = {employeeLoggedInData} />}
        {employeeLoggedInData.taskCount.failed > 0 && <FailedTask employeeLoggedInData = {employeeLoggedInData} />}
        {employeeLoggedInData.taskCount.newTask > 0 && <NewTask employeeLoggedInData = {employeeLoggedInData} />}
    </div>
  );
};

export default TaskListCard;
