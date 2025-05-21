import postsReducer, { votePost } from './postsSlice';

test('votePost increments score', () => {
  const initialState = {
    posts: [{ id: '1', score: 10 }],
  };
  const result = postsReducer(initialState, votePost({ id: '1', amount: 1 }));
  expect(result.posts[0].score).toBe(11);
});
