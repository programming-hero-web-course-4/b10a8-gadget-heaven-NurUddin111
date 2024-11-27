import React from "react";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-8xl font-extrabold text-blue-600">404</h1>
      <p className="text-2xl mt-4">
        Oops! The page you're looking for doesn't exist.
      </p>
      <p className="text-gray-500 mt-2">
        You might have the wrong address, or the page may have moved.
      </p>
      <button
        className="mt-6 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none"
        onClick={() => (window.location.href = "/")}
      >
        Go Back Home
      </button>
    </div>
  );
};

export default ErrorPage;
