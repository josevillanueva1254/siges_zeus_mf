import React from 'react';
import { Layout, Space, Avatar, Typography, Badge } from 'antd';
import { BellOutlined, UserOutlined } from '@ant-design/icons';
import { Logo } from './Logo';
import './header.css';

const { Header: AntdHeader } = Layout;
const { Text } = Typography;

// Props para personalizar el Header
interface HeaderProps {
  userName: string; // Nombre del usuario logueado
  onAlertClick?: () => void; // Acción al hacer clic en el icono de alerta
  onProfileClick?: () => void; // Acción al hacer clic en el perfil
}

export const Header: React.FC<HeaderProps> = ({
  userName,
  onAlertClick,
  onProfileClick,
}) => {
  return (
    <AntdHeader className="header">
      {/* Logotipo */}
      <Logo />

      {/* Contenedor derecho */}
      <Space size="large" className="header-right">
        {/* Icono de Alerta */}
        <Badge count={5} size="small" offset={[5, 0]} style={{ backgroundColor: '#52c41a' }}>
          <BellOutlined
            className="icon-alert"
            onClick={onAlertClick}
            style={{ fontSize: 20, cursor: 'pointer' }}
          />
        </Badge>

        {/* Nombre del usuario e icono de perfil */}
        <Space size="small" onClick={onProfileClick} className="profile-section" style={{ cursor: 'pointer' }}>
          <Text strong>{userName}</Text>
          <Avatar icon={<UserOutlined />} />
        </Space>
      </Space>
    </AntdHeader>
  );
};
