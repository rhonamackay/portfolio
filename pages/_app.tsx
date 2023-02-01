import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import PageStructure from '../components/PageStructure';
import 'react-tooltip/dist/react-tooltip.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
  <>
    <Head>
      <title>Rhona&apos;s portfolio</title>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      <link rel="manifest" href="/site.webmanifest"></link>
    </Head>
    <PageStructure>
      <Component {...pageProps} />
    </PageStructure>
  </>
  );
}
