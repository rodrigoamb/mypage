import React from 'react';

import { ContainerFormMsg } from './FormMsgStyles';

//hooks react
import { useEffect, useState } from 'react';

//aos
import Aos from 'aos';
import 'aos/dist/aos.css';

//emailJS
import emailjs from '@emailjs/browser';

const FormMsg = () => {
  const [nameContact, setNameContact] = useState('');
  const [emailContact, setEmailContact] = useState('');
  const [subjectContact, setSubjectContact] = useState('');
  const [messageContact, setMessageContact] = useState('');
  const [loading, setloading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [removeButton, setRemoveButton] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const handleSendEmail = (e) => {
    e.preventDefault();

    setloading(true);
    setRemoveButton(true);

    const templateParams = {
      from_name: nameContact,
      subject: subjectContact,
      message: messageContact,
      email: emailContact,
    };

    emailjs
      .send(
        'service_mebe85i',
        'template_jwimee3',
        templateParams,
        'w8oYH4a2vthvs1tw7'
      )
      .then((response) => {
        setNameContact('');
        setEmailContact('');
        setSubjectContact('');
        setMessageContact('');
        if (response.status === 200) {
          setloading(false);
          setRemoveButton(false);
          setStatusMessage('Mensagem enviada com sucesso!');
        }
      })
      .catch((error) => {
        if (error) {
          setloading(false);
          setRemoveButton(false);
          setStatusMessage('Ocorreu um erro! Tente novamente mais tarde!');
        }
      });
  };

  return (
    <ContainerFormMsg data-aos='fade-down'>
      <form className='limit-content-form' onSubmit={handleSendEmail}>
        <label>
          <span>Nome:</span>
          <input
            className='input-form'
            placeholder='Digite seu nome aqui'
            type='text'
            name='name'
            id='name'
            required
            value={nameContact}
            onChange={(e) => setNameContact(e.target.value)}
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
            value={subjectContact}
            onChange={(e) => setSubjectContact(e.target.value)}
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
            value={emailContact}
            onChange={(e) => setEmailContact(e.target.value)}
          />
        </label>
        <label className='content-textarea'>
          <span className='title-textarea'>Digite aqui sua mensagem:</span>
          <textarea
            placeholder='Área da mensagem'
            required
            value={messageContact}
            onChange={(e) => setMessageContact(e.target.value)}
          ></textarea>
        </label>
        {!removeButton && (
          <input className='btn-submit' type='submit' value='Enviar mensagem' />
        )}
      </form>
      {loading ? (
        <>
          <div className='spinner'></div>
          <div className='message'>Aguarde, enviando mensagem...</div>
        </>
      ) : (
        <div className='message'>{statusMessage}</div>
      )}
    </ContainerFormMsg>
  );
};

export default FormMsg;
