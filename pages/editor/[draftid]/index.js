import Container from "../../../components/Container/Container"
import Post from "../../../components/Post/Post"
import { useState } from "react"
import  dynamic from 'next/dynamic';
import {getDraftById} from '../../../controllers/draftController'

let EditorJS;

if (typeof window !== "undefined") {
    EditorJS = dynamic(() => import('../../../components/Editor/Editor'));
}


const Editor = ({draft}) =>{

    return(
        <>
            <Container title={'Blog - новости'}>
                {EditorJS && <EditorJS draft={draft}/>}
            </Container>
        </>
    )
}

export const getServerSideProps = async (ctx) =>{
    return await getDraftById(ctx)
}


export default Editor