import A from '../components/A'
import '../styles/A.module.css'

const Index = () => {
    return (
        <div>
            <div className="navbar">
                <A href={`/`} text={`Главная`}/>
                <A href={`/users`} text={`Пользователи`}/>
            </div>
            <h1>Главная страницa</h1>
        </div>
    )
}                               

export default Index;