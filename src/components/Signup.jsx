import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const Signup = () => {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [emailid, setemailid] = useState("");
  const [password, setpassword] = useState("");
  const [gender, setgender] = useState("");
  const [skills, setskills] = useState("");
  const [photoUrL, setphotoUrL] = useState("");
  const [about, setabout] = useState("");

  const navigate = useNavigate();

  const usersignup = async () => {
    try {
      const res = await axios.post(
        '/api/signup',
        {
          FirstName: firstname,
          LastName: lastname,
          Email: emailid,
          Password: password,
          skills: skills,
          Gender: gender,
          photoURL: photoUrL,
          About: about,
        },
        {
          withCredentials: true,
        }
      );
      toast.success("Account created! Please log in.");
      navigate('/login');
    } catch (err) {
      console.error(err);
      toast.error("Signup failed. Try again.");
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 px-4 py-10">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="max-w-xl mx-auto bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-6">
          Please Register !!
        </h2>

        <div className="space-y-4">
          {/* First Name */}
          <div>
            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">
              First Name
            </label>
            <input
              type="text"
              value={firstname}
              onChange={(e) => setfirstname(e.target.value)}
              placeholder="First Name"
              className="input input-bordered w-full"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">
              Last Name
            </label>
            <input
              type="text"
              value={lastname}
              onChange={(e) => setlastname(e.target.value)}
              placeholder="Last Name"
              className="input input-bordered w-full"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">
              Email ID
            </label>
            <input
              type="email"
              value={emailid}
              onChange={(e) => setemailid(e.target.value)}
              placeholder="Email"
              className="input input-bordered w-full"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              placeholder="Password"
              className="input input-bordered w-full"
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">
              Gender
            </label>
            <input
              type="text"
              value={gender}
              onChange={(e) => setgender(e.target.value)}
              placeholder="Gender"
              className="input input-bordered w-full"
            />
          </div>

          {/* Skills */}
          <div>
            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">
              Skills
            </label>
            <input
              type="text"
              value={skills}
              onChange={(e) => setskills(e.target.value)}
              placeholder="e.g. JavaScript, React"
              className="input input-bordered w-full"
            />
          </div>

          {/* Photo URL */}
          <div>
            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">
              Photo URL
            </label>
            <input
              type="text"
              value={photoUrL}
              onChange={(e) => setphotoUrL(e.target.value)}
              placeholder="https://example.com/photo.jpg"
              className="input input-bordered w-full"
            />
          </div>

          {/* About */}
          <div>
            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">
              About You
            </label>
            <textarea
              value={about}
              onChange={(e) => setabout(e.target.value)}
              placeholder="Tell us about yourself"
              className="textarea textarea-bordered w-full"
              rows={3}
            ></textarea>
          </div>

          {/* Button */}
          <button
            onClick={usersignup}
            className="w-full btn btn-primary bg-blue-500 hover:bg-blue-600 text-white mt-4"
          >
            Sign Up
          </button>

          {/* Link to Login */}
          <div className="text-center mt-4 text-sm text-gray-700 dark:text-gray-300">
            Already registered?{" "}
            <Link to="/login" className="text-blue-500 hover:underline font-medium">
              Login here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
