import {
  DEL_USER,
  ADD_USER,
  UPD_USER,
  SEARCH_USER,
  GET_USERS,
  GET_USER,
  IS_LOADING,
  IS_SUCCESS,
  IS_ERROR,
  RESET,
  IS_EDITING
} from './types';

// import userData from '../users.json';

const initialState = {
  inputValue: '',
  users: [],
  currentUser: null, // null (cause error) or {}, [upd] null is easy to handle error
  isEditing: false,
  isLoading: false,
  isSuccess: false,
  isError: false,
  msg: ''
};

// eslint-disable-next-line import/prefer-default-export
export const userReducer = (state = initialState, action = {}) => {
  const { type, payload } = action;

  switch (action.type) {
    case IS_LOADING:
      return { ...state, isLoading: true, msg: action.payload };
    case IS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        msg: action.payload
      };
    case IS_ERROR:
      return { ...state, isLoading: false, isError: true, msg: action.payload };

    case RESET:
      return {
        ...state,
        msg: '',
        isError: false,
        isLoading: false,
        isSuccess: false
      };
    case GET_USER:
      return {
        ...state,
        users: initialState.users,
        currentUser: action.payload
      };

    case GET_USERS:
      return {
        ...state,
        currentUser: initialState.currentUser,
        users: action.payload
      };
    case ADD_USER:
      return { ...state, users: [...state.users, action.payload] };
    case DEL_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload)
      };
    case IS_EDITING:
      return { ...state, isEditing: action.payload };
    case UPD_USER:
      return { ...state, users: action.payload, isEditing: false };
    case SEARCH_USER:
      return {
        ...state,
        inputValue: action.payload
      };
    default:
      return state;
  }
};
