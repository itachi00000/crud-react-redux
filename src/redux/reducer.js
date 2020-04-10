import ActionTypes from './type';

const { DEL_ITEM, ADD_ITEM } = ActionTypes;

const initState = {
  items: []
};

export default function itemReducer(state = initState, action = {}) {
  switch (action.type) {
    case ADD_ITEM:
      return { ...state, items: [...state.items, action.payload] };
    case DEL_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };
    default:
      return state;
  }
}
