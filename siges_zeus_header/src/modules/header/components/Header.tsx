import React from 'react';
import { Layout, Divider, Space } from 'antd';
import { HeaderLogo } from './HeaderLogo';
import { AlertsDropdown } from './AlertsDropdown';
import { ProfileDropdown } from './ProfileDropdown';
import styles from './header.module.css';

const { Header: AntdHeader } = Layout;

interface HeaderProps {
  userName: string;
  onLogoClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ userName, onLogoClick }) => (
  <AntdHeader className={styles.header}>
    <HeaderLogo onClick={onLogoClick} />
    <Space size="large" className={styles['header-right']}>
      <AlertsDropdown />
      <Divider type="vertical" />
      <ProfileDropdown userName={userName} />
    </Space>
  </AntdHeader>
);
