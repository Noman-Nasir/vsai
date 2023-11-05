import type { AppProps } from 'next/app';

import { Navbar } from '@/components/common/navbar';
import { AuthContextProvider } from '@/context/AuthContext';

import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <Navbar />
      <Component {...pageProps} />
    </AuthContextProvider>
  );
}
