import React from 'react';
//import Loader from 'react-loader-spinner';

function Spinner({ message }) {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      
      <p className="text-lg text-center px-2">{message}</p>
    </div>
  );
}

export default Spinner;
