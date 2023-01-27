import Head from "next/head";
import '../app/index/Index.scss';
import '../main.scss';

const App = ({ Component, pageProps }) => {
  return (
    <div>
      <Head>
        <title>
          Imilore
        </title>
        <meta
          name="description"
          content="Imilore - передективный анализ параметров S.M.A.R.T."
          key="desc"
        />
        <link rel="icon" type="image/x-icon" href="/imilore.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no"/>
        <meta name="theme-color" content="#fff"/>
        <link href='https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap' rel='stylesheet' />
        <script src={`https://api-maps.yandex.ru/2.1.79?apikey=${process.env.NEXT_PUBLIC_YANDEX_MAP_KEY}&lang=ru_RU`} type="text/javascript"></script>
      </Head>
      <Component { ...pageProps }/>
    </div>
  );
};

export default App;