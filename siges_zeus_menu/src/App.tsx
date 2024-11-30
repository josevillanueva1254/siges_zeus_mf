import React from 'react';
import { Layout } from 'antd';
import SiderMenu from './modules/menu/components/SiderMenu';

const App: React.FC = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SiderMenu />
    </Layout>
  );
};

export default App;
