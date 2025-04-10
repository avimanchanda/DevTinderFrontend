import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { deleteOneFeed } from "../utils/slice/feedSlice";
import toast from "react-hot-toast";

const Feedcard = ({ data }) => {
  const dispatch = useDispatch();

  const reviewconnectionrequest = async (status, id) => {
    try {
      const result = await axios.post(
        `http://localhost:3000/request/send/${status}/${id}`,
        {},
        { withCredentials: true }
      );

      dispatch(deleteOneFeed(id));
      toast.success(`Marked as ${status}`);
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="w-full max-w-3xl bg-gray-50 dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <img
          className="w-full md:w-48 h-48 object-cover"
          src={data?.photoURL}
          alt={`${data?.FirstName} ${data?.LastName}`}
        />
        <div className="flex-1 p-4 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold text-gray-800 dark:text-white">
              {data?.FirstName} {data?.LastName}
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
              {data?.About}
            </p>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              <strong>Skills:</strong> {data?.skills}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              <strong>Gender:</strong> {data?.Gender}
            </p>
          </div>

          <div className="mt-4 flex gap-4 justify-end">
            <button
              onClick={() => reviewconnectionrequest("ignored", data?._id)}
              className="btn btn-outline btn-error"
            >
              Ignore
            </button>
            <button
              onClick={() => reviewconnectionrequest("intrested", data?._id)}
              className="btn btn-success"
            >
              Interested
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedcard;
