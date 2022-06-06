import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { CounterProvider } from '../context/Counter'
import { AuthProvider } from "../context/AuthContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <CounterProvider>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </CounterProvider>
    </>
  );
}

export default MyApp;