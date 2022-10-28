import A from './A';

const MainContainer = ({ children }) => {
  return (
    <>
      <div className="navbar">
        <A href={`/`} text={`Главная`} />
        <A href={`/users`} text={`Пользователи`} />
      </div>
      <div>
        
      </div>
    </>
  );
};

export default MainContainer;
