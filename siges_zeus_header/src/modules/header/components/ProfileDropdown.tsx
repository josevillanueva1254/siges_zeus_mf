import React from 'react';
import { List, Avatar, Dropdown, Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Text } = Typography; // Extrae el componente Text de Typography

interface ProfileDropdownProps {
  userName: string;
  onLogout: () => void;
}

export const ProfileDropdown: React.FC<ProfileDropdownProps> = ({ userName, onLogout }) => {
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
        <List.Item>
          <button
            onClick={onLogout}
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
    <Dropdown overlay={profileContent} placement="bottomRight" trigger={['click']}>
      <div style={{ cursor: 'pointer' }}>
        <Text strong>{userName}</Text>
        <Avatar icon={<UserOutlined />} />
      </div>
    </Dropdown>
  );
};
