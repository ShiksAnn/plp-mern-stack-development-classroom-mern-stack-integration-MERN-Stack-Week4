// client/src/context/AppContext.jsx
import React, { createContext, useState, useEffect } from 'react';
import { categoryService } from '../api/api';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [user, setUser] = useState(() => {
    try { return JSON.parse(localStorage.getItem('user')); } catch (e) { return null; }
  });

  useEffect(() => {
    categoryService.getAll().then(setCategories).catch(() => {});
  }, []);

  const loginUser = (u, token) => {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(u));
    setUser(u);
  };

  const logoutUser = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <AppContext.Provider value={{ categories, setCategories, user, loginUser, logoutUser }}>
      {children}
    </AppContext.Provider>
  );
};
