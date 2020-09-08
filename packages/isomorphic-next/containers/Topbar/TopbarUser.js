import React from 'react';
import { useDispatch } from 'react-redux';
import Popover from '@iso/components/uielements/popover';
import authAction from '../../authentication/actions';
import TopbarDropdownWrapper from './TopbarDropdown.styles';
import userpic from '@iso/assets/images/user1.png';
import IntlMessages from '@iso/components/utility/intlMessages';
import Link from 'next/link';
const { logout } = authAction;

export default function TopbarUser() {
  const [visible, setVisibility] = React.useState(false);
  const dispatch = useDispatch();
  function handleVisibleChange() {
    setVisibility((visible) => !visible);
  }

  const content = (
    <TopbarDropdownWrapper className="isoUserDropdown">
      <Link className="isoDropdownLink" href="/dashboard/profile">
        <a className="isoDropdownLink">
          <IntlMessages id="topbar.myprofile" />
        </a>
      </Link>
      <a
        className="isoDropdownLink"
        onClick={() => {
          window.userpilot.clean();
          dispatch(logout());
        }}
      >
        Logout
      </a>
    </TopbarDropdownWrapper>
  );

  return (
    <Popover
      content={content}
      trigger="click"
      visible={visible}
      onVisibleChange={handleVisibleChange}
      arrowPointAtCenter
      placement="bottomLeft"
    >
      <div className="isoImgWrapper">
        <img alt="user" src={userpic} />
        <span className="userActivity online" />
      </div>
    </Popover>
  );
}
