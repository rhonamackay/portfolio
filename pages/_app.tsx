import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import PageStructure from '../components/PageStructure';
import 'react-tooltip/dist/react-tooltip.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
  <>
    <PageStructure>
      <Component {...pageProps} />
    </PageStructure>
  </>
  );
}
