import React from 'react';
import Head from 'next/head';
import { withAuthSync } from '../../../authentication/auth.utils';
import DashboardLayout from '../../../containers/DashboardLayout/DashboardLayout';
import BoardLists from '../../../containers/ScrumBoard/Board/BoardList/BoardList';

export default withAuthSync(() => (
  <>
    <Head>
      <title>Scrum Board</title>
    </Head>
    <DashboardLayout>
      <BoardLists />
    </DashboardLayout>
  </>
));
