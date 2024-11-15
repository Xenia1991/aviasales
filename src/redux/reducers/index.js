import { combineReducers } from 'redux';

import sortReducer from './sort-reducer';
import filterReducer from './filter-reducer';
import { ticketReducer, searchIdReducer } from './tickets-reducer';

const rootReducer = combineReducers({
  sort: sortReducer,
  filter: filterReducer,
  tickets: ticketReducer,
  searchId: searchIdReducer,
});

export default rootReducer;
