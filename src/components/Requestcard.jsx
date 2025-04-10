import React from "react";
import { useDispatch } from "react-redux";
import { deleteOnerequest } from "../utils/slice/requestSlice";
import axios from "axios";
import toast from "react-hot-toast";

const Requestcard = ({ data }) => {
  const dispatch = useDispatch();

  const reviewconnectionrequest = async (status, id) => {
    try {
      await axios.post(
        `http://localhost:3000/request/review/${status}/${id}`,
        {},
        { withCredentials: true }
      );
      dispatch(deleteOnerequest(id));
      toast.success(`Request ${status}`);
    } catch (err) {
      console.error(err);
      toast.error("Failed to update request");
    }
  };

  return (
    <div className="w-full max-w-3xl bg-gray-50 dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <img
          className="w-full md:w-40 h-48 object-cover"
          src={data?.FromUserId?.photoURL}
          alt={`${data?.FromUserId?.FirstName} ${data?.FromUserId?.LastName}`}
        />
        <div className="flex-1 p-4 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold text-gray-800 dark:text-white">
              {data?.FromUserId?.FirstName} {data?.FromUserId?.LastName}
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
              {data?.FromUserId?.About}
            </p>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              <strong>Skills:</strong> {data?.FromUserId?.skills}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              <strong>Gender:</strong> {data?.FromUserId?.Gender}
            </p>
          </div>

          <div className="mt-4 flex gap-4 justify-end">
            <button
              onClick={() => reviewconnectionrequest("rejected", data?._id)}
              className="btn btn-outline btn-error"
            >
              Reject
            </button>
            <button
              onClick={() => reviewconnectionrequest("accepted", data?._id)}
              className="btn btn-success"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Requestcard;
