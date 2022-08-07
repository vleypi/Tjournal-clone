import axios from "axios"
import nookies from 'nookies'
import Container from "../../../components/Container/Container"
import Posts from "../../../components/Profile/Posts/Posts"
import Profile from "../../../components/Profile/Profile"
import { getProfile } from "../../../controllers/profileController"


const UserID = ({profile}) =>{
    return(
        <Container>
          <div className="contentProfile">
              <Profile profile={profile}/>
              <Posts profile={profile}/>
          </div>
        </Container>
    )
}

export default UserID

export const getServerSideProps = async (ctx) =>{
    return await getProfile(ctx)
}
