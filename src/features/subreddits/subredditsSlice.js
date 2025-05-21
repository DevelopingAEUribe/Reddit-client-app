import { createSlice } from '@reduxjs/toolkit';

const subredditsSlice = createSlice({
  name: 'subreddits',
  initialState: {
    currentSubreddit: 'popular',
  },
  reducers: {
    setSubreddit(state, action) {
      state.currentSubreddit = action.payload;
    },
  },
});

export const { setSubreddit } = subredditsSlice.actions;
export default subredditsSlice.reducer;
