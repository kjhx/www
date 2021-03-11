import { AppProps } from 'next/app';
import '../styles/tailwind.css';
import '../styles/custom.css';

function App({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}

export default App;