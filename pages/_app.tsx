import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import PageStructure from '../components/PageStructure';

export default function App({ Component, pageProps }: AppProps) {
  return (
  <>
    <PageStructure>
      <Component {...pageProps} />
    </PageStructure>
  </>
  );
}
