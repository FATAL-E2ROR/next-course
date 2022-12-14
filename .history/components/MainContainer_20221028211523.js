import A from './A';
import Head from 'next/head';

const MainContainer = ({ children }) => {
  return (
    <>
      <Head>
        <meta keywords="ulbi tv, nextjs"></meta>\<title>Главная страница</title>
      </Head>
      <div className="navbar">
        <A href={`/`} text={`Главная`} />
        <A href={`/users`} text={`Пользователи`} />
      </div>
      <div>{children}</div>
    </>
  );
};

export default MainContainer;
