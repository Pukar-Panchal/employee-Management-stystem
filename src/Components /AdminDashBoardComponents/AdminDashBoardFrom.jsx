import React, { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const AdminDashBoardFrom = () => {
  const { employeeData, setEmployeeData } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    assignTo: "",
    category: "",
    description: "",
  });
  const adminDashBoardFromHandler = (e) => {
    e.preventDefault();

    const taskGivenToEmplyee = employeeData.map((emp) => {
      if (emp.name.toLowerCase() === formData.assignTo.toLowerCase()) {
        return {
          ...emp,
          tasks: [...emp.tasks, {...formData}],
          taskCount: {
            ...emp.taskCount,
            newTask: emp.taskCount.newTask + 1,
          },
        };
      }
      return emp;
    });

    console.log(taskGivenToEmplyee);
    localStorage.setItem("employeeDataJ", JSON.stringify(taskGivenToEmplyee));
    setEmployeeData(taskGivenToEmplyee);

    // reset form
    setFormData({
      title: "",
      date: "",
      assignTo: "",
      category: "",
      description: "",
    });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    // prev => prev this same as prev => {return prev};
    // this previousFormData is the old object of useState like (title:, or date) this saprate (...) here becouse it paste again old data as object to store new data init
    setFormData((previousFormData) => ({
      ...previousFormData,
      [name]: value,
    }));
  };
  return (
    <div className="w-full text-white flex justify-center items-start p-5 rounded-t-2xl bg-[#2e2e2e]">
      <div className="w-full bg-[#242424] py-3 px-5 rounded-2xl flex gap-10">
        {/* Left Side Form */}
        <form
          className="w-1/2 space-y-6"
          onSubmit={(e) => {
            adminDashBoardFromHandler(e);
          }}
        >
          {/* Task Title */}
          <div className="flex flex-col space-y-2">
            <label className="text-gray-300 font-medium">Task Title</label>
            <input
              className="border border-gray-500 bg-transparent p-3 rounded-lg outline-none focus:border-[#53B587] transition"
              type="text"
              name="title"
              onChange={handleChange}
              value={formData.title}
            />
          </div>

          {/* Date */}
          <div className="flex flex-col space-y-2">
            <label className="text-gray-300 font-medium">Date</label>
            <input
              className="border border-gray-500 bg-transparent p-3 rounded-lg outline-none focus:border-[#53B587] transition"
              type="date"
              name="date"
              onChange={handleChange}
              value={formData.date}
            />
          </div>

          {/* Assign To */}
          <div className="flex flex-col space-y-2">
            <label className="text-gray-300 font-medium">Assign To</label>
            <input
              className="border border-gray-500 bg-transparent p-3 rounded-lg outline-none focus:border-[#53B587] transition"
              type="text"
              name="assignTo"
              onChange={handleChange}
              value={formData.assignTo}
            />
          </div>

          {/* Category */}
          <div className="flex flex-col space-y-2">
            <label className="text-gray-300 font-medium">Category</label>
            <input
              className="border border-gray-500 bg-transparent p-3 rounded-lg outline-none focus:border-[#53B587] transition"
              type="text"
              placeholder="Dev, Design, etc"
              name="category"
              onChange={handleChange}
              value={formData.category}
            />
          </div>
        </form>

        {/* Right Side Form */}
        <form
          className="w-1/2 space-y-6"
          onSubmit={(e) => {
            adminDashBoardFromHandler(e);
          }}
        >
          {/* Description */}
          <div className="flex flex-col space-y-2">
            <label className="text-gray-300 font-medium">Description</label>
            <textarea
              className="border border-gray-500 bg-transparent p-3 rounded-lg h-[200px] outline-none resize-none focus:border-[#53B587] transition"
              name="description"
              onChange={handleChange}
              value={formData.description}
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-start">
            <button className="px-6 py-3 rounded-xl bg-[#53B587] hover:bg-[#62c493] transition font-semibold">
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminDashBoardFrom;
