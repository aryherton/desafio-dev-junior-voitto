import React from 'react';
import { AppProps } from 'next/app';

import { Provider } from 'react-redux';
import store from '../redux/store';
import GlobalStyle from '@/styles/globals';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
      <GlobalStyle />
    </>
  );
};

export default MyApp;
