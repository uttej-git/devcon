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
    backgroundColor: darkMode ? '#2b2b2b' : '#ffffff',
    color: darkMode ? '#f0f0f0' : '#000000',
    padding: '1rem',
    marginBottom: '1rem',
    borderRadius: '8px',
    boxShadow: darkMode
      ? '0 2px 6px rgba(255,255,255,0.05)'
      : '0 2px 4px rgba(0,0,0,0.1)',
  };

  const textAreaStyle = {
    width: '100%',
    marginBottom: '0.5rem',
    backgroundColor: darkMode ? '#1e1e1e' : '#f9f9f9',
    color: darkMode ? '#f0f0f0' : '#000',
    border: '1px solid #ccc',
    borderRadius: '4px',
    padding: '0.5rem',
  };

  const smallTextStyle = {
    color: darkMode ? '#cccccc' : 'gray',
    display: 'block',
    fontSize: '0.85rem',
  };

  const buttonStyle = {
    marginRight: '0.5rem',
    padding: '0.3rem 0.6rem',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    backgroundColor: darkMode ? '#444' : '#ddd',
    color: darkMode ? '#f0f0f0' : '#000',
  };

  const deleteButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#f44336',
    color: '#fff',
  };

  const likeButtonStyle = {
    ...buttonStyle,
    backgroundColor: isLiked ? '#0d6efd' : buttonStyle.backgroundColor,
    color: isLiked ? '#fff' : buttonStyle.color,
  };

  return (
    <div style={cardStyle}>
      <h3 style={{ fontWeight: 'bold' }}>{username}</h3>

      {isEditing ? (
        <>
          <textarea
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
            rows="3"
            style={textAreaStyle}
          />
          <button onClick={() => onSave(id)} style={buttonStyle}>
            Save
          </button>
        </>
      ) : (
        <p>{content}</p>
      )}

      <small style={smallTextStyle}>Created: {createdTime || 'N/A'}</small>
      {modifiedTime && modifiedTime !== createdTime && (
        <small style={smallTextStyle}>Edited: {modifiedTime}</small>
      )}

      {!isEditing && (
        <div style={{ marginTop: '0.5rem' }}>
          <button onClick={() => onLike(id)} style={likeButtonStyle}>
            {isLiked ? '❤️ Liked' : '🤍 Like'} ({likes})
          </button>
          <button onClick={() => onEdit(id, content)} style={buttonStyle}>
            Edit
          </button>
          <button onClick={() => onDelete(id)} style={deleteButtonStyle}>
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default Postcard;
