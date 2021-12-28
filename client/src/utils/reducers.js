import {
    LOGIN,
    LOGOUT,
    SIGN_UP
} from "./actions";
import api from './api';
const {
    signUp,
} = api;
const initialState = {
    auth: true
}

export const reducers = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            console.log(action.res)
       if(action.res.status ===200){
        return {
            ...state,
            auth: true
        }
       }else{
           return {
               ...state,
               auth: false
           }
       }
        case LOGOUT:
            //db call conditional
            return {
                ...state,
                auth: false
            }
        case SIGN_UP:
            signUp(action.creds)
            return {
                ...state,
                auth: true
            }
        default:
            return state
    }
}
export default reducers;