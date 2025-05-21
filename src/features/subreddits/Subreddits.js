import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSubreddit } from './subredditsSlice.js';

export default function Subreddits() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(setSubreddit(input));
  };

  return (
    <div>
      <input
        placeholder="Search subreddit"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}
