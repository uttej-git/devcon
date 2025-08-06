import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../App';
import Postcard from '../components/Postcard';
import './FeedGlow.css';

const Feed = () => {
  const { darkMode } = useContext(ThemeContext);

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

    const now = () => new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

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
  const [showPostForm, setShowPostForm] = useState(false);
  const [profileStats, setProfileStats] = useState({
    user: 'Guest',
    postCount: 0,
    totalLikes: 0,
    recentPost: 'No recent post',
  });

  useEffect(() => {
    localStorage.setItem('devconnect-posts', JSON.stringify(posts));
  }, [posts]);

  useEffect(() => {
    localStorage.setItem('devconnect-likedPosts', JSON.stringify(likedPosts));
  }, [likedPosts]);

  useEffect(() => {
    const user = posts.length > 0 ? posts[0].username : 'Guest';
    const userPosts = posts.filter((post) => post.username === user);
    const totalLikes = userPosts.reduce((sum, post) => sum + post.likes, 0);

    setProfileStats({
      user,
      postCount: userPosts.length,
      totalLikes,
      recentPost: userPosts[0]?.content || 'No recent post',
    });
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
      likes: 0,
    };

    setPosts([newEntry, ...posts]);
    setNewPost({ username: '', content: '' });
    setShowPostForm(false);
  };

  const handleClear = () => setNewPost({ username: '', content: '' });

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this post?");
    if (!confirmDelete) return;
    setPosts(posts.filter((post) => post.id !== id));
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
      post.id === id ? { ...post, content: editedContent, modifiedTime: timestamp } : post
    );
    setPosts(updatedPosts);
    setEditingPostId(null);
    setEditedContent('');
  };

  const handleLikeToggle = (id) => {
    const isAlreadyLiked = likedPosts.includes(id);
    setPosts(posts.map((post) =>
      post.id === id ? { ...post, likes: post.likes + (isAlreadyLiked ? -1 : 1) } : post
    ));
    setLikedPosts(
      isAlreadyLiked ? likedPosts.filter((postId) => postId !== id) : [...likedPosts, id]
    );
  };

  const filteredPosts = posts.filter(
    (post) =>
      post.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ display: 'flex', height: 'calc(100vh - 64px)' }}>
      {/* Left Side (optional) */}
      <div style={{ width: '20%', backgroundColor: darkMode ? '#121212' : '#f5f5f5' }}></div>

      {/* Center - Feed */}
      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: '1rem',
          maxWidth: '720px',
          margin: '0 auto',
          backgroundColor: darkMode ? '#1f1f1f' : '#fff',
          color: darkMode ? 'white' : 'black',
        }}
      >
        <h1
          className="glow-text"
          style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '2rem',
            fontFamily: 'Orbitron, monospace',
          }}
        >
          💡 Developer Feed
        </h1>

        {/* Add Post Button */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '1.5rem',
            border: `1px solid ${darkMode ? '#333' : '#ccc'}`,
            borderRadius: '6px',
            overflow: 'hidden',
            backgroundColor: darkMode ? '#2b2b2b' : '#fff',
          }}
        >
          <button
            onClick={() => setShowPostForm(!showPostForm)}
            style={{
              fontSize: '1rem',
              padding: '0.6rem 1.2rem',
              backgroundColor: 'transparent',
              border: 'none',
              borderRight: `1px solid ${darkMode ? '#333' : '#ccc'}`,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'purple',
              fontWeight: 'bold',
            }}
          >
            ➕ Add Post
          </button>
          <div style={{
            flex: 1,
            padding: '0.6rem 1rem',
            color: darkMode ? '#bbb' : '#999',
            fontStyle: 'italic',
          }}>
            Create a new post and share your thoughts!
          </div>
        </div>

        {/* Post Form */}
        {showPostForm && (
          <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
            <input
              type="text"
              name="username"
              placeholder="Your name"
              value={newPost.username}
              onChange={handleChange}
              style={{
                padding: '0.5rem',
                marginBottom: '0.5rem',
                width: '100%',
                backgroundColor: darkMode ? '#333' : '#fff',
                color: darkMode ? 'white' : 'black',
                border: `1px solid ${darkMode ? '#444' : '#ccc'}`,
              }}
            />
            <textarea
              name="content"
              placeholder="What's on your mind?"
              value={newPost.content}
              onChange={handleChange}
              rows="3"
              style={{
                padding: '0.5rem',
                marginBottom: '0.5rem',
                width: '100%',
                backgroundColor: darkMode ? '#333' : '#fff',
                color: darkMode ? 'white' : 'black',
                border: `1px solid ${darkMode ? '#444' : '#ccc'}`,
              }}
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

        {/* Search */}
        <input
          type="text"
          placeholder="🔍 Search by name or content"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: '0.5rem',
            marginBottom: '1rem',
            width: '100%',
            backgroundColor: darkMode ? '#2d2d2d' : '#fff',
            color: darkMode ? 'white' : 'black',
            border: `1px solid ${darkMode ? '#444' : '#ccc'}`,
            borderRadius: '4px',
          }}
        />

        {/* Posts */}
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

      {/* Right - Profile Summary */}
      <div
        style={{
          width: '20%',
          backgroundColor: darkMode ? '#121212' : '#f5f5f5',
          color: darkMode ? 'white' : 'black',
          padding: '1rem',
        }}
      >
        <h3 style={{ color: 'purple' }}>👤 <strong>Profile Summary</strong></h3>
        <p><strong>Name:</strong> {profileStats.user}</p>
        <p><strong>Total Posts:</strong> {profileStats.postCount}</p>
        <p><strong>Total Likes:</strong> {profileStats.totalLikes}</p>
        <p><strong>Recent Post:</strong><br />{profileStats.recentPost}</p>
      </div>
    </div>
  );
};

export default Feed;
