import React from 'react';
import Signin from './signin';
import Router from 'next/router';

switch (Router.pathname) {
  case '/signin':
    return <Signin />;
  default:
    return <Dashboard />;
}
