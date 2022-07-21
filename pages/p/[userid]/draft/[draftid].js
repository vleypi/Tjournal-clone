import Container from "../../../../components/Container/Container"
import { saveDraft } from "../../../../controllers/draftController"

const DraftID = ({profile}) =>{
    
    return(
        <Container>
          <div>
                asdasd
          </div>
        </Container>
    )
}

export default DraftID

export const getServerSideProps = async (ctx) =>{
    return {
        props: {
            
        }
    }
}
