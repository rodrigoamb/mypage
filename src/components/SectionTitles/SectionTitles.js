import React from 'react';
import { ContainerTitles } from './SectionTitlesStyles';

//aos
import Aos from 'aos';
import 'aos/dist/aos.css';

//hooks react
import { useEffect } from 'react';

const SectionTitles = ({ title, description }) => {
  useEffect(() => {
    Aos.init({ once: true, mirror: true, anchorPlacement: 'center-bottom' });
  }, []);

  return (
    <ContainerTitles>
      <div data-aos='zoom-in' className='limit-content-title'>
        <div className='container-title'>
          <span className='detail-title'></span>
          <h2>{title}</h2>
        </div>

        <p>{description}</p>
      </div>
    </ContainerTitles>
  );
};

export default SectionTitles;
