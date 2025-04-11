import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/slice/userSlice";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [emailid, setemailid] = useState("");
  const [password, setpassword] = useState("");

  const handlelogin = async () => {
    try {
      const res = await axios.post(
        "/api/login",
        {
          Email: emailid,
          Password: password,
        },
        { withCredentials: true }
      );

      dispatch(addUser(res.data));
      toast.success("Login successful!");
      navigate("/feed");
    } catch (err) {
      console.error(err);
      toast.error("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 px-4 py-10">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="w-full max-w-md mx-auto bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-6">
          Please Login
        </h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
              Email ID
            </label>
            <input
              type="email"
              value={emailid}
              onChange={(e) => setemailid(e.target.value)}
              placeholder="Enter your email"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              placeholder="Enter your password"
              className="input input-bordered w-full"
            />
          </div>

          <button
            onClick={handlelogin}
            className="w-full btn btn-primary mt-2 bg-blue-500 hover:bg-blue-600 text-white transition"
          >
            Login
          </button>

          <div className="text-center mt-4 text-sm text-gray-700 dark:text-gray-300">
            New user?{" "}
            <Link to="/signup" className="text-blue-500 hover:underline font-medium">
              Sign up here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
