import { createSlice } from '@reduxjs/toolkit';

const locationSlice = createSlice({
  name: 'location',
  initialState: { location: 'Tucuman' },
  reducers: {
    setLocation(state, action) {
      state.location = action.payload;
    },
  },
});

// para el dispatch
export const { setLocation } = locationSlice.actions;
// para el configure
export default locationSlice.reducer;
