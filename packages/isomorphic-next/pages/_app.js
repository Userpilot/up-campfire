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

Router.events.on('routeChangeStart', () => {
  const { Userpilot } = require('userpilot');
  Userpilot.initialize(process.env.NEXT_PUBLIC_TOKEN);
  NProgress.start();
});

Router.events.on('routeChangeComplete', (url) => {
  window.analytics.page(url);
  NProgress.done();
});
Router.events.on('routeChangeError', () => NProgress.done());

const CustomApp = ({ Component, pageProps, store }) => (
  <Provider store={store}>
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  </Provider>
);

export default withRedux(initStore)(CustomApp);
