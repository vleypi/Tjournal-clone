import React from 'react'
import { getDetailsProfile } from '../../../controllers/profileController'
import Container from "../../../components/Container/Container"
import Profile from "../../../components/Profile/Profile"

const Details = ({profile}) => {
    return (
        <Container>
            <div className="contentProfile">
              <Profile profile={profile}/>
            </div>
        </Container>
    )
}

export default Details

export const getServerSideProps = async (ctx) =>{
  return await getDetailsProfile(ctx)
}
