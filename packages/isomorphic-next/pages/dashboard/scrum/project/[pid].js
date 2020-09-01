import React from 'react';
import Head from 'next/head';
import { withAuthSync } from '../../../../authentication/auth.utils';
import DashboardLayout from '../../../../containers/DashboardLayout/DashboardLayout';
import Board from '../../../../containers/ScrumBoard/Board/Board';
import ModalRoot from '../../../../containers/ScrumBoard/rootModal';
import DrawerRoot from '../../../../containers/ScrumBoard/rootDrawer';
import { useRouter } from 'next/router';

export default withAuthSync(() => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Hello Scrum Board</title>
      </Head>
      <DashboardLayout>
        <Board query={router.query} router={router} />
      </DashboardLayout>

      <ModalRoot />
      <DrawerRoot />
    </>
  );
});
