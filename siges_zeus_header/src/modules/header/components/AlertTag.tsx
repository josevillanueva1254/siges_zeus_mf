import React from 'react';
import { Tag } from 'antd';
import { WarningOutlined, InfoCircleOutlined } from '@ant-design/icons';

interface AlertTagProps {
  type: string;
}

export const AlertTag: React.FC<AlertTagProps> = ({ type }) => {
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
