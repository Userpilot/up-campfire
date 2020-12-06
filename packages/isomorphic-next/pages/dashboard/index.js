import React from 'react';
import Head from 'next/head';
import loadable from '@loadable/component';
import { withAuthSync } from '../../authentication/auth.utils';
import DashboardLayout from '../../containers/DashboardLayout/DashboardLayout';

const Widgets = loadable(() => import('@iso/containers/Widgets/Widgets'));

export default withAuthSync(() => {
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
