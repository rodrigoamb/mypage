// react-icons
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

//import react-router-dom
import { Link } from 'react-router-dom';

//import assets
import PictureRound from '../../../assets/profilePicture.png';
import { ContainerTopHeader } from './TopHeaderStyles';

//aos
import Aos from 'aos';
import 'aos/dist/aos.css';

//hooks react
import { useEffect } from 'react';

const TopHeader = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <ContainerTopHeader>
      <div className='container-top-header' data-aos='fade-right'>
        <Link to={'/'} className='title-name'>
          <span className='symbol-keys'>{'{ '}</span>
          <span className='symbol-big-small-then'>{'< '}</span>
          <span className='my-name'>RodrigoMedeiros</span>
          <span className='symbol-big-small-then'>{' />'}</span>
          <span className='symbol-keys'>{' }'}</span>
        </Link>

        <div className='container-img'>
          <img src={PictureRound} alt='Rodrigo Medeiros' />
        </div>

        <p className='about-me'>
          Olá, meu nome é Rodrigo Medeiros e sou Desenvolvedor Front-End. Seja
          bem-vindo ao meu portfólio Dev!
        </p>

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
      </div>
    </ContainerTopHeader>
  );
};

export default TopHeader;
