const initialState = {
  tickets: [],
  filterAll: false,
  filterWithout: false,
  filterOne: false,
  filterTwo: false,
  filterThree: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ALL_CHECKED':
      if (!state.filterAll) {
        return {
          ...state,
          filterAll: !state.filterAll,
          filterWithout: !state.filterAll,
          filterOne: !state.filterAll,
          filterTwo: !state.filterAll,
          filterThree: !state.filterAll,
        };
      }
      return {
        ...state,
        filterAll: false,
        filterWithout: false,
        filterOne: false,
        filterTwo: false,
        filterThree: false,
      };
    case 'WITHOUT_CHECKED':
      if (state.filterWithout) {
        console.log('here');
        return {
          ...state,
          filterAll: false,
          filterWithout: false,
        };
      }
      return {
        ...state,
        filterWithout: !state.filterWithout,
      };
    case 'ONE_CHECKED':
      if (state.filterOne) {
        console.log('here');
        return {
          ...state,
          filterAll: false,
          filterOne: false,
        };
      }
      return {
        ...state,
        filterOne: !state.filterOne,
        filterAll: !state.filterOne,
      };
    case 'TWO_CHECKED':
      return {
        ...state,
        filterTwo: !state.filterTwo,
        filterAll: !state.filterTwo,
      };
    case 'THREE_CHECKED':
      return {
        ...state,
        filterThree: !state.filterThree,
        filterAll: !state.filterThree,
      };
    default:
      return state;
  }
};

export default reducer;
