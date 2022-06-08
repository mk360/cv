import '../styles/App.scss';
import CVView from '../view/cv';
import { appWithTranslation } from 'next-i18next';
import Head from 'next/head';

function App() {
    return (
        <>
            <Head>
                <title>CV</title>
            </Head>
            <CVView />
        </>
    );
};

export default appWithTranslation(({ pageProps }) => <App {...pageProps} />);
