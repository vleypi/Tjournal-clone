import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { auth } from "../controllers/authController";

export const AuthProvider  = (props) => {

    const dispatch = useDispatch()
    const name = useSelector(({profile})=>profile.name)

    useEffect(()=>{
        if(!name){
            auth(dispatch)
        }
    })

    return (
        <>
            {props.children}
        </>
    );
};

export default AuthProvider;