import React from "react";

const AdminDashBoardFrom = () => {
  return (
    <div className="mt-[100px] text-white flex justify-center items-start">
      <div className="w-full max-w-4xl bg-[#242424] p-10 rounded-2xl flex gap-10">
        {/* Left Side Form */}
        <form className="w-1/2 space-y-6">
          {/* Task Title */}
          <div className="flex flex-col space-y-2">
            <label className="text-gray-300 font-medium">Task Title</label>
            <input
              className="border border-gray-500 bg-transparent p-3 rounded-lg outline-none focus:border-[#53B587] transition"
              type="text"
            />
          </div>

          {/* Date */}
          <div className="flex flex-col space-y-2">
            <label className="text-gray-300 font-medium">Date</label>
            <input
              className="border border-gray-500 bg-transparent p-3 rounded-lg outline-none focus:border-[#53B587] transition"
              type="date"
            />
          </div>

          {/* Assign To */}
          <div className="flex flex-col space-y-2">
            <label className="text-gray-300 font-medium">Assign To</label>
            <input
              className="border border-gray-500 bg-transparent p-3 rounded-lg outline-none focus:border-[#53B587] transition"
              type="text"
            />
          </div>

          {/* Category */}
          <div className="flex flex-col space-y-2">
            <label className="text-gray-300 font-medium">Category</label>
            <input
              className="border border-gray-500 bg-transparent p-3 rounded-lg outline-none focus:border-[#53B587] transition"
              type="text"
              placeholder="Dev, Design, etc"
            />
          </div>
        </form>

        {/* Right Side Form */}
        <form className="w-1/2 space-y-6">
          {/* Description */}
          <div className="flex flex-col space-y-2">
            <label className="text-gray-300 font-medium">Description</label>
            <textarea className="border border-gray-500 bg-transparent p-3 rounded-lg h-[200px] outline-none resize-none focus:border-[#53B587] transition"></textarea>
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
