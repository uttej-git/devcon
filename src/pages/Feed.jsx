import React, { useState, useEffect } from 'react';
import Postcard from '../components/Postcard';

const Feed = () => {
  const [posts, setPosts] = useState(() => {
    const savedPosts = localStorage.getItem('devconnect-posts');
    let loadedPosts = [];

    if (savedPosts) {
      try {
        loadedPosts = JSON.parse(savedPosts);
      } catch (e) {
        console.error('Error parsing saved posts:', e);
      }
    }

    const now = () =>
      new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

    const defaultPosts = [
      {
        id: 1,
        username: 'Uttej',
        content: 'Hello world!',
        createdTime: now(),
        modifiedTime: now(),
        likes: 0,
      },
      {
        id: 2,
        username: 'John Doe',
        content: 'Working on a cool project!',
        createdTime: now(),
        modifiedTime: now(),
        likes: 0,
      },
      {
        id: 3,
        username: 'Jane Smith',
        content: 'Any suggestions for beginner devs?',
        createdTime: now(),
        modifiedTime: now(),
        likes: 0,
      },
    ];

    const data = loadedPosts.length > 0 ? loadedPosts : defaultPosts;

    return data.map((post) => ({
      ...post,
      likes: post.likes !== undefined ? post.likes : 0,
    }));
  });

  const [likedPosts, setLikedPosts] = useState(() => {
    const saved = localStorage.getItem('devconnect-likedPosts');
    return saved ? JSON.parse(saved) : [];
  });

  const [newPost, setNewPost] = useState({ username: '', content: '' });
  const [editingPostId, setEditingPostId] = useState(null);
  const [editedContent, setEditedContent] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [showPostForm, setShowPostForm] = useState(false); // 🔄 toggle form

  useEffect(() => {
    localStorage.setItem('devconnect-posts', JSON.stringify(posts));
  }, [posts]);

  useEffect(() => {
    localStorage.setItem('devconnect-likedPosts', JSON.stringify(likedPosts));
  }, [likedPosts]);

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
      likes: 0,
    };

    setPosts([newEntry, ...posts]);
    setNewPost({ username: '', content: '' });
    setShowPostForm(false); // Hide form after post
  };

  const handleClear = () => {
    setNewPost({ username: '', content: '' });
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this post?");
    if (!confirmDelete) return;

    const updatedPosts = posts.filter((post) => post.id !== id);
    setPosts(updatedPosts);
    setLikedPosts(likedPosts.filter((postId) => postId !== id));
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

  const handleLikeToggle = (id) => {
    const isAlreadyLiked = likedPosts.includes(id);

    const updatedPosts = posts.map((post) =>
      post.id === id
        ? { ...post, likes: post.likes + (isAlreadyLiked ? -1 : 1) }
        : post
    );
    setPosts(updatedPosts);

    if (isAlreadyLiked) {
      setLikedPosts(likedPosts.filter((postId) => postId !== id));
    } else {
      setLikedPosts([...likedPosts, id]);
    }
  };

  const filteredPosts = posts.filter(
    (post) =>
      post.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ display: 'flex', height: 'calc(100vh - 64px)' }}>
      
      {/* Left panel (static) */}
      <div style={{
        width: '20%',
        backgroundColor: '#1f1f1f',
        color: 'white',
        padding: '1rem',
        display: 'none',
        flexShrink: 0,
      }}>
        <h3>🔔 Notifications</h3>
        <p>Coming soon...</p>
      </div>

      {/* Center scrollable feed */}
      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: '1rem',
          maxWidth: '600px',
          margin: '0 auto',
        }}
      >
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Developer Feed</h2>

        <input
          type="text"
          placeholder="🔍 Search by name or content"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: '0.5rem',
            marginBottom: '1rem',
            width: '100%',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
        />

        {/* Toggle Post Form */}
        <div
  style={{
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1.5rem',
    border: '1px solid #ccc',
    borderRadius: '6px',
    overflow: 'hidden',
    backgroundColor: '#f9f9f9',
  }}
>
  <button
    onClick={() => setShowPostForm(!showPostForm)}
    style={{
      fontSize: '1rem',
      padding: '0.6rem 1.2rem',
      backgroundColor: '#fff',
      border: 'none',
      borderRight: '1px solid #ccc',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
    }}
  >
    ➕ Add Post
  </button>

  <div style={{
    flex: 1,
    padding: '0.6rem 1rem',
    color: '#999',
    fontStyle: 'italic',
  }}>
    Create a new post and share your thoughts!
  </div>
</div>


        {showPostForm && (
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
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button type="submit" style={{ padding: '0.5rem 1rem' }}>
                Post
              </button>
              <button type="button" onClick={handleClear} style={{ padding: '0.5rem 1rem' }}>
                Clear
              </button>
            </div>
          </form>
        )}

        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <Postcard
              key={post.id}
              id={post.id}
              username={post.username}
              content={post.content}
              createdTime={post.createdTime}
              modifiedTime={post.modifiedTime}
              likes={post.likes}
              isLiked={likedPosts.includes(post.id)}
              onDelete={handleDelete}
              onEdit={handleEdit}
              onSave={handleSave}
              isEditing={editingPostId === post.id}
              editedContent={editedContent}
              setEditedContent={setEditedContent}
              onLike={handleLikeToggle}
            />
          ))
        ) : (
          <p>No posts found.</p>
        )}
      </div>

      {/* Right panel (static) */}
      <div style={{
        width: '20%',
        backgroundColor: '#1f1f1f',
        color: 'white',
        padding: '1rem',
        display: 'none',
        flexShrink: 0,
      }}>
        <h3>👤 Profile</h3>
        <p>Coming soon...</p>
      </div>
    </div>
  );
};

export default Feed;
