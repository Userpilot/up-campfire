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

Router.events.on('routeChangeStart', () => NProgress.start());

Router.events.on('routeChangeComplete', (url) => {
  window.analytics.page(url);
  const isServer = typeof window === 'undefined';
  if (!isServer && url !== '/signin') {
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
    }
  }, []);

  return (
    <Provider store={store}>
      <AuthProvider>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </AuthProvider>
    </Provider>
  );
};

export default withRedux(initStore)(CustomApp);
