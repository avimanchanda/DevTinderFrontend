import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addConnection } from '../utils/slice/connectionSlice';
import Connectioncard from './Connectioncard';

const Connections = () => {
  const connections = useSelector((store) => store.connection);
  const dispatch = useDispatch();

  const fetchConnections = async () => {
    try {
      const result = await axios.get(
        'http://localhost:3000/user/requests/connections',
        {
          withCredentials: true,
        }
      );
      dispatch(addConnection(result.data));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  return (
    <div className="min-h-screen px-4 py-10 bg-white dark:bg-gray-900">
      <h1 className="text-3xl font-bold text-center text-blue-600 dark:text-blue-300 mb-10">
        Your Connections
      </h1>

      <div className="flex flex-col gap-8 items-center">
        {connections?.length === 0 ? (
          <h2 className="text-xl font-semibold text-gray-600 dark:text-gray-300">
            You don't have any connections yet 😔
          </h2>
        ) : (
          connections?.map((obj) => <Connectioncard key={obj._id} data={obj} />)
        )}
      </div>
    </div>
  );
};

export default Connections;
