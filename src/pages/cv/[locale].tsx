import CVView from '../../view/cv';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { appWithTranslation } from 'next-i18next';
import LanguageKey from '../../types/language-key';
import { useRouter } from 'next/router';

function App() {
  const router = useRouter();
  if (router.isFallback) return null;
  return (
    <CVView />
  );
}

export async function getStaticProps(args: { params: { locale: LanguageKey } }) {
  return {
      props: await serverSideTranslations(args.params.locale || 'fr', ['common']),
  };
};

export async function getStaticPaths() {
  return {
    paths: [{ params: { locale: 'fr' } }, { params: { locale: 'en' }}],
    fallback: true,
  };
};

export default appWithTranslation(({ pageProps }) => <App {...pageProps} />);
