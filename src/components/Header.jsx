import axios from 'axios';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../utils/slice/userSlice';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Header = () => {
  const checkifuserdatapresent = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      await axios.post('http://localhost:3000/logout', {}, { withCredentials: true });
      dispatch(removeUser());
      navigate('/login');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="navbar bg-base-100 px-4">
      <div className="flex-1">
      <li className="btn btn-ghost text-xl"><Link to='/feed'>DevTinder</Link></li> 
      </div>

      {checkifuserdatapresent && (
        <div className="flex items-center gap-4">
          {/* Welcome Text */}
          <p className="text-base font-semibold">
            Welcome {checkifuserdatapresent.FirstName}
          </p>

          {/* Avatar Dropdown */}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  className="object-contain"
                  alt="User Avatar"
                  src={checkifuserdatapresent.photoURL}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
              <Link to='/profile'>
                   Update Profile
                   </Link>
               
              </li>
              <li><Link to='/connections'>Your Connections</Link></li>
              <li><Link to="/requests">Requests Received</Link></li>
              <li><Link to="/feed">New Feeds</Link></li>

              <li><a onClick={logoutHandler}>Logout</a></li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
