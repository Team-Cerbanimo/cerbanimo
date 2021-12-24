import SurfaceApp from './surfaceApp';
import InnerApp from './innerApp';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, React} from 'react';
import api from './utils/api'
export default function App() {
    // const {checkAuth} = api;
    const state = useSelector(state => state);
    console.log(state)
    //for now this variable is to represent whether 
    //or not a user is actively logged in 
// useEffect(async ()=>{
//     const auth = checkAuth();
//     console.log(auth)
//     if(auth === true){
//         state.auth = true
//     }
// }, [])
    if (state === undefined) {
        return (
            <SurfaceApp />
        )
    } else if (state.auth === true) {
        if(window.location !== "/#/"){
            window.location.replace("/#/")
        }
        return (
            <InnerApp />
        )
    } else {
        if(window.location !== "/#/"){
            window.location.replace("/#/")
        }
        return (
            <SurfaceApp />
        )
    }

}