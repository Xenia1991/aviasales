import { combineReducers } from 'redux';

import sortReducer from './sort-reducer';
import filterReducer from './filter-reducer';
import { ticketReducer, searchIdReducer } from './tickets-reducer';
import { shownTicketReducer } from './shown-ticket-reducer';

const rootReducer = combineReducers({
  sort: sortReducer,
  filter: filterReducer,
  tickets: ticketReducer,
  searchId: searchIdReducer,
  shownTickets: shownTicketReducer,
});

export default rootReducer;
