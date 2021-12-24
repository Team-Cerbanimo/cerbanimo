import {
    LOGIN,
    LOGOUT,
    SIGN_UP
} from "./actions";
import api from './api';
const {
    signUp,
    logIn,
    checkAuth } = api;
const initialState = {
    auth: true
}

export const reducers = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
        //    logIn(action.creds, state).then((res)=>{
        //        console.log(res)
        //        if(res !== undefined){
        //            return{
        //                ...state,
        //                auth: res
        //            }
        //        }
        //        else{
        //            return{
        //                ...state,
        //                auth: false
        //            }
        //        }
        //    })
           return{
            ...state,
            auth: true
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
    }
}
export default reducers;