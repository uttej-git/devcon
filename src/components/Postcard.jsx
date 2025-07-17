import React from 'react';

const Postcard = ({ username, content }) => {
  return (
    <div style={{
      backgroundColor: 'white',
      padding: '1rem',
      marginBottom: '1rem',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h3 style={{ fontWeight: 'bold' }}>{username}</h3>
      <p>{content}</p>
    </div>
  );
};

export default Postcard;
