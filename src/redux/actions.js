import axios from 'axios';
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

export function isLoading() {
  return {
    type: IS_LOADING
  };
}

export function isSuccess(response) {
  return { type: IS_SUCCESS, payload: response };
}

export function isError(errorMsg) {
  return {
    type: IS_ERROR,
    payload: errorMsg
  };
}

export function getUser(user) {
  return {
    type: GET_USER,
    payload: user // object
  };
}

export function getUsers(users) {
  return {
    type: GET_USERS,
    payload: users // array
  };
}

export function fetchData(paramsId) {
  return dispatch => {
    dispatch(isLoading());
    return axios
      .get(`http://localhost:5000/robots/${paramsId}`)
      .then(res => dispatch(getUser(res.data)))
      .catch(err => {
        console.log('ERROR at fetchData::', err.message);
        dispatch(isError(err.message));
      });
  };
}

export function fetchDatas() {
  // dispatch an async action
  return dispatch => {
    // loading
    dispatch(isLoading());

    // fetch
    axios
      .get(`http://localhost:5000/robots`)
      .then(res => dispatch(getUsers(res.data)))
      .catch(err => {
        dispatch(isError(err.message));
      });
  };
}

// CRUD + search

export function addUser(user) {
  return {
    type: ADD_USER,
    payload: user
  };
}

export function deleteUser(id) {
  return {
    type: DEL_USER,
    payload: id
  };
}

export function updateUser(users) {
  return {
    type: UPD_USER,
    payload: users
  };
}

export function searchUser(query) {
  return {
    type: SEARCH_USER,
    payload: query
  };
}
