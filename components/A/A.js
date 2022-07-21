import Link from 'next/link'

export default ({text, href}) => {
    return(
        <Link href={href}>
            <a>{text}</a>
        </Link>
    )
}