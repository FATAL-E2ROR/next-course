import { useRouter } from 'next/router';

export default function() {
    const router = useRouter()
    console.log(router);

    return(
        <div>
            Пользователь
        </div>
    )
}