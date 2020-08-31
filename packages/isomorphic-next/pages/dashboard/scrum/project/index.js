import React from 'react';
import Head from 'next/head';
import { withAuthSync } from '../../../../authentication/auth.utils';
import DashboardLayout from '../../../../containers/DashboardLayout/DashboardLayout';

import CreateBoard from '../../../../containers/ScrumBoard/Board/BoardCreateOrUpdate/BoardCreateOrUpdate';

export default withAuthSync(() => (
  <>
    <Head>
      <title>Scrum Board</title>
    </Head>
    <DashboardLayout>
      <CreateBoard />
    </DashboardLayout>
  </>
));
