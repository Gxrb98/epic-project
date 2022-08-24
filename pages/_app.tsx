import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthProvider } from "../context/AuthContext";
import { appWithTranslation } from 'next-i18next';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default appWithTranslation(MyApp)