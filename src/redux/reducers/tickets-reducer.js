import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

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
  initialState: { searchId: null },
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

const fetchTickets = async (id, rejectedWithValue) => {
  try {
    const responseTickets = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${id}`);
    if (!responseTickets.ok) {
      throw new Error('нет запроса');
    }
    const data = await responseTickets.json();
    return data;
  } catch (error) {
    if (error.message === 'нет запроса' || error.status === 500) {
      return fetchTickets(id);
    }
    return rejectedWithValue(error);
  }
};

export const fetchTicketsThunk = createAsyncThunk('tickets/fetchTickets', async (id, { rejectWithValue }) => {
  return fetchTickets(id, rejectWithValue);
});

export const ticketSlice = createSlice({
  name: 'tickets',
  initialState: {
    tickets: [],
    shownTickets: [],
    sortedTickets: [],
    filteredTickets: [],
    stop: false,
    isLoading: false,
    error: '',
    sliceNum: 0,
    sortCheapest: true,
    sortFastest: false,
    filterAll: true,
    filterWithout: true,
    filterOne: true,
    filterTwo: true,
    filterThree: true,
  },
  reducers: {
    sliceTickets(state, action) {
      if (Number.isFinite(action.payload)) {
        state.shownTickets = state.sortedTickets.slice(0, action.payload);
      } else {
        state.sliceNum += 5;
        state.shownTickets = state.sortedTickets.slice(0, state.sliceNum);
      }
    },
    sortCheapest(state, action) {
      state.sortCheapest = true;
      state.sortFastest = false;
    },
    sortFastest(state, action) {
      state.sortFastest = true;
      state.sortCheapest = false;
    },
    filterAll(state, action) {
      if (!state.filterAll) {
        state.filterAll = true;
        state.filterWithout = true;
        state.filterOne = true;
        state.filterTwo = true;
        state.filterThree = true;
      } else {
        state.filterAll = false;
        state.filterWithout = false;
        state.filterOne = false;
        state.filterTwo = false;
        state.filterThree = false;
      }
    },
    filterWithout(state, action) {
      if (!state.filterWithout) {
        state.filterWithout = true;
      } else {
        state.filterWithout = false;
        state.filterAll = false;
      }
      if (state.filterWithout && state.filterOne && state.filterTwo && state.filterThree) {
        state.filterAll = true;
      }
    },
    filterOne(state, action) {
      if (!state.filterOne) {
        state.filterOne = true;
      } else {
        state.filterOne = false;
        state.filterAll = false;
      }
      if (state.filterWithout && state.filterOne && state.filterTwo && state.filterThree) {
        state.filterAll = true;
      }
    },
    filterTwo(state, action) {
      if (!state.filterTwo) {
        state.filterTwo = true;
      } else {
        state.filterTwo = false;
        state.filterAll = false;
      }
      if (state.filterWithout && state.filterOne && state.filterTwo && state.filterThree) {
        state.filterAll = true;
      }
    },
    filterThree(state, action) {
      if (!state.filterThree) {
        state.filterThree = true;
      } else {
        state.filterThree = false;
        state.filterAll = false;
      }
      if (state.filterWithout && state.filterOne && state.filterTwo && state.filterThree) {
        state.filterAll = true;
      }
    },
    sortTickets(state, action) {
      if (state.sortFastest) {
        const fatestTickets = state.filteredTickets.sort((a, b) => {
          const sumADuration = a.segments.reduce((ac, item) => {
            const sum = ac + item.duration;
            return sum;
          }, 0);
          const sunmBDuration = b.segments.reduce((ac, item) => {
            const sum = ac + item.duration;
            return sum;
          }, 0);
          return sumADuration - sunmBDuration;
        });
        state.sortedTickets = [...fatestTickets];
      }
      if (state.sortCheapest) {
        const cheapestTickets = state.filteredTickets.sort((a, b) => {
          return a.price - b.price;
        });
        state.sortedTickets = [...cheapestTickets];
      }
    },
    filterTickets(state, action) {
      let resultTicketsArray = [];
      if (!state.filterAll && !state.filterWithout && !state.filterOne && !state.filterTwo && !state.filterThree) {
        state.filteredTickets = [];
      } else {
        if (state.filterAll) {
          state.filteredTickets = state.tickets;
        }
        if (state.filterWithout) {
          const filterWitoutStop = state.tickets.filter((ticket) => {
            const { segments } = ticket;
            const stopsCount = segments.reduce((ac, item) => {
              const sum = ac + item.stops.length;
              return sum;
            }, 0);
            return stopsCount === 0;
          });
          resultTicketsArray = [...resultTicketsArray, ...filterWitoutStop];
          state.filteredTickets = resultTicketsArray;
        }
        if (state.filterOne) {
          const filterWithOneStop = state.tickets.filter((ticket) => {
            const { segments } = ticket;
            const result = segments.every((item) => {
              return item.stops.length === 1;
            });
            return result;
          });
          resultTicketsArray = [...resultTicketsArray, ...filterWithOneStop];
          state.filteredTickets = resultTicketsArray;
        }
        if (state.filterTwo) {
          const filterWithTwoStops = state.tickets.filter((ticket) => {
            const { segments } = ticket;
            const result = segments.every((item) => {
              return item.stops.length === 2;
            });
            return result;
          });
          resultTicketsArray = [...resultTicketsArray, ...filterWithTwoStops];
          state.filteredTickets = resultTicketsArray;
        }
        if (state.filterThree) {
          const filterWithThreeStops = state.tickets.filter((ticket) => {
            const { segments } = ticket;
            const result = segments.every((item) => {
              return item.stops.length === 3;
            });
            return result;
          });
          resultTicketsArray = [...resultTicketsArray, ...filterWithThreeStops];
          state.filteredTickets = resultTicketsArray;
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTicketsThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchTicketsThunk.fulfilled, (state, action) => {
        if (Array.isArray(action.payload.tickets)) {
          state.tickets = [...state.tickets, ...action.payload.tickets];
          state.sortedTickets = [...state.tickets, ...action.payload.tickets];
        } else {
          state.error = 'ошибка запроса';
        }
        state.stop = action.payload.stop;
        if (state.stop) {
          state.isLoading = false;
        }
      })
      .addCase(fetchTicketsThunk.rejected, (state) => {
        state.error = 'ошибка запроса';
      });
  },
});

export const searchIdReducer = searchIdSlice.reducer;
export const ticketReducer = ticketSlice.reducer;
