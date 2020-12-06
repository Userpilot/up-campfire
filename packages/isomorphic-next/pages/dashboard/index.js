import React from 'react';
import Head from 'next/head';
import Router from 'next/router';
import loadable from '@loadable/component';
import { withAuthSync } from '../../authentication/auth.utils';
import DashboardLayout from '../../containers/DashboardLayout/DashboardLayout';
import { getCurrentUser } from '@iso/lib/firebase/firebase.authentication.util';

const Widgets = loadable(() => import('@iso/containers/Widgets/Widgets'));

export default withAuthSync(() => {
  getCurrentUser().then((user) => {
    if (window && window.userpilot && user) {
      console.log(user.uid, 'user.uiddashbaord');
      window.userpilot.identify(user.uid, {
        name: user.email,
        email: user.email,
        company: {
          id: 111111111,
        },
        plan: 'free',
      });
      window.userpilot.reload();
    } else {
      Router.push('/login');
    }
  });
  return (
    <>
      <Head>
        <title>Home page</title>
      </Head>
      <DashboardLayout>
        <Widgets />
      </DashboardLayout>
    </>
  );
});
