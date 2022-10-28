import Link from 'next/link'

const Index = () => {
    return (
        <div>
            <div>
                <Link href="/">Главная</Link>
                <Link href="/users">Пользователи</Link>
            </div>
            <h1>Главная страницa</h1>
        </div>
        <style jsx></style>
    )
}                               

export default Index;