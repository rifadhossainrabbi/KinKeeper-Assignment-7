import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-4">
      <div className="text-center">
        {/* Big 404 */}
        <h1 className="text-8xl md:text-9xl font-extrabold text-red-500">
          404
        </h1>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold mt-4">
          Oops! Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-400 mt-2 max-w-md mx-auto">
          The page you are looking for might have been removed or is temporarily
          unavailable.
        </p>

        {/* Button */}
        <Link to="/">
          <button className="mt-6 px-6 py-3 bg-red-500 hover:bg-red-600 rounded-xl font-medium transition duration-300 shadow-lg">
            Go Back Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;