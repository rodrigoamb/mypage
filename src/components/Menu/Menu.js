import React from 'react';
import { ContainerMenu } from './MenuStyles';
import { NavLink } from 'react-router-dom';

import { IoMdClose } from 'react-icons/io';
import { useEffect } from 'react';

const Menu = ({ menuIsVisible, setMenuIsVisible }) => {
  useEffect(() => {
    document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto';
  }, [menuIsVisible]);

  return (
    <ContainerMenu menuIsVisible={menuIsVisible}>
      <ul className='content-ul'>
        <li>
          <NavLink
            className='btn-nav'
            to={'/'}
            onClick={() => setMenuIsVisible(false)}
          >
            Sobre mim
          </NavLink>
        </li>
        <li>
          <NavLink
            className='btn-nav'
            to={'/portfolio'}
            onClick={() => setMenuIsVisible(false)}
          >
            Portfólio
          </NavLink>
        </li>
        <li>
          <NavLink
            className='btn-nav'
            to={'/contato'}
            onClick={() => setMenuIsVisible(false)}
          >
            Contato
          </NavLink>
        </li>
      </ul>
      <IoMdClose
        className='icon-close'
        onClick={() => setMenuIsVisible(false)}
      />
    </ContainerMenu>
  );
};

export default Menu;
