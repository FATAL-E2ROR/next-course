import Link from 'next/link'

const Index = () => {
    return (
        <div className="navbar">
            <div>
                <Link href="/">Главная</Link>
                <Link href="/users">Пользователи</Link>
            </div>
            <h1>Главная страницa</h1>
        <style jsx>
            {`
                .navbar {
                    
                }
            `}
        </style>
        </div>
    )
}                               

export default Index;