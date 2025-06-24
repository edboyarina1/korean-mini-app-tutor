import React from 'react';

const SceneWrapper = ({ children, title }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100 flex flex-col items-center justify-center p-6">
      {title && (
        <h1 className="text-3xl font-bold mb-6 text-purple-800">{title}</h1>
      )}
      <div className="bg-white rounded-2xl shadow-xl p-6 max-w-xl w-full">
        {children}
      </div>
    </div>
  );
};

export default SceneWrapper;