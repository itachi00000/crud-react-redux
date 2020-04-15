import ActionTypes from './types';
// import userData from '../users.json';

const { DEL_USER, ADD_USER, UPD_USER, SEARCH_USER, GET_USERS } = ActionTypes;

const inititalSearch = {
  inputValue: ''
};

const initialUser = {
  users: []
};

export function userReducer(state = initialUser, action = {}) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload
      };
    case ADD_USER:
      return { ...state, users: [...state.users, action.payload] };
    case DEL_USER:
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payload)
      };
    case UPD_USER:
      return { ...state, users: [...state.users, action.payload] };
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
