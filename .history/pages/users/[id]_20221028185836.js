import { useRouter } from 'next/router';

export default function() {
    const {query} = useRouter()
    return(
        <div>
            Пользователь с id {que}
        </div>
    )
}