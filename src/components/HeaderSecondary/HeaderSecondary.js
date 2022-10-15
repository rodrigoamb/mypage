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
      <div className="container-curved">
        <section data-aos="fade-right" className="card">
          <div className="info-card">
            <h1>Rodrigo Medeiros</h1>
            <h2>Desenvolvedor Front-End</h2>
            <p>
              <span>
                Sou desenvolvedor de software com foco em Front-End Web,
                atualmente estou buscando evoluir ainda mais com o estudos de
                tecnologias Front-End e Back-End afim de tornar-me um Dev
                Full-Stack. Sou acadêmico do curso de Análise e Desenvolvimento
                de Sistemas, sou apaixonado por tecnologia e em aprender novas
                habilidades da área.
              </span>
              <span>
                Abaixo você confere as tecnologias que eu tenho experiência,
                depoimentos e se quiser saber mais sobre o meu trabalho, clique
                nos botões abaixo:
              </span>
            </p>
            <div className="container-btn">
              <Link to={'/portfolio'} className="btn-card">
                Ver Portfólio
              </Link>
              <Link to={'/contato'} className="btn-card">
                Me mande uma mensagem
              </Link>
              <a
                href={
                  'https://drive.google.com/file/d/1_9yl1G8PpWJsh6AxRi3WoCYKmEni__Z1/view?usp=sharing'
                }
                target={'blank'}
                className="btn-card"
              >
                Download Currículo
              </a>
            </div>
          </div>
          <div className="container-img">
            <img className="img-card" src={mePhoto} alt="Rodrigo" />
          </div>
        </section>

        <div className="curved1"></div>
        <div className="curved2"></div>
        <div className="curved3"></div>
      </div>
    </ContainerHeaderSecondary>
  );
};

export default HeaderSecondary;
