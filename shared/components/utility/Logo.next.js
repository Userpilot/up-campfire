import React from 'react';
import Link from 'next/link';
import siteConfig from '@iso/config/site.config';

const Fireball = () => (
  <i
    className={siteConfig.siteIcon}
    style={{
      width: '20px',
      marginRight: '5px',
      background:
        '-webkit-linear-gradient(0deg, rgba(253,216,25,1) 0%, rgba(232,5,5,1) 100%)',
      '-webkit-background-clip': 'text',
      '-webkit-text-fill-color': 'transparent',
    }}
  />
);
export default function ({ collapsed }) {
  return (
    <div className="isoLogoWrapper">
      {collapsed ? (
        <div>
          <h3>
            <Fireball />
          </h3>
        </div>
      ) : (
        <h3>
          <Link href="/dashboard">
            <a href="/dashboard" style={{ display: 'flex' }}>
              <Fireball />
              {siteConfig.siteName}
            </a>
          </Link>
        </h3>
      )}
    </div>
  );
}
