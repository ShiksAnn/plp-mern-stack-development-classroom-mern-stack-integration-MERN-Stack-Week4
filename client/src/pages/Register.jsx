// client/src/pages/Register.jsx
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../api/api';
import { AppContext } from '../context/AppContext';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { loginUser } = useContext(AppContext);
  const nav = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await authService.register({ name, email, password });
      loginUser(res.user, res.token);
      nav('/');
    } catch (err) {
      alert('Register failed');
    }
  };

  return (
    <form onSubmit={submit} className="grid gap-3 max-w-md">
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" required className="p-2 border rounded" />
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required className="p-2 border rounded" />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" required className="p-2 border rounded" />
      <button type="submit" className="px-3 py-2 bg-green-600 text-white rounded">Register</button>
    </form>
  );
}
