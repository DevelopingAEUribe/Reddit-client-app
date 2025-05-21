import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts, votePost } from './postsSlice.js';
import { fetchComments } from '../../comments/commentsSlice.js';
import Comments from '../../comments/Comments.js';

export default function Posts() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const subreddit = useSelector((state) => state.subreddits.currentSubreddit);
  const [visibleComments, setVisibleComments] = useState({}); // tracks which post comments are shown

  useEffect(() => {
    dispatch(fetchPosts(subreddit));
  }, [subreddit]);

  const toggleComments = (postId, permalink) => {
    if (!visibleComments[postId]) {
      dispatch(fetchComments({ postId, permalink }));
    }
    setVisibleComments((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));
  };

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id} style={{ borderBottom: '1px solid #ccc', marginBottom: '16px' }}>
          <h3>{post.title}</h3>
          <p>Score: {post.score}</p>
          <button onClick={() => dispatch(votePost({ id: post.id, amount: 1 }))}>Upvote</button>
          <button onClick={() => dispatch(votePost({ id: post.id, amount: -1 }))}>Downvote</button>
          <button onClick={() => toggleComments(post.id, post.permalink)}>
            {visibleComments[post.id] ? 'Hide Comments' : 'View Comments'}
          </button>

          {/* Render Comments if they are toggled on */}
          {visibleComments[post.id] && <Comments postId={post.id} />}
        </div>
      ))}
    </div>
  );
}
