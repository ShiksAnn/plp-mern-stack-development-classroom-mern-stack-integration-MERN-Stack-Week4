// client/src/pages/CreateEditPost.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PostForm from '../components/PostForm';
import { postService } from '../api/api';

export default function CreateEditPost() {
  const nav = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleCreate = async (formData) => {
    setLoading(true);
    try {
      await postService.create(formData);
      nav('/');
    } catch (err) { alert('Failed'); }
    setLoading(false);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Create Post</h1>
      <PostForm onSubmit={handleCreate} />
      {loading && <p>Saving...</p>}
    </div>
  );
}
