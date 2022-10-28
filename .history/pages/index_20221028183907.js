import Link from 'next/link'

const Index = () => {
    return (
        <div>
            <div className="navbar">
                <Link href="/">
                    <a className="link">Главная</a>
                </Link>
                <Link href="/users" className="link">
                    <a>Пользователи</a>
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