import {
  DEL_USER,
  ADD_USER,
  UPD_USER,
  SEARCH_USER,
  GET_USERS,
  GET_USER,
  IS_LOADING,
  IS_SUCCESS,
  IS_ERROR
} from './types';

// import userData from '../users.json';

const initialState = {
  inputValue: '',
  users: [],
  currentUser: {}, // null (cause error) or {}
  isError: false,
  isLoading: false,
  isSuccess: false,
  msg: ''
};

// eslint-disable-next-line import/prefer-default-export
export const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case IS_LOADING:
      return { ...state, isLoading: true, msg: 'Loader redux' };
    case IS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        msg: 'Fetch Success'
      };
    case IS_ERROR:
      return { ...state, isLoading: false, isError: true, msg: action.payload };
    case GET_USER:
      return {
        ...state,
        users: initialState.users,
        currentUser: action.payload,
        isLoading: false,
        isError: false
      };
    case GET_USERS:
      return {
        ...state,
        currentUser: initialState.currentUser,
        users: action.payload,
        isError: false,
        isLoading: false,
        msg: 'Fetch Success'
      };
    case ADD_USER:
      return { ...state, users: [...state.users, action.payload] };
    case DEL_USER:
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payload)
      };
    case UPD_USER:
      return { ...state, users: action.payload };
    case SEARCH_USER:
      return {
        ...state,
        inputValue: action.payload
      };
    default:
      return state;
  }
};
