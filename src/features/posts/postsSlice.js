import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { fetchComments } from '../../comments/commentsSlice.js';

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (subreddit) => {
    const response = await axios.get(`https://www.reddit.com/r/${subreddit}.json`);
    return response.data.data.children.map((post) => post.data);
  }
);

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    status: 'idle',
  },
  reducers: {
    votePost: (state, action) => {
      const post = state.posts.find((p) => p.id === action.payload.id);
      if (post) {
        post.score += action.payload.amount;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.status = 'succeeded';
      });
  },
});

export const { votePost } = postsSlice.actions;
export default postsSlice.reducer;
