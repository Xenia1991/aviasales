import initialState from './initial-state';

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHOOSE_CHEAPEST':
      return {
        ...state,
        filterCheapest: true,
        filterFastest: false,
      };
    case 'CHOOSE_FASTEST':
      return {
        ...state,
        filterFastest: true,
        filterCheapest: false,
      };
    default:
      return state;
  }
};

export default filterReducer;
