import React, { FC } from 'react';
import Header from './header/Header';

import FooterPanel from './footer_panel/FooterPanel';
import { Outlet } from 'react-router-dom';

const Layout: FC = () => {
  return (
    <div className="layout">
      <Header />
      <div style={{ height: '80%', overflow: 'auto' }}>
        <Outlet />
      </div>
      <FooterPanel />
    </div>
  );
};

export {Layout}