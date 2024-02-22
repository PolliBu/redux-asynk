import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'tasks',
  initialState: {
    items: [],
  },
});

export default slice.reducer;
