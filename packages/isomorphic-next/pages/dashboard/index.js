import React, { useEffect } from 'react';
import Head from 'next/head';
import Router from 'next/router';
import loadable from '@loadable/component';
import { withAuthSync } from '../../authentication/auth.utils';
import DashboardLayout from '../../containers/DashboardLayout/DashboardLayout';
import { getCurrentUser } from '@iso/lib/firebase/firebase.authentication.util';

const Widgets = loadable(() => import('@iso/containers/Widgets/Widgets'));
export default withAuthSync(() => {
  useEffect(() => {
    getCurrentUser().then((user) => {
      // - look at this please!
      if (user && user.uid) {
        console.log('@@ USER', user);
        if (window && window.userpilot) {
          window?.userpilot?.reload();
        }
      } else {
        Router.push('/signin');
      }
    });
  }, []);

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
