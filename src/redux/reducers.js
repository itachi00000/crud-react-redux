import ActionTypes from './types';

const { DEL_USER, ADD_USER, SEARCH_USER } = ActionTypes;

const inititalSearch = {
  inputValue: ''
};

const inititalUser = {
  users: []
};

export function userReducer(state = inititalUser, action = {}) {
  switch (action.type) {
    case ADD_USER:
      return { ...state, items: [...state.users, action.payload] };
    case DEL_USER:
      return {
        ...state,
        items: state.users.filter(user => user.id !== action.payload)
      };
    default:
      return state;
  }
}

export function searchReducer(state = inititalSearch, action = {}) {
  switch (action.type) {
    case SEARCH_USER:
      return {
        ...state,
        inputValue: action.payload
      };
    default:
      return state;
  }
}
