import { useSelector,useDispatch } from "react-redux"
import { useRef } from "react"
import SignIn from "./SignIn"
import SignUp from "./Signup"
import styles from '../../styles/sign.module.css'
import { setVisible } from "../../redux/slices/signin"

const SignContainer = () => {

    const dispatch = useDispatch()
    const visible = useSelector(({signin})=>signin.visible)

    const ref = useRef()

    const clickHandler = (e) =>{
        if(e.target == ref.current){
            dispatch(setVisible({type: 'no'}))
        }
    }

    const sign = (type) =>{
        dispatch(setVisible({type}))
    }

    return (
        <>
            {visible !== 'no' &&
                <div className={styles.signin} ref={ref} onClick={clickHandler}>
                    {visible === 'signin' && <SignIn sign={sign}/>}
                    {visible === 'signup' && <SignUp sign={sign}/>}
                </div>
            }
        </>
    )
}

export default SignContainer