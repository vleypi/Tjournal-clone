import nookies from 'nookies'
import { useDispatch } from 'react-redux'

export const useAuth = (gssp = GetServerSideProps) =>{

    return async (ctx = GetServerSidePropsContext) =>{

        const cookies = nookies.get(ctx)

        if(cookies.acc){
            const res = await axios.post('http://localhost:5001/api/auth/profile',{},{
                headers: {
                    auth: 'Bearer ' + cookies.acc
                }
            })
        }
        else{
            
        }

        return await gssp(ctx)
    }
}