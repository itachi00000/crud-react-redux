import ActionTypes from './types';

const { DEL_USER, ADD_USER, SEARCH_USER } = ActionTypes;

export function deleteUser(id) {
  return {
    type: DEL_USER,
    payload: id
  };
}

export function addUser(user) {
  return {
    type: ADD_USER,
    payload: user
  };
}

export function searchUser(query) {
  return {
    type: SEARCH_USER,
    payload: query
  };
}
