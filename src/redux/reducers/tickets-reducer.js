import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import initialState from './initial-state';

// const startRequest = () => {
//   return {
//     type: 'START_REQUEST_TICKETS',
//   };
// };

// const succesResponse = () => {
//   return {
//     type: 'GET_SUCCESS_RESPONSE',
//   };
// };

// const getError = () => {
//   return {
//     type: 'GET_ERROR',
//   };
// };

export const fetchTickets = createAsyncThunk('tickets/fetchTickets', async (_, { rejectedWithValue }) => {
  try {
    const responseId = await fetch('https://aviasales-test-api.kata.academy/search');
    const id = await responseId.json();
    const responseTickets = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${id.searchId}`);
    if (!responseTickets.ok) {
      return rejectedWithValue('Failed to fetch tickets');
    }
    const data = await responseTickets.json();
    return data;
  } catch (error) {
    return rejectedWithValue(error.message);
  }
});

const ticketSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTickets.pending, (state, action) => {
        state.isLoading = true;
        state.error = action.payload;
      })
      .addCase(fetchTickets.fulfilled, (state, action) => {
        state.isLoading = false;
        state.tickets = action.payload;
      })
      .addCase(fetchTickets.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const ticketReducer = ticketSlice.reducer;
