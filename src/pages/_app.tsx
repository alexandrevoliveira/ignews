import { AppProps } from 'next/app'

import styles from '../styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps}  className={styles}/>
};

export default MyApp