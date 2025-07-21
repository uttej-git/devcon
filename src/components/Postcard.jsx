import React from 'react';

const Postcard = ({
  id,
  username,
  content,
  time,
  onDelete,
  onEdit,
  onSave,
  isEditing,
  editedContent,
  setEditedContent
}) => {
  return (
    <div style={{
      backgroundColor: 'white',
      padding: '1rem',
      marginBottom: '1rem',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h3 style={{ fontWeight: 'bold' }}>{username}</h3>

      {isEditing ? (
        <>
          <textarea
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
            rows="3"
            style={{ width: '100%', marginBottom: '0.5rem' }}
          />
          <button onClick={() => onSave(id)} style={{ marginRight: '0.5rem' }}>
            Save
          </button>
        </>
      ) : (
        <p>{content}</p>
      )}

      <small style={{ color: 'gray' }}>
        {time ? time : 'No time available'}
      </small>

      {!isEditing && (
        <div style={{ marginTop: '0.5rem' }}>
          <button onClick={() => onEdit(id, content)} style={{ marginRight: '0.5rem' }}>
            Edit
          </button>
          
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default Postcard;
