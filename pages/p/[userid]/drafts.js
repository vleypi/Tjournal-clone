import React from 'react'
import { getDraftsProfile } from '../../../controllers/profileController'
import Container from "../../../components/Container/Container"
import Profile from "../../../components/Profile/Profile"
import DraftsContainer from '../../../components/Profile/Drafts/Drafts'


const Drafts = ({profile}) => {
    return (
        <Container>
            <div className="contentProfile">
              <Profile profile={profile}/>
              <DraftsContainer profile={profile}/>
            </div>
        </Container>
    )
}

export default Drafts

export const getServerSideProps = async (ctx) =>{
  return await getDraftsProfile(ctx)
}
