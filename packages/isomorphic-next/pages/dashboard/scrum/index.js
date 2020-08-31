import React from 'react';
import Head from 'next/head';
import { withAuthSync } from '../../../authentication/auth.utils';
import DashboardLayout from '../../../containers/DashboardLayout/DashboardLayout';
// import { Switch, Route, useRouteMatch } from 'react-router-dom'
// import { withRouter } from 'next/router'
// import Board from '../../containers/ScrumBoard/Board/Board'
// import ModalRoot from '../../containers/ScrumBoard/rootModal'
// import DrawerRoot from '../../containers/ScrumBoard/rootDrawer'

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
