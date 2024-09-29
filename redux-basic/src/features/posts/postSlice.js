import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "Morning Dew",
    content: "The sun rises over the rolling hills.",
  },
  {
    id: 2,
    title: "Cosmic Dreams",
    content: "Exploring the mysteries of the galaxy.",
  },
  {
    id: 3,
    title: "River Flow",
    content: "Soothing sounds of the river's gentle stream.",
  },
  {
    id: 4,
    title: "Wildflower Bloom",
    content: "Vibrant colors in the springtime meadow.",
  },
  {
    id: 5,
    title: "Starlight Serenade",
    content: "A night under the twinkling celestial sky.",
  },
];

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const selectAllPosts = (state) => state.posts;

export const { addPost } = postSlice.actions;
export default postSlice.reducer;
