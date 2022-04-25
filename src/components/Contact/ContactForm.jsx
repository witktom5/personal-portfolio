import { useState } from 'react';
import emailjs from 'emailjs-com';
import Spinner from '../shared/Spinner';

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
  const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
  const USER_ID = process.env.REACT_APP_USER_ID;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID);
      setMessage({
        top: 'Thank you!',
        bottom: `I'll be in touch soon.`,
      });
    } catch (error) {
      setIsError(true);
      setMessage({
        top: 'Oh no!',
        bottom: `Something went wrong with the contact form. Try again later!`,
      });
    }
    setIsLoading(false);
    setSubmitted(true);
    e.target.reset();
  };

  if (isLoading) {
    return (
      <>
        <div className='card-title'>
          <h3 className='w-fit mx-auto mb-8 pt-4'>Sending your message...</h3>
        </div>
        <div className='flex items-center flex-col'>
          <Spinner />
        </div>
      </>
    );
  }

  if (submitted) {
    return (
      <>
        <div className='card-title'>
          <h3
            className={`w-fit mx-auto text-2xl font-bold mb-8 pt-4 ${
              isError ? 'text-error' : 'text-success'
            }`}
          >
            {isError ? 'Error' : 'Message sent'}
          </h3>
        </div>
        <div className='flex items-center flex-col'>
          <div className='text-2xl pb-6 pt-10 font-semibold'>{message.top}</div>
          <div className='text-xl pb-10 font-medium'>{message.bottom}</div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className='card-title'>
        <h3 className='w-fit mx-auto mb-8 pt-4'>Send me a message</h3>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name' className='label label-text font-normal'>
            Your name
          </label>
          <input
            type='text'
            placeholder='Enter your name'
            className='input input-bordered input-primary'
            id='name'
            name='from_name'
            required
          />
        </div>
        <div className='form-control'>
          <label htmlFor='email' className='label label-text font-normal'>
            Your email
          </label>
          <input
            type='email'
            placeholder='Enter your email'
            className='input input-bordered input-primary '
            id='email'
            name='from_email'
            required
          />
        </div>
        <div className='form-control mb-7'>
          <label htmlFor='message' className='label label-text font-normal'>
            Your message
          </label>
          <textarea
            className='textarea textarea-primary'
            placeholder='Enter your message'
            id='message'
            name='message'
            rows='3'
            required
          />
        </div>
        <button type='submit' className='btn w-3/5 sm:btn-wide flex mx-auto'>
          Submit
        </button>
      </form>
    </>
  );
}
export default ContactForm;
