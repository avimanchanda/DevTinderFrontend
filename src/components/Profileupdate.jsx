import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addUser } from "../utils/slice/userSlice";
import toast, { Toaster } from "react-hot-toast";

const Profileupdate = () => {
  const loggedinuser = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const [firstname, setfirstname] = useState(loggedinuser?.FirstName );
  const [lastname, setlastname] = useState(loggedinuser?.LastName );
  const [skills, setskills] = useState(loggedinuser?.skills );
  const [photoUrL, setphotoUrL] = useState(loggedinuser?.photoURL );
  const [about, setabout] = useState(loggedinuser?.About );

  const updateuser = async () => {
    try {
      const res = await axios.patch(
        "/api/profile/edit",
        {
          FirstName: firstname,
          LastName: lastname,
          skills: skills,
          photoURL: photoUrL,
          About: about,
        },
        {
          withCredentials: true,
        }
      );

      const updatedUser = res.data.data;
      setfirstname(updatedUser.FirstName);
      setlastname(updatedUser.LastName);
      setskills(updatedUser.skills);
      setphotoUrL(updatedUser.photoURL);
      setabout(updatedUser.About);
      dispatch(addUser(updatedUser));

      toast.success("Profile updated successfully! 🎉");
    } catch (err) {
      console.error(err);
      toast.error("Failed to update profile.");
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors py-10 px-4">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-blue-500 dark:text-blue-300 mb-8">
          Update Your Profile
        </h1>

        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md p-6 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 dark:text-gray-200 mb-1">
                First Name
              </label>
              <input
                type="text"
                value={firstname}
                onChange={(e) => setfirstname(e.target.value)}
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 dark:text-gray-200 mb-1">
                Last Name
              </label>
              <input
                type="text"
                value={lastname}
                onChange={(e) => setlastname(e.target.value)}
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 dark:text-gray-200 mb-1">
                Skills
              </label>
              <input
                type="text"
                value={skills}
                onChange={(e) => setskills(e.target.value)}
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 dark:text-gray-200 mb-1">
                Photo URL
              </label>
              <input
                type="text"
                value={photoUrL}
                onChange={(e) => setphotoUrL(e.target.value)}
                className="input input-bordered w-full"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-bold text-gray-700 dark:text-gray-200 mb-1">
                About
              </label>
              <textarea
                value={about}
                onChange={(e) => setabout(e.target.value)}
                className="textarea textarea-bordered w-full"
                rows={3}
              ></textarea>
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <button
              className="btn btn-primary px-8 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-lg transition"
              onClick={updateuser}
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profileupdate;
