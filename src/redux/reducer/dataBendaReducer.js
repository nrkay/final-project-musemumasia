import { SUCCESS_ADD_BENDA, SUCCESS_GET_BENDA } from "../action/dataBendaAction";

const initialState = {
  benda: [],
  err: null
};

const dataBendaReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_GET_BENDA :
      return {
        ...state,
        benda: action.payload
      }
     case SUCCESS_ADD_BENDA:
      return {
        benda: [...state.benda, action.payload],
      };
    default:
      return state
  }
}

export default dataBendaReducer