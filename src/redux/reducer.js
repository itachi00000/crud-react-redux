import ActionTypes from './type';

const { DEL_USER, ADD_USER, SEARCH_USER } = ActionTypes;

const inititalSearch = {
  text: ''
};

const inititalItem = {
  users: []
};

export default function itemReducer(state = inititalItem, action = {}) {
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
        text: action.payload
      };
    default:
      return state;
  }
}
