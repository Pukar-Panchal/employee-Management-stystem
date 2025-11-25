import React from 'react'
import Header from '../EmployeeDashBoardComponents/Header'
import TaskStatus from '../EmployeeDashBoardComponents/TaskStatus'
import TaskListCard from '../EmployeeDashBoardComponents/TaskListCard'

const EmployeeDashBoard = () => {
  return (
    <div className='p-5 bg-[#1c1c1c] text-white h-screen w-screen'>
        <Header /> 
        <TaskStatus />
        <TaskListCard />
    </div>
  )
}

export default EmployeeDashBoard