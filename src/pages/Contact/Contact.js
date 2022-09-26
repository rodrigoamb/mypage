import { ContainerContact } from './ContactStyles';

import Footer from '../../components/Footer/Footer';
import SectionTitles from '../../components/SectionTitles/SectionTitles';

const Contact = () => {
  return (
    <>
      <ContainerContact>
        <SectionTitles
          title={'Me envie uma mensagem...'}
          description={
            'Entre em contato diretamente comigo preenchendo os campos abaixo:'
          }
        />
        <div className='form-test'>FORMULARIO</div>
        <Footer />
      </ContainerContact>
    </>
  );
};

export default Contact;
