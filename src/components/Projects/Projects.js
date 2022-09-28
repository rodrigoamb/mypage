import React from 'react';
import CardProject from './CardProject/CardProject';
import { ContainerProject } from './ProjectsStyles';

import { useEffect } from 'react';

//aos
import Aos from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <ContainerProject>
      <section className='limit-content-projects' data-aos='flip-right'>
        <CardProject />
        <CardProject />
        <CardProject />
        <CardProject />
      </section>
    </ContainerProject>
  );
};

export default Projects;
