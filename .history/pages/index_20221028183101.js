import Link from 'next/link'

const Index = () => {
    return (
        <div>
            <div className="navbar">
                <Link href="/" className="link">Главная</Link>
                <Link href="/users" className="link">Пользователи</Link>
            </div>
            <h1>Главная страницa</h1>
        <style jsx>
            {`
                .navbar {
                    background: orange;
                    padding: 15px;
                    
                }
            `}
        </style>
        </div>
    )
}                               

export default Index;