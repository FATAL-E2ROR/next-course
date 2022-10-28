import Link from 'next/link';
import '../styles/link.css'

export default function({text, href}) {
    return (
        <Link href={href} legacyBehavior>
            <a>{text}</a>
        </Link>
    )
}