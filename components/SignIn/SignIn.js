import styles from '../../styles/sign.module.css'
import axios from 'axios'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setProfile } from '../../redux/slices/profile'
import { setVisible } from '../../redux/slices/signin'

const SignIn = ({sign}) => {

    const dispatch = useDispatch()
    const [input,setInput] = useState({email: '', password: ''})

    const signin = () =>{
        axios.post('http://localhost:5001/api/user/login',{
            email: input.email,
            password: input.password,
        }, {withCredentials: true})
        .then((res)=>{
            dispatch(setProfile({name: res.data.name,email: res.data.email,userid: res.data.userid}))
            dispatch(setVisible({type: 'no'}))
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const setInputHandler = (e) =>{
        setInput({...input, [e.target.type]: e.target.value})
    }

    return (
        <div className={styles.wrapper}>
            <h2>Вход в аккаунт</h2>
            <div className={styles.inputs}>
                <input placeholder='Почта' type="email" onChange={setInputHandler} value={input.email}/>
                <input placeholder='Пароль' type='password' onChange={setInputHandler} value={input.password}/>
                <button onClick={signin}>Войти</button>
            </div>
             <div className={styles.otherOptions}>
                <button>Забыли пароль?</button>
                <button onClick={()=>sign('signup')}>Регистрация</button>
            </div>
        </div>
    )
}

export default SignIn