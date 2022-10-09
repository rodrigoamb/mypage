//styles
import { ContainerHome } from "./HomeStyles";

//components
import HeaderSecondary from "../../components/HeaderSecondary/HeaderSecondary";
import SectionTechs from "../../components/SectionTechs/SectionTechs";
import SectionTitles from "../../components/SectionTitles/SectionTitles";
import Button from "../../components/Button/Button";
import CardDepositions from "../../components/CardDepositions/CardDepositions";
import Footer from "../../components/Footer/Footer";

const Home = ({ menuIsVisible }) => {
  const titleTech = "Tecnologias que eu uso...";
  const descriptionTech =
    "No decorrer dos estudos e práticas, adquiri experiências nas seguintes tecnologias:";

  const titleDepositions = "Alguns depoimentos...";
  const descriptionDepositions = "Veja o que as pessoas acham do meu trabalho:";

  return (
    <ContainerHome menuIsVisible={menuIsVisible}>
      <HeaderSecondary />
      <SectionTitles title={titleTech} description={descriptionTech} />
      <SectionTechs />
      <Button description={"Ver Portfólio"} to={"/portfolio"} />
      <SectionTitles
        title={titleDepositions}
        description={descriptionDepositions}
      />
      <CardDepositions />
      <Button description={"Me mande uma mensagem"} to={"/contato"} />
      <Footer />
    </ContainerHome>
  );
};

export default Home;
