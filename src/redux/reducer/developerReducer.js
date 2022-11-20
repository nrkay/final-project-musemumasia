import { SUCCESS_GET_DEV } from "../action/developerAction";

const initialState = {
  dev: [],
  err: null
};

const developerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_GET_DEV:
      return {
        ...state,
        dev: action.payload
      }
    default:
      return state
  }
}

export default developerReducer