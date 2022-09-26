//import styles
import { ContainerErrorPage } from './ErrorPageStyles';

// react icons
import { BiMessageError } from 'react-icons/bi';

// react-router-dom
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <ContainerErrorPage>
      <BiMessageError className='icon' />
      <span className='msg-error'>OPS! Página não encontrada!</span>
      <Link to={'/'} className='btn-return-home'>
        Voltar para a página principal
      </Link>
    </ContainerErrorPage>
  );
};

export default ErrorPage;
