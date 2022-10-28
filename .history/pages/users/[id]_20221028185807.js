import { useRouter } from 'next/router';

export default function() {
    const {query} = useRouter()
    console.log(router);

    return(
        <div>
            Пользователь
        </div>
    )
}