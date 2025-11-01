// client/src/components/PostCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function PostCard({ post }) {
  return (
    <article className="bg-white p-4 rounded shadow-sm">
      <h3 className="text-lg font-semibold"><Link to={`/posts/${post._id}`}>{post.title}</Link></h3>
      <p className="text-sm text-gray-700 mt-2">{post.excerpt || (post.content && post.content.slice(0, 150) + '...')}</p>
      <div className="text-xs text-gray-500 mt-3">
        <span>By {post.author?.name}</span> • <span>{new Date(post.createdAt).toLocaleDateString()}</span>
      </div>
    </article>
  );
}
