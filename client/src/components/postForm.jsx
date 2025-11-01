// client/src/components/PostForm.jsx
import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';

export default function PostForm({ initial = {}, onSubmit }) {
  const { categories } = useContext(AppContext);
  const [title, setTitle] = useState(initial.title || '');
  const [content, setContent] = useState(initial.content || '');
  const [excerpt, setExcerpt] = useState(initial.excerpt || '');
  const [category, setCategory] = useState(initial.category?._id || '');
  const [tags, setTags] = useState((initial.tags && initial.tags.join(',')) || '');
  const [file, setFile] = useState(null);

  const submit = (e) => {
    e.preventDefault();
    const fd = new FormData();
    fd.append('title', title);
    fd.append('content', content);
    fd.append('excerpt', excerpt);
    fd.append('category', category);
    fd.append('tags', tags);
    if (file) fd.append('featuredImage', file);
    onSubmit(fd);
  };

  return (
    <form onSubmit={submit} className="grid gap-3">
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" required className="p-2 border rounded" />
      <select value={category} onChange={e => setCategory(e.target.value)} required className="p-2 border rounded">
        <option value="">Select category</option>
        {categories.map(c => <option key={c._id} value={c._1d ?? c._id}>{c.name}</option>)}
      </select>
      <textarea value={excerpt} onChange={e => setExcerpt(e.target.value)} placeholder="Excerpt (optional)" className="p-2 border rounded" />
      <textarea value={content} onChange={e => setContent(e.target.value)} placeholder="Content" required rows={10} className="p-2 border rounded" />
      <input value={tags} onChange={e => setTags(e.target.value)} placeholder="tags (comma separated)" className="p-2 border rounded" />
      <input type="file" accept="image/*" onChange={e => setFile(e.target.files[0])} />
      <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded">Save</button>
    </form>
  );
}
