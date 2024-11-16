import { combineReducers } from 'redux';

import { ticketReducer, searchIdReducer } from './tickets-reducer';

const rootReducer = combineReducers({
  tickets: ticketReducer,
  searchId: searchIdReducer,
});

export default rootReducer;
