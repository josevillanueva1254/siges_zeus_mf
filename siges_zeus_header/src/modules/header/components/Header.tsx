import React from 'react';
import { Layout, Space } from 'antd';
import { HeaderLogo } from './HeaderLogo';
import { AlertsDropdown } from './AlertsDropdown';
import { ProfileDropdown } from './ProfileDropdown';
import './header.css';

const { Header: AntdHeader } = Layout;

interface HeaderProps {
  userName: string;
  onLogoClick?: () => void;
  onLogout: () => void;
}

export const Header: React.FC<HeaderProps> = ({ userName, onLogoClick, onLogout }) => (
  <AntdHeader className="header">
    {/* Logotipo */}
    <HeaderLogo onClick={onLogoClick} />

    {/* Contenedor derecho */}
    <Space size="large" className="header-right">
      {/* Dropdown de alertas */}
      <AlertsDropdown />

      {/* Dropdown del perfil */}
      <ProfileDropdown userName={userName} onLogout={onLogout} />
    </Space>
  </AntdHeader>
);
