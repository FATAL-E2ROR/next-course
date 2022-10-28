import Link from 'next/link'

const Index = () => {
    return (
        <div>
            <div>
                <Link href="/">
                    <a>Главная</a>
                </Link>
                <Link href="/users">
                    <a>Пользователи</a>
                </Link>
            </div>
            <h1>Главная страницa</h1>
        </div>
    )
}                                       

export default Index;