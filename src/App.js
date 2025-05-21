import React from 'react';
import Subreddits from './features/subreddits/Subreddits.js';
import Posts from './features/posts/Posts.js';
import DarkModeToggle from './components/DarkModeToggle.js';


export default function App() {
  return (
    <div className="app">
      <header>
        <h1>Reddit Client App</h1>
        <DarkModeToggle />
      </header>
      <main>
        <Subreddits />
        <Posts />
      </main>
    </div>
  );
}
