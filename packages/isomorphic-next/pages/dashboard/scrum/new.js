import React from 'react';
import Head from 'next/head';
import { withAuthSync } from '../../../authentication/auth.utils';
import DashboardLayout from '../../../containers/DashboardLayout/DashboardLayout';

import CreateBoard from '../../../containers/ScrumBoard/Board/BoardCreateOrUpdate/BoardCreateOrUpdate';
import { useRouter } from 'next/router';

export default withAuthSync(() => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Hello Scrum Board</title>
      </Head>
      <DashboardLayout>
        <CreateBoard query={router.query} router={router} />
      </DashboardLayout>
    </>
  );
});
