import React from 'react';
import IntlMessages from '@iso/components/utility/intlMessages';

export default () => {
  return (
    <div
      style={{ fontSize: '24px', color: '#788195', textTransform: 'uppercase' }}
    >
      <i
        className={'ion-fireball logoIcon'}
        style={{
          width: '20px',
          marginRight: '5px',
          background:
            '-webkit-linear-gradient(0deg, rgba(253,216,25,1) 0%, rgba(232,5,5,1) 100%)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        }}
      />
      <IntlMessages id="page.signInTitle" />
    </div>
  );
};
