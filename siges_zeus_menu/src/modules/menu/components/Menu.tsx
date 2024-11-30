import React from 'react';
import { Menu } from 'antd';
import type { MenuProps } from 'antd';
import { getMenuItems } from './MenuItems';

const MenuComponent: React.FC<MenuProps> = (props) => {
  const items = getMenuItems();

  return <Menu {...props} items={items} />;
};

export default MenuComponent;
