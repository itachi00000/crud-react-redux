import ActionTypes from './type';

const { DEL_ITEM, ADD_ITEM } = ActionTypes;

export function deleteItem(id) {
  return {
    type: DEL_ITEM,
    payload: id
  };
}
export function addItem(item) {
  return {
    type: ADD_ITEM,
    payload: item
  };
}
