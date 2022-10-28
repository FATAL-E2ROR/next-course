import A from '../components/A';
import Head from 'next/head';

const Index = () => {
  return (
    <>
      <Head>
            
      </Head>
      <div>
        <div className="navbar">
          <A href={`/`} text={`Главная`} />
          <A href={`/users`} text={`Пользователи`} />
        </div>
        <h1>Главная страницa</h1>
      </div>
    </>
  );
};

export default Index;
