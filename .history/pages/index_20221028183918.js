import Link from 'next/link'

const Index = () => {
    return (
        <div>
            <div className="navbar">
                <Link href="/" le>
                    <a className="link">Главная</a>
                </Link>
                <Link href="/users">
                    <a className="link">Пользователи</a>
                </Link>
            </div>
            <h1>Главная страницa</h1>
        <style jsx>
            {`
                .navbar {
                    background: orange;
                    padding: 15px;                    
                }

                .link {
                    text-decoration: none;
                    color: white;
                    font-size: 20px;
                }
            `}
        </style>
        </div>
    )
}                               

export default Index;