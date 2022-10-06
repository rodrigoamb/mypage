import Footer from "../../components/Footer/Footer";
import Projects from "../../components/Projects/Projects";
import SectionTitles from "../../components/SectionTitles/SectionTitles";
import { ContainerPortfolio } from "./PortfolioStyles";

const Portfolio = ({ menuIsVisible }) => {
  return (
    <ContainerPortfolio menuIsVisible={menuIsVisible}>
      <SectionTitles
        title={"Meus projetos desenvolvidos..."}
        description={"Confira abaixo algum dos projetos elaborados por mim:"}
      />
      <Projects />
      <Footer />
    </ContainerPortfolio>
  );
};

export default Portfolio;
