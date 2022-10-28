import { useRouter } from 'next/router';
import styles from '../../styles/'

export default function() {
    const {query} = useRouter()
    return(
        <div>
            <h1>Пользователь с id {query.id}</h1>            
        </div>
    )
}