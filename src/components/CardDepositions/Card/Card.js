import { ContainerCard } from './CardStyles';

import { FaLinkedinIn } from 'react-icons/fa';

const Card = ({ photo, deponent, profession, deposition, linkedin }) => {
  return (
    <ContainerCard>
      <img className="profile-image" src={photo} alt="photoProfile" />
      <div className="container-title-card">
        <div className="header-card">
          <div className="name-card">{deponent}</div>
          <div className="profession-card">{profession}</div>
        </div>
        <a href={linkedin} target="blank">
          <FaLinkedinIn className="icon" />
        </a>
      </div>
      <div className="deposition-card">{deposition}</div>
    </ContainerCard>
  );
};

export default Card;
