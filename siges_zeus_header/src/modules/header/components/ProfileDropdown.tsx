import React from 'react';
import { List, Button , Dropdown, Avatar, Typography } from 'antd';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';
import styles from './ProfileDropdown.module.css';

const { Text } = Typography;

interface ProfileDropdownProps {
  userName: string;
}

export const ProfileDropdown: React.FC<ProfileDropdownProps> = ({ userName }) => {
  const menuItems = (
    <div className={styles['profile-dropdown']}>
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
        <List.Item>
          <Button 
            className={styles['logout-button']} 
            type="primary" // Opcional: Estilo del botón
            danger        // Opcional: Cambia el botón a un estilo rojo
            icon={<LogoutOutlined />} // Icono para el botón
            onClick={() => console.log('Cerrando sesión...')}
          >
            Cerrar sesión
          </Button>
        </List.Item>
      </List>
    </div>
  );

  return (
    <Dropdown overlay={menuItems} placement="bottomRight" trigger={['click']}>
      <div className={styles['profile-section']}>
        <Text  className={styles['profile-text']}  strong>{userName}</Text>
        <Avatar  className={styles['profile-text']} icon={<UserOutlined />} />
      </div>
    </Dropdown>
  );
};
