import { useState } from 'react'

const Users = () => {
    const [users, setUsers] = useState([
        {id: 1,name: 'petya',}
    ])

    return (
        <div>
        <h1>Список пользователей</h1>
        </div>
    );
};

export default Users;