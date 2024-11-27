import React from 'react';
import { Badge, Dropdown } from 'antd';
import { BellOutlined } from '@ant-design/icons';
import { MenuProps } from 'antd';
import { AlertTag } from './AlertTag';

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

// Definimos el menú como `MenuProps['items']`
const menuItems: MenuProps['items'] = alerts.map((alert) => ({
  key: alert.id.toString(),
  label: (
    <div>
      <AlertTag type={alert.type} /> <strong>{alert.title}</strong>
      <div>
        {alert.description}
        <br />
        <a href={alert.link} target="_blank" rel="noopener noreferrer">
          Ver más detalles
        </a>
      </div>
    </div>
  ),
}));

export const AlertsDropdown: React.FC = () => {
  return (
    <Dropdown
      menu={{ items: menuItems }} // Aquí usamos `menu` en lugar de `overlay`
      placement="bottomRight"
      trigger={['click']}
    >
      <Badge count={alerts.length} size="small" offset={[5, 0]} style={{ backgroundColor: '#52c41a' }}>
        <BellOutlined style={{   color: '#ffffff', fontSize: 20, cursor: 'pointer' }} />
      </Badge>
    </Dropdown>
  );
};
