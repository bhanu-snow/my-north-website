import '../styles/globals.css';
import { NextIntlProvider } from 'next-intl';

export default function App({ Component, pageProps }) {
  const { messages, locale = 'en' } = pageProps;
  console.log('Locale in _app.js:', locale);

  return (
    <NextIntlProvider locale={locale} messages={messages}>
      <Component {...pageProps} />
    </NextIntlProvider>
  );
}
