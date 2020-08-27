import React, { useEffect } from 'react';
import App from 'next/app';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import ThemeProvider from '../containers/ThemeProvider';
import initStore from '../redux/store';
import 'antd/dist/antd.css';
import '@glidejs/glide/dist/css/glide.core.min.css';

const CustomApp = ({ Component, pageProps, store }) => {
  useEffect(() => {
    const { Userpilot } = require('userpilot');
    Userpilot.initialize(process.env.NEXT_PUBLIC_TOKEN);
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
};

export default withRedux(initStore)(CustomApp);
