import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import appActions from '@iso/redux/app/actions';
import TopbarNotification from './TopbarNotification';
import TopbarUser from './TopbarUser';
import TopbarWrapper from './Topbar.styles';

const { Header } = Layout;
const { toggleCollapsed } = appActions;

class Topbar extends Component {
  render() {
    const { toggleCollapsed, url, customizedTheme, locale } = this.props;
    const collapsed = this.props.collapsed && !this.props.openDrawer;
    const styling = {
      background: customizedTheme.backgroundColor,
      position: 'fixed',
      width: '100%',
      height: 70,
    };
    return (
      <TopbarWrapper>
        <Header
          style={styling}
          className={
            collapsed ? 'isomorphicTopbar collapsed' : 'isomorphicTopbar'
          }
        >
          <div className="isoLeft">
            <button
              className={
                collapsed ? 'triggerBtn menuCollapsed' : 'triggerBtn menuOpen'
              }
              style={{ color: customizedTheme.textColor }}
              onClick={toggleCollapsed}
            />
          </div>

          <ul className="isoRight">
            <li
              onClick={() => this.setState({ selectedItem: 'notification' })}
              className="isoNotify"
            >
              <TopbarNotification locale={locale} />
            </li>

            <li
              onClick={() => this.setState({ selectedItem: 'user' })}
              className="isoUser"
            >
              <TopbarUser locale={locale} />
            </li>
          </ul>
        </Header>
      </TopbarWrapper>
    );
  }
}

export default connect(
  (state) => ({
    ...state.App,
    locale: state.LanguageSwitcher.language.locale,
    customizedTheme: state.ThemeSwitcher.topbarTheme,
  }),
  { toggleCollapsed }
)(Topbar);
