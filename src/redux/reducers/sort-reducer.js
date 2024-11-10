import initialState from './initial-state';

const sortReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ALL_CHECKED':
      if (!state.sortAll) {
        return {
          ...state,
          sortAll: !state.sortAll,
          sortWithout: !state.sortAll,
          sortOne: !state.sortAll,
          sortTwo: !state.sortAll,
          sortThree: !state.sortAll,
        };
      }
      return {
        ...state,
        sortAll: false,
        sortWithout: false,
        sortOne: false,
        sortTwo: false,
        sortThree: false,
      };
    case 'WITHOUT_CHECKED':
      if (state.sortWithout) {
        return {
          ...state,
          sortAll: false,
          sortWithout: false,
        };
      }
      return {
        ...state,
        sortWithout: !state.sortWithout,
      };
    case 'ONE_CHECKED':
      if (!state.sortOne) {
        return {
          ...state,
          sortAll: false,
          sortOne: true,
        };
      }
      return {
        ...state,
        sortOne: !state.sortOne,
        sortAll: !state.sortOne,
      };
    case 'TWO_CHECKED':
      if (!state.sortTwo) {
        return {
          ...state,
          sortAll: false,
          sortTwo: true,
        };
      }
      return {
        ...state,
        sortTwo: !state.sortTwo,
        sortAll: !state.sortTwo,
      };
    case 'THREE_CHECKED':
      if (!state.sortThree) {
        return {
          ...state,
          sortAll: false,
          sortThree: true,
        };
      }
      return {
        ...state,
        sortThree: !state.sortThree,
        sortAll: !state.sortThree,
      };
    default:
      return state;
  }
};

export default sortReducer;
