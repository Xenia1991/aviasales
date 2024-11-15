import { createSlice } from '@reduxjs/toolkit';

export const shownTicketSlice = createSlice({
  name: 'shown-tickets',
  initialState: { shownTickets: [], sliceNum: 0 },
  reducers: {
    sliceTickets(state, action) {
      state.sliceNum += 5;
      state.shownTickets = action.payload.slice(0, state.sliceNum);
    },
  },
});

export const shownTicketReducer = shownTicketSlice.reducer;
