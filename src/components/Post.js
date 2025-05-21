import React from 'react';

const Post = ({ post }) => {
  return (
    <div>
      <h3>{post.title}</h3>
      <p>Author: {post.author}</p>
      <p>Score: {post.score}</p>
      <a href={`https://reddit.com${post.permalink}`} target="_blank" rel="noopener noreferrer">
        View on Reddit
      </a>
    </div>
  );
};

export default Post;
