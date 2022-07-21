import Container from "../../components/Container/Container"
import {getDraft} from '../../controllers/draftController'



const Editor = ({posts}) =>{

    return(
        <>
            <Container title={'Blog - новости'}>
                
            </Container>
        </>
    )
}

export const getServerSideProps = async (ctx) =>{
    return await getDraft(ctx)
}

export default Editor