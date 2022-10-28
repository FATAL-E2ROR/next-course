import { useState } from 'react'
import { Link } from 'next/link'

const Users = () => {
    const [users, setUsers] = useState([
        {id: 1, name: 'petya'},
        {id: 2, name: 'vasya'},
    ])

    return (
        <div>
            <h1>Список пользователей</h1>
            <ul>
                {users.map(user => 
                    <Link href="">

                    </Link>
                    <li>
                        {user.name}
                    </li>  
                )}
            </ul>
        </div>
    );
};

export default Users;