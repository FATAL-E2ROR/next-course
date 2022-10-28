import { useRouter } from 'next/router';
import styles from '../../styles/user.module.scss';

export default function User({ user }) {
  const { query } = useRouter();
  return (
    <div className={styles.user}>
      <h1>Пользователь с id {query.id}</h1>
    </div>
  );
}

export async function getServerSideProps(context) {
    console.log(context);
    return {
      props: {}, // will be passed to the page component as props
    }
  }
