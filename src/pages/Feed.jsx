import React, { useState, useEffect } from 'react';
import Postcard from '../components/Postcard';

const Feed = () => {
  const [posts, setPosts] = useState(() => {
    const savedPosts = localStorage.getItem('devconnect-posts');
    if (savedPosts) return JSON.parse(savedPosts);

    const now = () =>
      new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

    return [
      {
        id: 1,
        username: 'Uttej',
        content: 'Hello world!',
        createdTime: now(),
        modifiedTime: now(),
      },
      {
        id: 2,
        username: 'John Doe',
        content: 'Working on a cool project!',
        createdTime: now(),
        modifiedTime: now(),
      },
      {
        id: 3,
        username: 'Jane Smith',
        content: 'Any suggestions for beginner devs?',
        createdTime: now(),
        modifiedTime: now(),
      },
    ];
  });

  const [newPost, setNewPost] = useState({ username: '', content: '' });
  const [editingPostId, setEditingPostId] = useState(null);
  const [editedContent, setEditedContent] = useState('');

  useEffect(() => {
    localStorage.setItem('devconnect-posts', JSON.stringify(posts));
  }, [posts]);

  const handleChange = (e) => {
    setNewPost({ ...newPost, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newPost.username || !newPost.content) return;

    const timestamp = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
    });

    const newEntry = {
      id: Date.now(),
      username: newPost.username,
      content: newPost.content,
      createdTime: timestamp,
      modifiedTime: timestamp,
    };

    setPosts([newEntry, ...posts]);
    setNewPost({ username: '', content: '' });
  };

  const handleDelete = (id) => {
    const updatedPosts = posts.filter((post) => post.id !== id);
    setPosts(updatedPosts);
  };

  const handleEdit = (id, currentContent) => {
    setEditingPostId(id);
    setEditedContent(currentContent);
  };

  const handleSave = (id) => {
    const timestamp = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
    });

    const updatedPosts = posts.map((post) =>
      post.id === id
        ? { ...post, content: editedContent, modifiedTime: timestamp }
        : post
    );
    setPosts(updatedPosts);
    setEditingPostId(null);
    setEditedContent('');
  };

  return (
    <div style={{ padding: '1rem', maxWidth: '600px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Developer Feed</h2>

      <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
        <input
          type="text"
          name="username"
          placeholder="Your name"
          value={newPost.username}
          onChange={handleChange}
          style={{ padding: '0.5rem', marginBottom: '0.5rem', width: '100%' }}
        />
        <textarea
          name="content"
          placeholder="What's on your mind?"
          value={newPost.content}
          onChange={handleChange}
          rows="3"
          style={{ padding: '0.5rem', marginBottom: '0.5rem', width: '100%' }}
        />
        <button type="submit" style={{ padding: '0.5rem 1rem' }}>
          Post
        </button>
      </form>

      {posts.map((post) => (
        <Postcard
          key={post.id}
          id={post.id}
          username={post.username}
          content={post.content}
          createdTime={post.createdTime}
          modifiedTime={post.modifiedTime}
          onDelete={handleDelete}
          onEdit={handleEdit}
          onSave={handleSave}
          isEditing={editingPostId === post.id}
          editedContent={editedContent}
          setEditedContent={setEditedContent}
        />
      ))}
    </div>
  );
};

export default Feed;
