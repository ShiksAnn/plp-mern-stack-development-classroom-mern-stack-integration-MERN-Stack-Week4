// client/src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import { fetchPosts } from '../api/api';
import PostCard from '../components/PostCard';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const [q, setQ] = useState('');

  const fetch = async (p = 1) => {
    setLoading(true);
    try {
      const res = await postService.getAll(p, 10, null, q);
      setPosts(res.docs || []);
      setTotal(res.total || 0);
      setPage(res.page || p);
    } catch (err) { console.error(err); }
    setLoading(false);
  };

  useEffect(() => { fetch(1); }, [q]);

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Posts</h1>
        <input placeholder="Search" value={q} onChange={e => setQ(e.target.value)} className="p-2 border rounded" />
      </div>

      {loading ? <p>Loading...</p> : (
        <div className="grid gap-4">
          {posts.map(p => <PostCard key={p._id} post={p} />)}
        </div>
      )}

      <div className="mt-4 flex items-center gap-2">
        <button onClick={() => fetch(Math.max(1, page - 1))} disabled={page <= 1} className="px-3 py-1 bg-gray-200 rounded">Prev</button>
        <span>{page}</span>
        <button onClick={() => fetch(page + 1)} disabled={page * 10 >= total} className="px-3 py-1 bg-gray-200 rounded">Next</button>
      </div>
    </div>
  );
}
