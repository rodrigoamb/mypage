import React from 'react';
import { ContainerCardProject } from './CardProjectStyles';

const CardProject = ({ addProjects }) => {
  return (
    <>
      {addProjects.map((item) => (
        <ContainerCardProject>
          <div className='image-card'>
            <img src={item.img} alt='projeto' width='350px' height='190px' />
          </div>
          <div className='middle-card'>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <p>
              <span>Tecnologias: </span>
              {item.techs}
            </p>
            <div className='container-btn-card'>
              <a href={item.page} target='blank'>
                Ver o projeto
              </a>
              <a href={item.code} target='blank'>
                Ir para o código
              </a>
            </div>
          </div>
        </ContainerCardProject>
      ))}
    </>
  );
};

export default CardProject;
