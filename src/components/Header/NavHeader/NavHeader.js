//react-router-dom
import { NavLink } from 'react-router-dom';

//styles
import { ContainerNavBar } from './NavHeaderStyles';

//react-icons
import { FaUserCircle, FaDev, FaEnvelope } from 'react-icons/fa';

//aos
import Aos from 'aos';
import 'aos/dist/aos.css';

//hooks react
import { useEffect } from 'react';

const NavHeader = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <ContainerNavBar>
      <ul data-aos='fade-up'>
        <li>
          <NavLink className='btn-nav' to={'/'} end>
            <FaUserCircle className='icon-nav' />
            Sobre mim
          </NavLink>
        </li>
        <li>
          <NavLink className='btn-nav' to={'/portfolio'}>
            <FaDev className='icon-nav' />
            Portfólio
          </NavLink>
        </li>
        <li>
          <NavLink className='btn-nav' to={'/contato'}>
            <FaEnvelope className='icon-nav' />
            Contato
          </NavLink>
        </li>
      </ul>
    </ContainerNavBar>
  );
};

export default NavHeader;
