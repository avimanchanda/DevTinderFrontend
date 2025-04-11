import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addfeed } from "../utils/slice/feedSlice";
import axios from "axios";
import Feedcard from "./Feedcard";
import toast, { Toaster } from "react-hot-toast";

const Feed = () => {
  const feeddata = useSelector((store) => store.feed);
  const dispatch = useDispatch();

  const getyourfeeds = async () => {
    try {
      const res = await axios.get("/api/user/feeds", {
        withCredentials: true,
      });

      dispatch(addfeed(res.data));
      toast.success("Feeds loaded!");
    } catch (err) {
      console.log(err);
      toast.error("Failed to load feeds.");
    }
  };

  useEffect(() => {
    getyourfeeds();
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-10 px-4">
      <Toaster position="top-center" reverseOrder={false} />
      <h1 className="text-3xl font-bold text-center text-blue-600 dark:text-blue-300 mb-10">
        Your Feed
      </h1>

      {feeddata?.length > 0 ? (
        <div className="flex flex-col items-center gap-8">
          {feeddata.map((data) => (
            <Feedcard key={data._id} data={data} />
          ))}
        </div>
      ) : (
        <h2 className="text-xl font-semibold text-center text-gray-600 dark:text-gray-300 mt-20">
          No more profiles left 🚫
        </h2>
      )}
    </div>
  );
};

export default Feed;
