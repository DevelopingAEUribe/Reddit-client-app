import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchComments = createAsyncThunk(
  'comments/fetchComments',
  async ({ postId, permalink }) => {
    const response = await axios.get(`https://www.reddit.com${permalink}.json`);
    const comments = response.data[1].data.children.map((child) => child.data.body);
    return { postId, comments };
  }
);

const commentsSlice = createSlice({
  name: 'comments',
  initialState: {
    byPostId: {},
  },
  extraReducers: (builder) => {
    builder.addCase(fetchComments.fulfilled, (state, action) => {
      const { postId, comments } = action.payload;
      state.byPostId[postId] = comments;
    });
  },
});

export default commentsSlice.reducer;
