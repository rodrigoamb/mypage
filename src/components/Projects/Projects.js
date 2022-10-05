import CardProject from './CardProject/CardProject';

import { ContainerProject } from './ProjectsStyles';

import { useEffect } from 'react';

//import addProjects
import { addProjects } from './addProjects';

//aos
import Aos from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <ContainerProject>
      <section className='limit-content-projects' data-aos='fade-down'>
        <CardProject addProjects={addProjects} />
      </section>
    </ContainerProject>
  );
};

export default Projects;
