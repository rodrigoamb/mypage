import React from 'react';
import { ContainerMenu } from './MenuStyles';
import { NavLink } from 'react-router-dom';

import { IoMdClose } from 'react-icons/io';

const Menu = () => {
  return (
    <ContainerMenu>
      <ul className='content-ul'>
        <li>
          <NavLink className='btn-nav' to={'/'} end>
            Sobre mim
          </NavLink>
        </li>
        <li>
          <NavLink className='btn-nav' to={'/portfolio'}>
            Portfólio
          </NavLink>
        </li>
        <li>
          <NavLink className='btn-nav' to={'/contato'}>
            Contato
          </NavLink>
        </li>
      </ul>
      <IoMdClose className='icon-close' />
    </ContainerMenu>
  );
};

export default Menu;
