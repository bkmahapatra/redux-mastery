import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
  {
    id: 1,
    title: "Morning Dew",
    content: "The sun rises over the rolling hills.",
    date: sub(new Date(), { minutes: 60 }).toISOString(),
  },
  {
    id: 2,
    title: "Cosmic Dreams",
    content: "Exploring the mysteries of the galaxy.",
    date: sub(new Date(), { minutes: 50 }).toISOString(),
  },
  {
    id: 3,
    title: "River Flow",
    content: "Soothing sounds of the river's gentle stream.",
    date: sub(new Date(), { minutes: 40 }).toISOString(),
  },
  {
    id: 4,
    title: "Wildflower Bloom",
    content: "Vibrant colors in the springtime meadow.",
    date: sub(new Date(), { minutes: 30 }).toISOString(),
  },
  {
    id: 5,
    title: "Starlight Serenade",
    content: "A night under the twinkling celestial sky.",
    date: sub(new Date(), { minutes: 20 }).toISOString(),
  },
];

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            date: new Date().toISOString(),
          },
        };
      },
    },
  },
});

export const selectAllPosts = (state) => state.posts;

export const { addPost } = postSlice.actions;
export default postSlice.reducer;
