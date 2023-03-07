import { ADD_ITEM, DELETE_ITEM } from "../action";

function manageList(state = { items: [] }, action) {
  switch (action.type) {
    case ADD_ITEM:
      const oldItems = state.items || [];
      return {
        ...state,
        items: oldItems.concat(action.payload),
      };

    case DELETE_ITEM:

    const  newState = state.items.slice(0,state.items.length -1)
      return {
    ...state,
    items : newState
      };
    default:
      return state;
  }
}

export default manageList;
