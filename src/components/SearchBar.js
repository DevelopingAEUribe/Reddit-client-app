import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPostsBySubreddit } from './features/posts/postsSlice';

const SubredditSearch = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) return;
    dispatch(fetchPostsBySubreddit(input));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter subreddit"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SubredditSearch;
