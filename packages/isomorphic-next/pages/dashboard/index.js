import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { withAuthSync } from '../../authentication/auth.utils';
import DashboardLayout from '../../containers/DashboardLayout/DashboardLayout';
import Widgets from '@iso/containers/Widgets/Widgets';
import { getCurrentUser } from '@iso/lib/firebase/firebase.authentication.util';
export default withAuthSync(() => {
  const router = useRouter();

  if (router.query && router.query.referal === 'login') {
    getCurrentUser().then((user) => {
      window.userpilot.identify(user.uid, {
        name: user.email,
        email: user.email,
        company: {
          id: 111111111,
        },
        plan: 'free',
      });
    });
  }

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
