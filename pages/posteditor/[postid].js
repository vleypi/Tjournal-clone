import Container from "../..//components/Container/Container"
import { useState } from "react"
import  dynamic from 'next/dynamic';
import { getPostEditorById } from "../../controllers/postController";

let EditorJS;

if (typeof window !== "undefined") {
    EditorJS = dynamic(() => import('../../components/PostEditor/Editor'));
}


const Editor = ({post}) =>{
    console.log(post)
    return(
        <>
            <Container title={'Blog - новости'}>
                {EditorJS && <EditorJS post={post}/>}
            </Container>
        </>
    )
}

export const getServerSideProps = async (ctx) =>{
    return await getPostEditorById(ctx)
}


export default Editor