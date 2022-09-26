import { ContainerContact } from './ContactStyles';

import Footer from '../../components/Footer/Footer';
import SectionTitles from '../../components/SectionTitles/SectionTitles';
import FormMsg from '../../components/FormMsg/FormMsg';

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
        <FormMsg />
        <Footer />
      </ContainerContact>
    </>
  );
};

export default Contact;
