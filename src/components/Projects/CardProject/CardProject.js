import React from 'react';
import { ContainerCardProject } from './CardProjectStyles';

const CardProject = () => {
  return (
    <ContainerCardProject>
      <div className='middle-card image-card'>
        <img
          src='https://www.hostinger.com.br/tutoriais/wp-content/uploads/sites/12/2018/11/Como-Fazer-o-Layout-de-Um-Site-em-6-Passos-facebook.png'
          alt='projeto'
          width='350px'
          height='200px'
        />
      </div>
      <div className='middle-card'>
        <h2>Título do projeto</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          repellat alias veritatis autem reprehenderit officia cumque sequi
          nesciunt aperiam minus, quia iste reiciendis aliquam velit!
        </p>
        <p>
          <span>Tecnologias: </span>Html, CSS, Javascript, ReactJS.
        </p>
        <div className='container-btn-card'>
          <a href='#'>Ver o projeto</a>
          <a href='#'>Ir para o código</a>
        </div>
      </div>
    </ContainerCardProject>
  );
};

export default CardProject;
