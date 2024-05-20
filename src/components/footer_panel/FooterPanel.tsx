import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import s from '@/styles/section.module.scss';
import { ReactComponent as Exit } from '@/common/svg/exit-to-app.svg';
import { ReactComponent as CurrentTrips } from '@/common/svg/currentTrips.svg';
import { ReactComponent as CompletedTrips } from '@/common/svg/completedTrips.svg';

const FooterPanel: FC = () => {
  return (
    <div className={s.section}>
      <div className={s.footer}>
        <NavLink to={'tasks/in-process'}>
          {({ isActive }) => (
            <CurrentTrips style={{ fill: isActive ? 'aqua' : '' }} className={s.logo} />
          )}
        </NavLink>
        <NavLink to="tasks/completed">
          {({ isActive }) => (
            <CompletedTrips style={{ fill: isActive ? 'aqua' : '' }} className={s.logo} />
          )}
        </NavLink>
        <NavLink to="logout">
          {({ isActive }) => (
            <Exit style={{ fill: isActive ? 'aqua' : '' }} className={s.logo} />
          )}
        </NavLink>
      </div>
    </div>
  );
};

export default FooterPanel;