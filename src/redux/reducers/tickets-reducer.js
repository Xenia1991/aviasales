import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import initialState from './initial-state';

export const fetchSearchId = createAsyncThunk('searchId/fetchSearchId', async (_, { rejectedWithValue }) => {
  try {
    const responseId = await fetch('https://aviasales-test-api.kata.academy/search');
    const id = await responseId.json();
    return id;
  } catch (error) {
    return rejectedWithValue(error.message);
  }
});

const searchIdSlice = createSlice({
  name: 'searchId',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchId.pending, (state, action) => {
        state.searchId = null;
        state.error = action.payload;
      })
      .addCase(fetchSearchId.fulfilled, (state, action) => {
        state.searchId = action.payload.searchId;
      })
      .addCase(fetchSearchId.rejected, (state, action) => {
        state.searchId = null;
        state.error = action.payload;
      });
  },
});

export const fetchTickets = createAsyncThunk('tickets/fetchTickets', async (id, { rejectedWithValue }) => {
  try {
    const responseTickets = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${id}`);
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

export const searchIdReducer = searchIdSlice.reducer;
export const ticketReducer = ticketSlice.reducer;
