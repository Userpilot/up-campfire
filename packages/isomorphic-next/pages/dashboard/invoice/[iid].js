import Head from 'next/head';
import Invoice from '../../../containers/Invoice/Invoice';
import SingleInvoice from '../../../containers/Invoice/SingleInvoice';
import { withRouter } from 'next/router';
import { withAuthSync } from '../../../authentication/auth.utils';
import DashboardLayout from '../../../containers/DashboardLayout/DashboardLayout';

const getInvoiceId = (props) => {
  try {
    const { router } = props;
    console.log(router.query, 'router.query');
    return {
      invoiceId: router.query.iid,
      redirectPath: router.pathname,
    };
  } catch (e) {}
};
export default withRouter(
  withAuthSync((props) => {
    const { invoiceId, redirectPath } = getInvoiceId(props);

    return (
      <>
        <Head>
          <title>Invoice</title>
        </Head>
        <DashboardLayout>
          {invoiceId ? (
            <SingleInvoice invoiceId={invoiceId} redirectPath={redirectPath} />
          ) : (
            <Invoice />
          )}
        </DashboardLayout>
      </>
    );
  })
);
