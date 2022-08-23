import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { CounterProvider } from '../context/Counter'
import { AuthProvider } from "../context/AuthContext";
import { appWithTranslation } from 'next-i18next';
import { StrictMode } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StrictMode>
      <CounterProvider>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </CounterProvider>
    </StrictMode>
  );
}

export default appWithTranslation(MyApp)