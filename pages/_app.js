import '../styles/global.css'
import { wrapper } from '../redux/store'
import { AuthProvider } from '../context/AuthLayout'

const App = ({Component,pageProps,name}) => {
    return (
        <AuthProvider {...pageProps}>
            <Component {...pageProps} />
        </AuthProvider>
    )
}





export default wrapper.withRedux(App)





