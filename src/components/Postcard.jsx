import React, { useContext } from 'react';
import { ThemeContext } from '../App';

const Postcard = ({
  id,
  username,
  content,
  createdTime,
  modifiedTime,
  likes,
  isLiked,
  onDelete,
  onEdit,
  onSave,
  isEditing,
  editedContent,
  setEditedContent,
  onLike,
}) => {
  const { darkMode } = useContext(ThemeContext);

  const cardStyle = {
    backgroundColor: darkMode ? '#2c2c2c' : '#ffffff',
    color: darkMode ? '#f0f0f0' : '#000000',
    padding: '1rem',
    marginBottom: '1.5rem',
    borderRadius: '12px',
    boxShadow: darkMode
      ? '0 2px 10px rgba(255, 255, 255, 0.05)'
      : '0 2px 8px rgba(0, 0, 0, 0.08)',
    transition: 'all 0.3s ease',
  };

  const buttonStyle = {
    padding: '0.4rem 0.8rem',
    fontSize: '0.9rem',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    marginRight: '0.5rem',
    transition: 'background-color 0.2s',
  };

  const likeButtonStyle = {
    ...buttonStyle,
    backgroundColor: isLiked ? '#e74c3c' : '#ecf0f1',
    color: isLiked ? '#fff' : '#333',
  };

  const editButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#3498db',
    color: '#fff',
  };

  const deleteButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#e74c3c',
    color: '#fff',
  };

  const inputStyle = {
    width: '100%',
    padding: '0.5rem',
    marginBottom: '0.5rem',
    borderRadius: '6px',
    border: '1px solid #ccc',
    backgroundColor: darkMode ? '#1f1f1f' : '#f9f9f9',
    color: darkMode ? '#f0f0f0' : '#000',
    resize: 'vertical',
  };

  const smallText = {
    fontSize: '0.8rem',
    color: darkMode ? '#aaa' : '#666',
  };

  return (
    <div style={cardStyle}>
      <h3 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>{username}</h3>

      {isEditing ? (
        <>
          <textarea
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
            rows="3"
            style={inputStyle}
          />
          <button onClick={() => onSave(id)} style={editButtonStyle}>
            💾 Save
          </button>
        </>
      ) : (
        <p style={{ marginBottom: '0.5rem' }}>{content}</p>
      )}

      <div style={{ marginBottom: '0.5rem' }}>
        <span style={smallText}>🕒 Created: {createdTime}</span>
        {modifiedTime && modifiedTime !== createdTime && (
          <>
            <br />
            <span style={smallText}>✏️ Edited: {modifiedTime}</span>
          </>
        )}
      </div>

      {!isEditing && (
        <div>
          <button onClick={() => onLike(id)} style={likeButtonStyle}>
            {isLiked ? '💙 Liked' : '🤍 Like'} ({likes})
          </button>
          <button onClick={() => onEdit(id, content)} style={editButtonStyle}>
            ✏️ Edit
          </button>
          <button onClick={() => onDelete(id)} style={deleteButtonStyle}>
            🗑️ Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default Postcard;
