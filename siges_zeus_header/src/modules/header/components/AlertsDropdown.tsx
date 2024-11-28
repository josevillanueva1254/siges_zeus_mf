import React, { useEffect } from 'react';
import { Badge, Dropdown, List, Tag, Button, notification } from 'antd';
import { BellOutlined, WarningOutlined, InfoCircleOutlined } from '@ant-design/icons';
import styles from './AlertsDropdown.module.css';

const alerts = [
  { id: 1, type: 'critical', title: 'Error crítico', description: 'El sistema experimentó un error.', link: '/alerts/1' },
  { id: 2, type: 'info', title: 'Nueva actualización', description: 'Versión 2.0 disponible.', link: '/alerts/2' },
  { id: 3, type: 'warning', title: 'Mantenimiento', description: 'El sistema estará inactivo este domingo.', link: '/alerts/3' },
];

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

export const AlertsDropdown: React.FC = () => {
  // Efecto para simular la recepción de notificaciones push
  useEffect(() => {
    const simulatePushNotification = () => {
      const newNotification = {
        type: 'info',
        title: 'Nueva Alerta',
        description: 'Tienes una nueva alerta en tu bandeja.',
      };

      // Mostrar la notificación flotante
      notification.open({
        message: newNotification.title,
        description: newNotification.description,
        icon: <InfoCircleOutlined style={{ color: '#1890ff' }} />,
        placement: 'topRight',
      });
    };

    // Simular una notificación push cada 10 segundos
    const interval = setInterval(simulatePushNotification, 100000);

    return () => clearInterval(interval); // Limpiar el intervalo al desmontar el componente
  }, []);

  const menuItems = (
    <div className={styles['alerts-dropdown']}>
      {/* Lista de Alertas */}
      <List
        itemLayout="horizontal"
        dataSource={alerts}
        renderItem={(alert) => (
          <List.Item className={styles['item']}>
            <List.Item.Meta
              title={
                <div>
                  {getAlertTag(alert.type)} <strong>{alert.title}</strong>
                </div>
              }
              description={
                <>
                  {alert.description}
                  <br />
                  <a href={alert.link} target="_blank" rel="noopener noreferrer">Ver más detalles</a>
                </>
              }
            />
          </List.Item>
        )}
      />
      {/* Footer con Botón */}
      <div className={styles['dropdown-footer']}>
        <Button type="link" onClick={() => console.log('Navegando a más alertas...')}>
          Ver más
        </Button>
      </div>
    </div>
  );

  return (
    <Dropdown overlay={menuItems} placement="bottomRight" trigger={['click']}>
      <Badge count={alerts.length} size="small" offset={[5, 0]} style={{ backgroundColor: '#52c41a' }}>
        <BellOutlined className={styles['icon-alert']} />
      </Badge>
    </Dropdown>
  );
};
