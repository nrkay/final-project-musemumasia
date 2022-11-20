import { GET_DATA, INPUT_USER } from "../action/login"
const initialstate = {
    user: [],
    err: null, 
}

const userReducer = (state = initialstate, action) => {
    switch (action.type) {
        case INPUT_USER:
            return{
                ...state,
                user: action.payload
            }
        default: return state
    }
}

export default userReducer;