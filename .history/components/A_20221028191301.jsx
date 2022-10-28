import Link from 'next/link';
import 

export default function({text, href}) {
    return (
        <Link href={href} legacyBehavior>
            <a>{text}</a>
        </Link>
    )
}