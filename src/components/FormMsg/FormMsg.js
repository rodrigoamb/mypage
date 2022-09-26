import React from 'react';

import { ContainerFormMsg } from './FormMsgStyles';

//hooks react
import { useEffect } from 'react';

//aos
import Aos from 'aos';
import 'aos/dist/aos.css';

const FormMsg = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <ContainerFormMsg data-aos='fade-down'>
      <form className='limit-content-form'>
        <label>
          <span>Nome:</span>
          <input
            className='input-form'
            placeholder='Digite seu nome aqui'
            type='text'
            name='name'
            id='name'
            required
          />
        </label>
        <label>
          <span>Assunto:</span>
          <input
            className='input-form'
            placeholder='Digite o assunto da mensagem aqui'
            type='text'
            name='subject'
            id='subject'
            required
          />
        </label>
        <label>
          <span>Seu e-mail:</span>
          <input
            className='input-form'
            placeholder='Digite seu e-mail aqui'
            type='email'
            name='email'
            id='email'
            required
          />
        </label>
        <label className='content-textarea'>
          <span className='title-textarea'>Digite aqui sua mensagem:</span>
          <textarea placeholder='Área da mensagem' required></textarea>
        </label>
        <input className='btn-submit' type='submit' value='Enviar mensagem' />
      </form>
      {<div className='message'>Mensagem enviada com sucesso!</div>}
    </ContainerFormMsg>
  );
};

export default FormMsg;
