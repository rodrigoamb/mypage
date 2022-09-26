//styles
import { ContainerSectionTech, LogoTech } from './SectionTechsStyles';

//aos
import Aos from 'aos';
import 'aos/dist/aos.css';

//hooks react
import { useEffect } from 'react';

//imports JS
import { techs } from './addTechs';

const SectionTechs = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <ContainerSectionTech>
      <article className='limit-content'>
        <div
          data-aos='fade-up'
          data-aos-anchor-placement='center-bottom'
          className='grid-techs'
        >
          {techs.map((item) => (
            <div className='card-tech' key={item.id}>
              <LogoTech
                className='div-icon'
                color={item.color}
                delay={item.delay}
                id={item.id}
              >
                {item.tech}
              </LogoTech>
              <span className='title-tech'>{item.nameTech}</span>
            </div>
          ))}
        </div>
      </article>
    </ContainerSectionTech>
  );
};

export default SectionTechs;
