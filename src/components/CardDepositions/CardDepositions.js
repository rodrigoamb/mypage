import React from 'react';

import { ContainerDepositions } from './CardDepositionsStyles';
import Card from './Card/Card';

//aos
import Aos from 'aos';
import 'aos/dist/aos.css';

import { DepositionsList } from './addDepositions';

//hooks react
import { useEffect } from 'react';

const CardDepositions = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const deposition = DepositionsList;

  return (
    <ContainerDepositions data-aos="fade-up">
      <div className="limit-cards">
        {deposition.map((item) => (
          <Card
            key={item.id}
            photo={item.photo}
            deponent={item.deponent}
            profession={item.profession}
            deposition={item.deposition}
          />
        ))}
      </div>
    </ContainerDepositions>
  );
};

export default CardDepositions;
