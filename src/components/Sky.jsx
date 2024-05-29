import React from "react";

const Sky = () => {
  return (
    <div className="w-full h-64 bg-blue-500 relative overflow-hidden z-10">
      <div className="absolute w-24 h-24 bg-white rounded-full top-10 left-10 opacity-70"></div>
      <div className="absolute w-32 h-32 bg-white rounded-full top-16 left-32 opacity-50"></div>
      <div className="absolute w-16 h-16 bg-white rounded-full top-8 right-10 opacity-60"></div>
      <div className="absolute w-20 h-20 bg-white rounded-full top-20 right-24 opacity-70"></div>
      <div className="absolute w-40 h-40 bg-white rounded-full top-24 right-40 opacity-40"></div>
    </div>
  );
};

export default Sky;
