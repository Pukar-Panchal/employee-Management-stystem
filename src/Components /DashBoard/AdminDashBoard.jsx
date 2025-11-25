import React from 'react'
import Header from '../EmployeeDashBoardComponents/Header'
import AdminDashBoardFrom from '../AdminDashBoardComponents/AdminDashBoardFrom'

const AdminDashBoard = () => {
  return (
    <div className='h-screen w-full bg-black text-white'>
        <Header />
        <AdminDashBoardFrom />
    </div>
  )
}

export default AdminDashBoard