import React from 'react'
import { getCommentsProfile } from '../../../controllers/profileController'
import CommentsContainer from "../../../components/Profile/Comments/Comment"
import Profile from "../../../components/Profile/Profile"
import Container from "../../../components/Container/Container"

const Comments = ({profile}) => {
    return (
        <Container>
            <div className="contentProfile">
              <Profile profile={profile}/>
              <CommentsContainer profile={profile}/>
            </div>
        </Container>
    )
}

export default Comments

export const getServerSideProps = async (ctx) =>{
  return await getCommentsProfile(ctx)
}
