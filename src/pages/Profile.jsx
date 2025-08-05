import React, { useEffect, useState } from 'react';

const Profile = () => {
  const [userStats, setUserStats] = useState({
    user: 'Guest',
    postCount: 0,
    totalLikes: 0,
    recentPost: 'No recent post',
  });

  useEffect(() => {
    const savedPosts = localStorage.getItem('devconnect-posts');
    let posts = [];

    if (savedPosts) {
      try {
        posts = JSON.parse(savedPosts);
      } catch (e) {
        console.error('Error parsing saved posts:', e);
      }
    }

    // Guess current user from most recent post
    const user = posts.length > 0 ? posts[0].username : 'Guest';
    const userPosts = posts.filter((post) => post.username === user);
    const totalLikes = userPosts.reduce((sum, post) => sum + post.likes, 0);

    setUserStats({
      user,
      postCount: userPosts.length,
      totalLikes,
      recentPost: userPosts[0]?.content || 'No recent post',
    });
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Your Profile</h1>
      <div style={{ marginTop: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
        <p><strong>👤 Name:</strong> {userStats.user}</p>
        <p><strong>📝 Total Posts:</strong> {userStats.postCount}</p>
        <p><strong>❤️ Total Likes:</strong> {userStats.totalLikes}</p>
        <p><strong>🧾 Recent Post:</strong><br />{userStats.recentPost}</p>
      </div>
    </div>
  );
};

export default Profile;
