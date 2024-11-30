import React, { useState } from 'react';
import { Layout } from 'antd';
import MenuComponent from './Menu';

const { Sider } = Layout;

const SiderMenu: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
      <div className="demo-logo-vertical" />
      <MenuComponent theme="dark" defaultSelectedKeys={['1']} mode="inline" />
    </Sider>
  );
};

export default SiderMenu;
