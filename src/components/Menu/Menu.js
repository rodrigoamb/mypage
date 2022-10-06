import React from 'react';
import { ContainerMenu } from './MenuStyles';
import { NavLink } from 'react-router-dom';

import { IoMdClose } from 'react-icons/io';
import { useEffect } from 'react';

//react icons
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Menu = ({ menuIsVisible, setMenuIsVisible }) => {
  useEffect(() => {
    document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto';
  }, [menuIsVisible]);

  return (
    <ContainerMenu menuIsVisible={menuIsVisible}>
      <IoMdClose
        className='icon-close'
        onClick={() => setMenuIsVisible(false)}
      />

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

      <div className='container-icons'>
        <a className='icon' href='htttp://google.com.br' target={'blank'}>
          <FaInstagram />
        </a>
        <a className='icon' href='htttp://google.com.br' target={'blank'}>
          <FaGithub />
        </a>
        <a className='icon' href='htttp://google.com.br' target={'blank'}>
          <FaLinkedinIn />
        </a>
      </div>
    </ContainerMenu>
  );
};

export default Menu;
