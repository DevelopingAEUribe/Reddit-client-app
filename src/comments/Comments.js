import React from 'react';
import { useSelector } from 'react-redux';

export default function Comments({ postId }) {
  const comments = useSelector((state) => state.comments.byPostId[postId]);

  if (!comments) return null;

  return (
    <div style={{ marginLeft: '20px' }}>
      <h4>Comments</h4>
      <ul>
        {comments.map((body, i) => <li key={i}>{body}</li>)}
      </ul>
    </div>
  );
}
