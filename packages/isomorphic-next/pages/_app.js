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
  const isBrowser = typeof window !== 'undefined';
  if (isBrowser && url !== '/signin') {
    window.userpilot.reload();
  }
  NProgress.done();
});

Router.events.on('routeChangeError', () => NProgress.done());

function insertScript(scriptText) {
  const script = document.createElement('script');
  script.innerText = scriptText;
  script.async = true;
  document.body.appendChild(script);
}

function addMainScript() {
  const scriptText = `!function() {
    var t = window.driftt = window.drift = window.driftt || [];
    if (!t.init) {
      if (t.invoked) return void (window.console && console.error && console.error("Drift snippet included twice."));
      t.invoked = !0, t.methods = [ "identify", "config", "track", "reset", "debug", "show", "ping", "page", "hide", "off", "on" ], 
      t.factory = function(e) {
        return function() {
          var n = Array.prototype.slice.call(arguments);
          return n.unshift(e), t.push(n), t;
        };
      }, t.methods.forEach(function(e) {
        t[e] = t.factory(e);
      }), t.load = function(t) {
        var e = 3e5, n = Math.ceil(new Date() / e) * e, o = document.createElement("script");
        o.type = "text/javascript", o.async = !0, o.crossorigin = "anonymous", o.src = "https://js.driftt.com/include/" + n + "/" + t + ".js";
        var i = document.getElementsByTagName("script")[0];
        i.parentNode.insertBefore(o, i);
      };
    }
  }();
  drift.SNIPPET_VERSION = '0.3.1';
  drift.load('5u3k2etrex58');`;

  insertScript(scriptText);
}
const CustomApp = ({ Component, pageProps, store }) => {
  useEffect(() => {
    if (!window.userpilot) {
      const { Userpilot } = require('userpilot');
      Userpilot.initialize(process.env.NEXT_PUBLIC_TOKEN);
      addMainScript();
      console.log(window.drift);
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
