import React from 'react';
import Signin from './signin';
import Dashboard from './dashboard';
import { useRouter } from 'next/router';

export default () => {
  const router = useRouter();
  switch (router.asPath) {
    case '/signin':
    case '/login':
      return <Signin />;
    default:
      router.push(router.asPath);
      return <Dashboard />;
  }
};
