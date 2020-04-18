import ActionTypes from './types';

const { DEL_USER, ADD_USER, UPD_USER, SEARCH_USER, GET_USERS } = ActionTypes;

export function getUsers(arr) {
  return {
    type: GET_USERS,
    payload: arr
  };
}

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
