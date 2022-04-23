import ContactForm from './ContactForm';

function Contact() {
  return (
    <section
      className='flex justify-center pb-14 relative overflow-hidden'
      id='contact'
    >
      <div className='w-full lg:w-4/5 px-3'>
        <header>
          <h3 className='text-center text-4xl font-bold pb-14'>Contact</h3>
        </header>
        <div className='card bg-base-300 mx-auto shadow-lg w-full max-w-xl bg-opacity-90'>
          <div className='card-body mx-auto w-full md:max-w-lg'>
            <ContactForm />
          </div>
        </div>
      </div>
      <div className='blobs' />
    </section>
  );
}
export default Contact;
