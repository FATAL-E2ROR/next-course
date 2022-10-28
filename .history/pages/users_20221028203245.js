import { useEffect, useState } from 'react';
import Link from 'next/link'

const Users = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'petya' },
    { id: 2, name: 'vasya' },
  ]);

  useEffect(async () => {
    
  }, [])

  return (
    <div>
      <h1>Список пользователей</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`} legacyBehavior>
              <a>{user.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;

export async function getStaticProps(context) {
    return {
      props: {}, // will be passed to the page component as props
    }
  }