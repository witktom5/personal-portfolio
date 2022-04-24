import SectionHeader from '../layout/SectionHeader';
import ContactForm from './ContactForm';
import Modal from '../Projects/Modal';

function Contact() {
  return (
    <section
      className='flex justify-center pb-28 relative overflow-hidden'
      id='contact'
    >
      <div className='w-full lg:w-4/5 px-3'>
        <SectionHeader title='Contact' />
        <div className='card bg-base-300 mx-auto shadow-lg w-full max-w-xl bg-opacity-80'>
          <div className='card-body mx-auto w-full md:max-w-lg pb-2'>
            <div className='card-title'>
              <h3 className='w-fit mx-auto mb-8 pt-4'>Send me a message</h3>
            </div>
            <ContactForm />
            <Modal
              className='ml-auto'
              title={'this form'}
              content={
                <>
                  <p>This form was created and configured using EmailJS.</p>
                  <p>You can also email me directly: mail@gmail.com.</p>
                </>
              }
            />
          </div>
        </div>
      </div>
      <div className='blobs' />
    </section>
  );
}
export default Contact;
