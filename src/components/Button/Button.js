import React from 'react';
import { Link } from 'react-router-dom';
import { ContainerButton } from './ButtonStyles';

const Button = ({ description, to }) => {
  return (
    <ContainerButton>
      <Link to={to} className='btn-link'>
        <span className='btn-name'>{description}</span>
      </Link>
    </ContainerButton>
  );
};

export default Button;
