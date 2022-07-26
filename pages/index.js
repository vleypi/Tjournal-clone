import Container from "../components/Container/Container"
import Post from "../components/Post/Post"
import { useState } from "react"


const Index = ({posts}) =>{

    const [post,setPost] = useState(posts)

    return(
        <>
            <Container title={'Blog - новости'}>
                <div className="contentPosts">
                    {post.map(post=>
                        <Post key={post.author + post.reviews} news={post} />
                    )}
                </div>
            </Container>
        </>
    )
}

export const getStaticProps = () =>{
    const posts = [
        {
            author: 'Автор',
            user: '/p/wqeqwe',
            published: '15 часов назад',
            subcribed: false,
            header: '12312312',
            blocks: [],
            comments: 69,
            reviews: 15
        }
    ]

    return {
        props: {
            posts
        }
    }
}

export default Index