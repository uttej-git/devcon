import React from 'react';
import Postcard from '../components/Postcard';

const Feed = () => {
  const dummyPosts = [
    { id: 1, username: 'Uttej', content: 'Hello world!' },
    { id: 2, username: 'John Doe', content: 'Working on a cool project!' },
    { id: 3, username: 'Jane Smith', content: 'Any suggestions for beginner devs?' }
  ];

  return (
    <div style={{ padding: '1rem', maxWidth: '600px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Developer Feed</h2>
      {dummyPosts.map(post => (
        <Postcard key={post.id} username={post.username} content={post.content} />
      ))}
    </div>
  );
};

export default Feed;
