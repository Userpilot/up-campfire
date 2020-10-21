import React, { useEffect } from 'react';
import App from 'next/app';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import ThemeProvider from '../containers/ThemeProvider';
import initStore from '../redux/store';
import 'antd/dist/antd.css';
import '@glidejs/glide/dist/css/glide.core.min.css';
import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { AuthProvider } from '../containers/AuthWrapper';
import Drift from 'react-driftjs';

Router.events.on('routeChangeStart', () => NProgress.start());

Router.events.on('routeChangeComplete', (url) => {
  window.analytics.page(url);
  const isBrowser = typeof window !== 'undefined';
  if (isBrowser && url !== '/signin') {
    window.userpilot.reload();
  }
  NProgress.done();
});

Router.events.on('routeChangeError', () => NProgress.done());

const CustomApp = ({ Component, pageProps, store }) => {
  useEffect(() => {
    if (!window.userpilot) {
      const { Userpilot } = require('userpilot');
      Userpilot.initialize(process.env.NEXT_PUBLIC_TOKEN);
      console.log(window.drift);
    }
  }, []);
  return (
    <Provider store={store}>
      <AuthProvider>
        <ThemeProvider>
          <Component {...pageProps} />
          <Drift appId="5u3k2etrex58" />
        </ThemeProvider>
      </AuthProvider>
    </Provider>
  );
};

export default withRedux(initStore)(CustomApp);
