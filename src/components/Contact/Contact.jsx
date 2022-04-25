import SectionHeader from '../layout/SectionHeader';
import ContactForm from './ContactForm';
import Modal from '../layout/Modal';

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
            <ContactForm />
            <Modal
              className='ml-auto'
              title={'this form'}
              content={
                <>
                  <p>This form was created and configured using EmailJS.</p>
                  <p>You can also email me directly: witktom5@gmail.com.</p>
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
