export default [
  {
    key: 'mailbox',
    path: '/mailbox',
    label: 'sidebar.email',
    leftIcon: 'ion-android-mail',
  },
  {
    key: 'ecommerce',
    label: 'sidebar.ecommerce',
    leftIcon: 'ion-bag',
    children: [
      {
        key: 'shop',
        label: 'sidebar.shop',
      },
      {
        key: 'cart',
        label: 'sidebar.cart',
      },
      {
        key: 'checkout',
        label: 'sidebar.checkout',
      },
      {
        key: 'card',
        label: 'sidebar.cards',
      },
    ],
  },
  {
    key: 'invoice',
    label: 'sidebar.invoice',
    leftIcon: 'ion-clipboard',
  },
  {
    key: 'calendar',
    label: 'sidebar.calendar',
    leftIcon: 'ion-calendar',
  },
  {
    key: 'notes',
    label: 'sidebar.notes',
    leftIcon: 'ion-ios-paper',
  },
  {
    key: 'contacts',
    label: 'sidebar.contacts',
    leftIcon: 'ion-android-person-add',
  },
  {
    key: 'charts',
    label: 'sidebar.charts',
    leftIcon: 'ion-arrow-graph-up-right',
    children: [
      {
        key: 'googleChart',
        label: 'sidebar.googleCharts',
      },
      {
        key: 'reecharts',
        label: 'sidebar.recharts',
      },
      {
        key: 'reactChart2',
        label: 'sidebar.reactChart2',
      },
      {
        key: 'reactTrend',
        label: 'sidebar.reactTrend',
      },
    ],
  },
  {
    key: 'pages',
    label: 'sidebar.pages',
    leftIcon: 'ion-document-text',
    children: [
      {
        key: 'signin',
        label: 'sidebar.signIn',
        withoutDashboard: true,
      },
      {
        key: 'signup',
        label: 'sidebar.signUp',
        withoutDashboard: true,
      },
      {
        key: 'forgotpassword',
        label: 'sidebar.forgotPw',
        withoutDashboard: true,
      },
      {
        key: 'resetpassword',
        label: 'sidebar.resetPw',
        withoutDashboard: true,
      },
    ],
  },
];
