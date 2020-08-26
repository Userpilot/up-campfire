import { Tabs } from 'antd';
import AntTab from './styles/tab.style';
import WithDirection from '@iso/lib/helpers/rtl';
const WDTabs = AntTab(Tabs);
const TabPane = Tabs.TabPane;
const isoTabs = WithDirection(WDTabs);

export default isoTabs;
export { TabPane };
