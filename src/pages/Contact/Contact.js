import { ContainerContact } from "./ContactStyles";

import Footer from "../../components/Footer/Footer";
import SectionTitles from "../../components/SectionTitles/SectionTitles";
import FormMsg from "../../components/FormMsg/FormMsg";

const Contact = ({ menuIsVisible }) => {
  return (
    <>
      <ContainerContact menuIsVisible={menuIsVisible}>
        <SectionTitles
          title={"Me mande uma mensagem..."}
          description={
            "Entre em contato diretamente comigo preenchendo os campos abaixo:"
          }
        />
        <FormMsg />
        <Footer />
      </ContainerContact>
    </>
  );
};

export default Contact;
