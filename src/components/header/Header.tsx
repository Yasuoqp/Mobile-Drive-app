import React from 'react';
import s from '@/styles/section.module.scss';
import { ReactComponent as Arrow } from '@/common/svg/arrow.svg';

const Header = () => {
  return (
    <div className={s.section}>
      <div className={s.header}>
        {/*<Arrow className={s.icon}/>*/}

        <h3>СПИСОК ЗАДАНИЙ</h3>
      </div>
    </div>
  );
};

export default Header;