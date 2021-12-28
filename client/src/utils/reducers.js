import {
    LOGIN,
    LOGOUT,
    SIGN_UP
} from "./actions";

const initialState = {
    auth: false
}

export const reducers = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
        return {
            ...state,
            auth: true
        }
       
        case LOGOUT:
            return {
                ...state,
                auth: false
            }
        case SIGN_UP:
            return {
                ...state,
                auth: true
            }
        default:
            return state
    }
}
export default reducers;