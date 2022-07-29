import Container from "../../components/Container/Container"
import Draft from "../../components/Draft/Draft"
import { getDraftPageById } from "../../controllers/draftController"

const Index = ({draft,profile}) =>{

    return(
        <>
            <Container title={'Blog - новости'}>
                <div className="contentDraft">
                    <Draft draft={draft} profile={profile}/>
                </div>
            </Container>
        </>
    )
}

export const getServerSideProps = async (ctx) =>{
    return await getDraftPageById(ctx)
}

export default Index