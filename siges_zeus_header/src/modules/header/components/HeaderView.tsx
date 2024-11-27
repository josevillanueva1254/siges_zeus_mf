import React from 'react';
import { Layout, Space, Avatar, Typography, Badge, Dropdown, List, Tag } from 'antd';
import { BellOutlined, UserOutlined, WarningOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { Logo } from './Logo';
import './header.css';

const { Header: AntdHeader } = Layout;
const { Text, Link } = Typography;

// Props para personalizar el Header
interface HeaderProps {
  userName: string; // Nombre del usuario logueado
  onLogoClick?: () => void; // Acción al hacer clic en el logo
}

export const Header: React.FC<HeaderProps> = ({
  userName,
  onLogoClick,
}) => {
  // Datos de ejemplo para las alertas
  const alerts = [
    {
      id: 1,
      type: 'critical',
      title: 'Error crítico',
      description: 'El sistema experimentó un error a las 10:00 AM.',
      link: '/alerts/1',
    },
    {
      id: 2,
      type: 'info',
      title: 'Nueva actualización',
      description: 'Versión 2.0 disponible para instalación.',
      link: '/alerts/2',
    },
    {
      id: 3,
      type: 'warning',
      title: 'Mantenimiento',
      description: 'El sistema estará inactivo este domingo de 2 a 4 AM.',
      link: '/alerts/3',
    },
  ];

  // Función para asignar estilos según el tipo de alerta
  const getAlertTag = (type: string) => {
    switch (type) {
      case 'critical':
        return <Tag color="red" icon={<WarningOutlined />}>Crítica</Tag>;
      case 'info':
        return <Tag color="blue" icon={<InfoCircleOutlined />}>Información</Tag>;
      case 'warning':
        return <Tag color="orange" icon={<WarningOutlined />}>Advertencia</Tag>;
      default:
        return <Tag>General</Tag>;
    }
  };

  // Menú para las alertas
  const alertContent = (
    <div className="dropdown-content">
      <List
        itemLayout="horizontal"
        dataSource={alerts}
        renderItem={(alert) => (
          <List.Item>
            <List.Item.Meta
              title={
                <div>
                  {getAlertTag(alert.type)} <strong>{alert.title}</strong>
                </div>
              }
              description={
                <div>
                  {alert.description}
                  <br />
                  <Link href={alert.link} target="_blank">
                    Ver más detalles
                  </Link>
                </div>
              }
            />
          </List.Item>
        )}
      />
    </div>
  );

 // Menú para el perfil del usuario con el botón "Cerrar sesión"
const profileContent = (
  <div className="dropdown-content">
    <List>
      <List.Item>
        <Text strong>Nombre: </Text>
        <Text>{userName}</Text>
      </List.Item>
      <List.Item>
        <Text strong>Correo: </Text>
        <Text>john.doe@example.com</Text>
      </List.Item>
      <List.Item>
        <Text strong>Rol: </Text>
        <Text>Administrador</Text>
      </List.Item>
      {/* Botón de cerrar sesión */}
      <List.Item>
        <button
          onClick={() => console.log('Cerrando sesión...')}
          style={{
            backgroundColor: '#FF4D4F',
            color: '#fff',
            border: 'none',
            padding: '8px 12px',
            borderRadius: '4px',
            cursor: 'pointer',
            width: '100%',
          }}
        >
          Cerrar sesión
        </button>
      </List.Item>
    </List>
  </div>
);

  return (
    <AntdHeader className="header">
      {/* Logotipo */}
      <div onClick={onLogoClick} style={{ cursor: 'pointer' }}>
        <Logo />
      </div>

      {/* Contenedor derecho */}
      <Space size="large" className="header-right">
        {/* Icono de Alerta con Dropdown */}
        <Dropdown
          overlay={alertContent}
          placement="bottomRight"
          trigger={['click']}
        >
          <Badge count={alerts.length} size="small" offset={[5, 0]} style={{ backgroundColor: '#52c41a' }}>
            <BellOutlined
              className="icon-alert"
              style={{ fontSize: 20, cursor: 'pointer' }}
            />
          </Badge>
        </Dropdown>

        {/* Nombre del usuario e icono de perfil con Dropdown */}
        <Dropdown
          overlay={profileContent}
          placement="bottomRight"
          trigger={['click']}
        >
          <Space size="small" className="profile-section" style={{ cursor: 'pointer' }}>
            <Text strong>{userName}</Text>
            <Avatar icon={<UserOutlined />} />
          </Space>
        </Dropdown>
      </Space>
    </AntdHeader>
  );
};
