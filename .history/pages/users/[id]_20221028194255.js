import { useRouter } from 'next/router';
import styles from '../../styles/user.module.scss'

export default function User() {
    const {query} = useRouter()
    return(
        <div className={styles.user.module.scss}>
            <h1>Пользователь с id {query.id}</h1>            
        </div>
    )
}