import NavHeader from './NavHeader/NavHeader';
import { ContainerHeader } from './HeaderStyles';

import TopHeader from './TopHeader/TopHeader';

const Header = () => {
  return (
    <ContainerHeader>
      <TopHeader />
      <NavHeader />
    </ContainerHeader>
  );
};

export default Header;
