// client/src/pages/Login.jsx
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../api/api';
import { AppContext } from '../context/AppContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { loginUser } = useContext(AppContext);
  const nav = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await authService.login({ email, password });
      loginUser(res.user, res.token);
      nav('/');
    } catch (err) {
      alert('Login failed');
    }
  };

  return (
    <form onSubmit={submit} className="grid gap-3 max-w-md">
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required className="p-2 border rounded" />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" required className="p-2 border rounded" />
      <button type="submit" className="px-3 py-2 bg-blue-600 text-white rounded">Login</button>
    </form>
  );
}
