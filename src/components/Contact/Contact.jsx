import SectionHeader from '../layout/SectionHeader';
import ContactForm from './ContactForm';
import Modal from '../shared/Modal';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Contact() {
  return (
    <section
      className='flex justify-center pb-28 relative overflow-hidden'
      id='contact'
    >
      <div className='w-full lg:w-4/5 px-3'>
        <SectionHeader title='Contact' />
        <div className='card bg-base-300 mx-auto shadow-lg w-full max-w-xl bg-opacity-80 card-contact'>
          <div className='card-body gap-0 pb-3 mx-auto w-full md:max-w-lg pb-0 justify-between'>
            <ContactForm />
            <Modal
              className='ml-auto'
              title={'this form'}
              content={
                <>
                  <p>This form was created and configured using EmailJS.</p>
                  <p>
                    You can also email me directly: twitkowski.dev@gmail.com.
                  </p>
                </>
              }
            />
          </div>
          <div className='bg-accent mt-2 h-14 w-full flex items-center px-6 gap-6 justify-end'>
            <a
              href='https://www.linkedin.com/in/witkowski-tomasz/'
              target='_blank'
              rel='noreferrer'
              aria-label='linkedin'
            >
              <FaLinkedin className='w-9 h-9 text-primary-content' />
            </a>
            <a
              href='mailto: twitkowski.dev@gmail.com'
              target='_blank'
              rel='noreferrer'
              aria-label='mail'
            >
              <FaEnvelope className='w-9 h-9 text-primary-content' />
            </a>
            <a
              href='https://github.com/witktom5/'
              target='_blank'
              rel='noreferrer'
              aria-label='github'
            >
              <FaGithub className='w-9 h-9 text-primary-content' />
            </a>
          </div>
        </div>
      </div>
      <div className='blobs' />
    </section>
  );
}
export default Contact;
