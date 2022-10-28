const MainContainer = ({ children }) => {
  return (
    <>
      <div className="navbar">
        <A href={`/`} text={`Главная`} />
        <A href={`/users`} text={`Пользователи`} />
      </div>
    </>
  );
};

export default MainContainer;
