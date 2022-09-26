import React from 'react';
import { ContainerCard } from './CardStyles';

const Card = ({ photo, deponent, profession, deposition }) => {
  return (
    <ContainerCard>
      <img className='profile-image' src={photo} alt='photoProfile' />
      <div className='header-card'>
        <div className='name-card'>{deponent}</div>
        <div className='profession-card'>{profession}</div>
      </div>
      <div className='deposition-card'>{deposition}</div>
    </ContainerCard>
  );
};

export default Card;
