import React, { useEffect } from "react";
import Requestcard from "./Requestcard";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addrequest } from "../utils/slice/requestSlice";
import toast, { Toaster } from "react-hot-toast";

const Requests = () => {
  const requestreceieved = useSelector((store) => store.request);
  const dispatch = useDispatch();

  const requestreceived = async () => {
    try {
      const res = await axios.get("/api/user/requests/received", {
        withCredentials: true,
      });

      dispatch(addrequest(res.data));
      toast.success("Requests loaded!");
    } catch (err) {
      console.log(err);
      toast.error("Failed to load requests.");
    }
  };

  useEffect(() => {
    requestreceived();
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-10 px-4">
      <Toaster position="top-center" />
      <h1 className="text-3xl font-bold text-center text-blue-600 dark:text-blue-300 mb-10">
        Your Requests
      </h1>

      <div className="flex flex-col gap-8 items-center">
        {requestreceieved?.length === 0 ? (
          <h2 className="text-xl font-semibold text-gray-600 dark:text-gray-300">
            No more requests pending 👋
          </h2>
        ) : (
          requestreceieved.map((obj) => <Requestcard key={obj._id} data={obj} />)
        )}
      </div>
    </div>
  );
};

export default Requests;
