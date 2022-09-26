//styles
import { ContainerHeaderSecondary } from './HeaderSecondaryStyles';

//react-router-dom
import { Link } from 'react-router-dom';

//assets
import mePhoto from '../../assets/me.jpg';

//aos
import Aos from 'aos';
import 'aos/dist/aos.css';

//hooks react
import { useEffect } from 'react';

const HeaderSecondary = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <ContainerHeaderSecondary>
      <div className='container-curved'>
        <section data-aos='fade-right' className='card'>
          <div className='info-card'>
            <h1>Rodrigo Medeiros</h1>
            <h2>Front-End Web Developer</h2>
            <p>
              <span>
                Sou desenvolvedor de software com foco em Front-End Web,
                atualmente estou buscando evoluir ainda mais os estudos com
                ferramentas Back-End para tornar-me um Dev Full-Stack.
                Atualmente estou cursando a faculdade de Análise e
                Desenvolvimento de Sistemas, sou apaixonado por tecnologia, amo
                estudar e aprender novas habilidades.
              </span>
              <span>
                Abaixo você confere as tecnologias que eu tenho experiência e se
                quiser saber mais sobre mim, navegue nos botões abaixo:
              </span>
            </p>
            <div className='container-btn'>
              <Link to={'/portfolio'} className='btn-card'>
                Ver Portfólio
              </Link>
              <Link to={'/contato'} className='btn-card'>
                Me mande uma mensagem
              </Link>
            </div>
          </div>
          <div className='container-img'>
            <img className='img-card' src={mePhoto} alt='Rodrigo' />
          </div>
        </section>

        <div className='curved1'></div>
        <div className='curved2'></div>
        <div className='curved3'></div>
      </div>
    </ContainerHeaderSecondary>
  );
};

export default HeaderSecondary;
