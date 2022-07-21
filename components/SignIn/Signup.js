import styles from '../../styles/sign.module.css'
import axios from 'axios'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setProfile} from '../../redux/slices/profile'
import { setVisible } from '../../redux/slices/signin'

const SignUp = ({sign}) => {

    const dispatch = useDispatch()
    const [input,setInput] = useState({email: '', text: '',password: ''})

    const signup = () =>{
        axios.post('http://localhost:5001/api/user/registration',{
            name: input.text,
            email: input.email,
            password: input.password,
        }, {withCredentials: true})
        .then((res)=>{
            dispatch(setProfile({name: res.data.name,email: res.data.email}))
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
            <h2>Регистрация</h2>
            <div className={styles.inputs}>
                <input placeholder='Логин' type="name" onChange={setInputHandler} value={input.text}/>
                <input placeholder='Почта' type="email" onChange={setInputHandler} value={input.email}/>
                <input placeholder='Пароль' type="password" onChange={setInputHandler} value={input.password}/>
                <button onClick={signup}>Регистрация</button>
            </div>
            <div className={styles.otherOptions}>
                <button onClick={()=>sign('signin')}>Уже есть аккаунт?</button>
            </div>
        </div>
    )
}

export default SignUp