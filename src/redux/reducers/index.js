import { combineReducers } from 'redux';

import sortReducer from './sort-reducer';
import filterReducer from './filter-reducer';

const rootReducer = combineReducers({
  sort: sortReducer,
  filter: filterReducer,
});

export default rootReducer;
