// LoadingPage.jsx
import React from 'react';

const LoadingPage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-[#1C1C1C]">
      <div className="flex flex-col items-center">
        <div className="animate-spin rounded-full border-t-4 border-white border-8 w-16 h-16 mb-4"></div>
        <p className="text-lg text-white">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingPage;
