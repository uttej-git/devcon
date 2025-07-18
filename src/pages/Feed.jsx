import React, { useState } from 'react';
import Postcard from '../components/Postcard';

const Feed = () => {
  const [posts, setPosts] = useState([
    { id: 1, username: 'Uttej', content: 'Hello world!' },
    { id: 2, username: 'John Doe', content: 'Working on a cool project!' },
    { id: 3, username: 'Jane Smith', content: 'Any suggestions for beginner devs?' }
  ]);

  const [newPost, setNewPost] = useState({ username: '', content: '' });

  const handleChange = (e) => {
    setNewPost({ ...newPost, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newPost.username || !newPost.content) return;
    const updatedPost = {
      id: posts.length + 1,
      username: newPost.username,
      content: newPost.content,
    };
    setPosts([updatedPost, ...posts]);
    setNewPost({ username: '', content: '' });
  };

  return (
    <div style={{ padding: '1rem', maxWidth: '600px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Developer Feed</h2>

      {/* New Post Form */}
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
        <button type="submit" style={{ padding: '0.5rem 1rem' }}>Post</button>
      </form>

      {/* Post List */}
      {posts.map(post => (
        <Postcard key={post.id} username={post.username} content={post.content} />
      ))}
    </div>
  );
};

export default Feed;
