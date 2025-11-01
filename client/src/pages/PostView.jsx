// client/src/pages/PostView.jsx
import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { postService } from '../api/api';
import { AppContext } from '../context/AppContext';

export default function PostView() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);
  const [comment, setComment] = useState('');
  const { user } = useContext(AppContext);

  useEffect(() => {
    setLoading(true);
    postService.get(id).then(p => setPost(p)).catch(() => {}).finally(() => setLoading(false));
  }, [id]);

  const submitComment = async () => {
    if (!comment) return;
    const old = post;
    const newPost = { ...post, comments: [...(post.comments || []), { user: user ? user.id : null, content: comment, createdAt: new Date() }] };
    setPost(newPost);
    setComment('');
    try {
      await postService.addComment(post._id, { content: comment });
    } catch (err) {
      setPost(old);
      alert('Failed to add comment');
    }
  };

  if (loading) return <p>Loading...</p>;
  if (!post) return <p>Not found</p>;

  return (
    <article className="bg-white p-4 rounded shadow-sm">
      <h1 className="text-2xl font-bold">{post.title}</h1>
      {post.featuredImage && <img src={(import.meta.env.VITE_API_URL?.replace('/api','') || 'http://localhost:5000') + post.featuredImage} alt="" className="mt-4 mb-4 rounded" />}
      <div className="prose" dangerouslySetInnerHTML={{ __html: post.content }} />

      <section className="mt-6">
        <h3 className="font-semibold">Comments</h3>
        { (post.comments || []).map((c, i) => (
          <div key={i} className="border-t py-3">
            <div className="text-xs text-gray-500">{c.user ? c.user.name || c.user : 'Anonymous'} - {new Date(c.createdAt).toLocaleString()}</div>
            <p>{c.content}</p>
          </div>
        ))}

        {user ? (
          <div className="mt-3">
            <textarea value={comment} onChange={e => setComment(e.target.value)} className="w-full p-2 border rounded" />
            <button onClick={submitComment} className="mt-2 px-3 py-1 bg-blue-600 text-white rounded">Add comment</button>
          </div>
        ) : <p>Please login to comment.</p>}
      </section>
    </article>
  );
}
