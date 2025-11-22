import React, { useState } from "react";

const Login = () => {
  const [emailData, setEmailData] = useState("");
  const [passwordData, setPasswordData] = useState("");
  function submitHandler (e) {
    e.preventDefault();
    setEmailData("");
    setPasswordData("");
  }
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-black">
      <div className="border-2 border-emerald-600 p-20 flex justify-center items-center rounded-[20px]">
        <form className="flex flex-col justify-center items-center w-full gap-4" onSubmit={(e)=>{submitHandler(e)}}>
          <input
            required
            className="border-2 rounded-full border-emerald-600 text-xl py-3 px-5 outline-none placeholder: text-gray-300"
            type="email"
            placeholder="Enter your email"
            onChange={(e)=>{setEmailData(e.target.value)}}
            value={emailData}
          />
          <input
            required
            className="border-2 rounded-full border-emerald-600 text-xl py-3 px-5 outline-none placeholder: text-gray-300"
            type="password"
            placeholder="Enter your password"
            onChange={(e)=>{setPasswordData(e.target.value)}}
            value={passwordData}
          />
          <button className="text-white rounded-full border-none bg-emerald-600 text-xl text-center py-3 px-5">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
