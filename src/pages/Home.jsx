import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../features/posts/postsSlice';

export default function Home() {
  const dispatch = useDispatch();
  const { posts, status, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (status === 'loading') return <p>Loading posts...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Reddit Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <a href={`https://reddit.com${post.permalink}`} target="_blank" rel="noreferrer">
              {post.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
