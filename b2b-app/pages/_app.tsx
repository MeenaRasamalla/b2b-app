import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.css'
import { FormspreeProvider } from '@formspree/react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
  	<FormspreeProvider project="{your-project-id}">
      <Component {...pageProps} />
    </FormspreeProvider>
  );
}
export default MyApp
