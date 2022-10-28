import Link from 'next/link';
import styles from '../styles/link.css'

export default function({text, href}) {
    return (
        <Link href={href} legacyBehavior>
            <a>{text}</a>
        </Link>
    )
}