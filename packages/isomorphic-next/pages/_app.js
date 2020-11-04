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
  const installPendo = process.env.NEXT_PUBLIC_INSTALL_PENDO;
  useEffect(() => {
    if (!window.userpilot) {
      const { Userpilot } = require('userpilot');
      if (!process.env.NEXT_PUBLIC_SDK_PRODUCTION) {
        window.userpilotSettings.version = 'staging';
      }
      Userpilot.initialize(process.env.NEXT_PUBLIC_TOKEN);
    }
    if (installPendo && window !== undefined) {
      <script>
        (function()
        {(function (p, e, n, d, o) {
          var v, w, x, y, z;
          o = p[d] = p[d] || {};
          o._q = [];
          v = ['initialize', 'identify', 'updateOptions', 'pageLoad', 'track'];
          for (w = 0, x = v.length; w < x; ++w) {
            (function (m) {
              o[m] =
                o[m] ||
                function () {
                  o._q[m === v[0] ? 'unshift' : 'push'](
                    [m].concat([].slice.call(arguments, 0))
                  );
                };
            })(v[w]);
          }
          y = e.createElement(n);
          y.async = !0;
          y.src =
            'https://cdn.pendo.io/agent/static/a5657cd3-4677-4bcd-4a09-60e3951aa3f5/pendo.js';
          z = e.getElementsByTagName(n)[0];
          z.parentNode.insertBefore(y, z);
        })(window, document, 'script', 'pendo')}
        )();
      </script>;
      window.pendo.initialize({
        visitor: {
          id: 'demo@gmail.com',
        },
        account: {
          id: 'demo@gmail.com',
        },
      });
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
