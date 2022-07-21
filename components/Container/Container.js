import Head from 'next/head'
import Header from "../Header/Header"
import Navbar from '../Nav/Navbar'
import SignContainer from '../SignIn/SignContainer'
import axios from 'axios' 


const Container = ({children, title}) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>

            <Header />

            <Navbar />

            <SignContainer />

            <div className='contentMain'>
                {children}
            </div>

        </>
    )
}

export default Container 