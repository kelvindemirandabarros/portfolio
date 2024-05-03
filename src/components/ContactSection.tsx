'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// SVG Icons:
import GithubIcon from '../../public/github-icon.svg';
import LinkedinIcon from '../../public/linkedin-icon.svg';
import WhatsappIcon from '../../public/whatsapp-icon.svg';

export function ContactSection() {
  const [email_submitted, set_email_submitted] = useState(false);

  const handle_submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = {
      email: event.currentTarget.email.value,
      subject: event.currentTarget.subject.value,
      message: event.currentTarget.message.value
    };
    const json_data = JSON.stringify(data);
    const endpoint = '/api/send';

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: 'POST',
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json'
      },
      // Body of the request is the JSON data we created above.
      body: json_data
    };

    const response = await fetch(endpoint, options);
    const response_json = await response.json();

    if (response.status === 200) {
      console.log('Mensagem enviada.');
      set_email_submitted(true);
    } else {
      console.log('A mensagem falhou.');
      set_email_submitted(true);

      console.log('response_json:', response_json);
    }
  };

  return (
    <section
      id='contact'
      className='grid md:grid-cols-1 my-12 md:my-12 py-24 gap-4 relative'
    >
      <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2'></div>

      <div className='z-10'>
        <h5 className='text-xl font-bold text-white my-2'>{`Vamos nos conectar`}</h5>

        <p className='text-[#ADB7BE] mb-4 max-w-md'>
          {`Atualmente estou em busca de novas oportunidades, minha caixa de entrada está sempre aberta. Se você tiver alguma dúvida ou apenas quiser dizer oi, farei o possível para entrar em contato com você! Estas são minhas redes sociais:`}
        </p>

        <div className='socials flex flex-row gap-4'>
          <Link href='https://github.com/kelvindemirandabarros' target='_blank'>
            <Image src={GithubIcon} alt='Ícone do Github' />
          </Link>

          <Link
            href='https://www.linkedin.com/in/kelvindemirandabarros/'
            target='_blank'
          >
            <Image src={LinkedinIcon} alt='Ícone do LinkedIn' />
          </Link>

          <Link
            href='https://api.whatsapp.com/send?phone=+5583996633179&text=Ol%C3%A1+Kelvin%2C+estou+vindo+atrav%C3%A9s+do+seu+portf%C3%B3lio+e+gostaria+de+...'
            target='_blank'
          >
            <Image
              src={WhatsappIcon}
              alt='Ícone do Whatsapp'
              style={{
                width: 48,
                height: 48
              }}
            />
          </Link>
        </div>
      </div>

      {/* Parte referente ao envio de email pelo frontend. */}
      {/* <div>
        {email_submitted ? (
          <p className='text-green-500 text-sm mt-2'>Email enviado!</p>
        ) : (
          <form className='flex flex-col' onSubmit={handle_submit}>
            <div className='mb-6'>
              <label
                htmlFor='email'
                className='text-white block mb-2 text-sm font-medium'
              >
                Seu email
              </label>

              <input
                name='email'
                type='email'
                id='email'
                required
                className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                placeholder='seuemail@provedor.com'
              />
            </div>

            <div className='mb-6'>
              <label
                htmlFor='subject'
                className='text-white block text-sm mb-2 font-medium'
              >
                Assunto
              </label>

              <input
                name='subject'
                type='text'
                id='subject'
                required
                className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                placeholder='Título da mensagem'
              />
            </div>

            <div className='mb-6'>
              <label
                htmlFor='message'
                className='text-white block text-sm mb-2 font-medium'
              >
                Mensagem
              </label>

              <textarea
                name='message'
                id='message'
                className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                placeholder='Vamos falar sobre...'
              />
            </div>

            <button
              type='submit'
              className='bg-primary-700 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full'
            >
              Enviar email
            </button>
          </form>
        )}
      </div> */}
    </section>
  );
}
