import Link from 'next/link'

const Index = () => {
    return (
        <div>
            <div>
                <Link>
                <a href="/">Главная</a>
                </Link>
                <a href="/users">Пользователи</a>
            </div>
            <h1>Главная страницa</h1>
        </div>
    )
}

export default Index;