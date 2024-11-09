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
      if (!state.filterOne) {
        return {
          ...state,
          filterAll: false,
          filterOne: true,
        };
      }
      return {
        ...state,
        filterOne: !state.filterOne,
        filterAll: !state.filterOne,
      };
    case 'TWO_CHECKED':
      if (!state.filterTwo) {
        return {
          ...state,
          filterAll: false,
          filterTwo: true,
        };
      }
      return {
        ...state,
        filterTwo: !state.filterTwo,
        filterAll: !state.filterTwo,
      };
    case 'THREE_CHECKED':
      if (!state.filterThree) {
        return {
          ...state,
          filterAll: false,
          filterThree: true,
        };
      }
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
