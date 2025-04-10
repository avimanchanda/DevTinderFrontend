import React from 'react';

const Connectioncard = ({ data }) => {
  return (
    <div className="w-full max-w-3xl bg-gray-50 dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <img
          className="w-full md:w-48 h-48 object-cover"
          src={data?.photoURL}
          alt={`${data?.FirstName} ${data?.LastName}`}
        />
        <div className="flex-1 p-4 flex flex-col justify-center">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white">
            {data?.FirstName} {data?.LastName}
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
            {data?.About}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            <strong>Skills:</strong> {data?.skills}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            <strong>Gender:</strong> {data?.Gender}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Connectioncard;
