import React, { useContext } from "react";
import HeaderAdmin from "../AdminDashBoardComponents/HeaderAdmin"
import AdminDashBoardFrom from "../AdminDashBoardComponents/AdminDashBoardFrom";
import AboutEmployeeCardAdminDashBoard from "../AdminDashBoardComponents/AboutEmployeeCardAdminDashBoard";

const AdminDashBoard = () => {
  return (
    <div className="h-screen w-full bg-black text-white">
      <HeaderAdmin />
      <AdminDashBoardFrom />
      <AboutEmployeeCardAdminDashBoard />
    </div>
  );
};

export default AdminDashBoard;
