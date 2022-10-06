import React from 'react';
import { Container } from './HeaderTopStyles';
import { IoMdMenu } from 'react-icons/io';
import { Link } from 'react-router-dom';

const HeaderTop = ({ setMenuIsVisible }) => {
  return (
    <Container>
      <div className='limit-content'>
        <div className='container-logo'>
          <Link to={'/'} className='title-name'>
            <span className='symbol-keys'>{'{ '}</span>
            <span className='symbol-big-small-then'>{'< '}</span>
            <span className='my-name'>RodrigoMedeiros</span>
            <span className='symbol-big-small-then'>{' />'}</span>
            <span className='symbol-keys'>{' }'}</span>
          </Link>
        </div>

        <IoMdMenu
          className='icon-burger'
          onClick={() => setMenuIsVisible(true)}
        />
      </div>
    </Container>
  );
};

export default HeaderTop;
