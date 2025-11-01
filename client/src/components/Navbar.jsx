// client/src/components/Navbar.jsx
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

export default function Navbar() {
  const { user, logoutUser } = useContext(AppContext);
  const nav = useNavigate();

  const handleLogout = () => {
    logoutUser();
    nav('/');
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-4xl mx-auto flex items-center justify-between p-4">
        <div className="flex items-center gap-4">
          <Link to="/" className="font-bold text-lg">Blog</Link>
          <Link to="/create" className="text-sm text-gray-600">Create</Link>
        </div>
        <div className="flex items-center gap-3">
          {user ? (
            <>
              <span className="text-sm text-gray-700">Hi, {user.name}</span>
              <button onClick={handleLogout} className="px-3 py-1 bg-red-500 text-white rounded">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-sm text-gray-600">Login</Link>
              <Link to="/register" className="text-sm text-gray-600">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
