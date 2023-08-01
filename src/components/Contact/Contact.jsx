import React from 'react';
import './Contact.css';
import { MdOutlineMail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { toast, Toaster } from 'react-hot-toast';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const addAlert = () => {
      toast.success(
        'Thank you very much for contacting me, I will contact you shortly so I can talk to you',
        {
          duration: 5000,
        }
      );
    };

    emailjs
      .sendForm(
        'service_w07x2il',
        'template_03ssudc',
        form.current,
        'mCfCRNTY_MnTAcN7v'
      )
      .then(
        (result) => {
          console.log(result.text);
          addAlert();
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id='contact'>
      <div>
        <Toaster position='top-center' reverseOrder={false} />
      </div>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>leomel2603@gmail</h5>
            <a
              href='mailto:leomel2603@gmail.com'
              target='_blank'
              rel='noopener noreferrer'>
              Send A Message
            </a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Leonardo Melchiori</h5>
            <a
              href='https://m.me/leonardo.melchiori.3'
              target='_blank'
              rel='noopener noreferrer'>
              Send A Message
            </a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>Write me</h5>
            <a
              href='https://wa.me/+542804608226'
              target='_blank'
              rel='noopener noreferrer'>
              Send A Message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type='text'
            name='name'
            placeholder='Your Full Name'
            required
          />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea
            name='message'
            id=''
            placeholder='Your Message'
            rows='7'
            required></textarea>
          <button type='submit' className='btn btn-primary'>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
