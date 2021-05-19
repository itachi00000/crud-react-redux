import axios from 'axios';

import { getServerUrl } from '../server-url';
import {
  DEL_USER,
  ADD_USER,
  UPD_USER,
  SEARCH_USER,
  GET_USERS,
  GET_USER,
  RESET,
  IS_EDITING,
  IS_LOADING,
  IS_SUCCESS,
  IS_ERROR
} from './types';

const SERVER_URL = getServerUrl();

// const URL = 'http://localhost:5000/api/robots';

export function loading(loadingMsg = 'Loading...') {
  return {
    type: IS_LOADING,
    payload: loadingMsg
  };
}

export function resetAlerts() {
  return {
    type: RESET
  };
}

export function errorFetch(errorMsg = 'default Error Msg') {
  return {
    type: IS_ERROR,
    payload: errorMsg
  };
}

export function successFetch(successMsg = 'default Success Msg') {
  return {
    type: IS_SUCCESS,
    payload: successMsg
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

export const fetchUser = (id) => (dispatch) => {
  dispatch(loading());
  // fetch
  axios
    .get(`${SERVER_URL}/${id}`)
    .then((res) => dispatch(getUser(res.data)))
    .catch((error) => {
      console.error(error.message);
      dispatch(errorFetch(error.message));
    })
    .finally(() =>
      // reset alertMsg
      setTimeout(() => {
        dispatch(resetAlerts());
      }, 1500)
    );
};

export const fetchAllUsers = () => (dispatch) => {
  // async loading
  dispatch(loading());

  // fetch
  axios
    .get(SERVER_URL)
    .then((res) => {
      dispatch(getUsers(res.data));
      dispatch(successFetch('Success Fetch'));
    })
    .catch((err) => {
      console.error('ERROR at fetchAllUsers::', err.message);
      dispatch(errorFetch(err.message));
    })
    .finally(() =>
      // reset alertMsg
      setTimeout(() => {
        dispatch(resetAlerts());
      }, 1500)
    );
};

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

export function updateUser(user) {
  return {
    type: UPD_USER,
    payload: user
  };
}

export function editing(bool = true) {
  return {
    type: IS_EDITING,
    payload: bool
  };
}

export function searchUser(query) {
  return {
    type: SEARCH_USER,
    payload: query
  };
}
