import { useState } from 'react';
import emailjs from 'emailjs-com';

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState({});

  const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
  const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
  const USER_ID = process.env.REACT_APP_USER_ID;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      () => {
        setMessage({
          top: 'Thank you!',
          bottom: `I'll be in touch soon.`,
        });
      },
      () => {
        setMessage({
          top: 'Oh no!',
          bottom: `Something went wrong with the contact form.`,
        });
      },
      setSubmitted(true)
    );
    e.target.reset();
  };

  if (submitted) {
    return (
      <>
        <div className='flex items-center flex-col'>
          <div className='text-3xl pb-6 pt-10'>{message.top}</div>
          <div className='text-xl pb-10'>{message.bottom}</div>
        </div>
      </>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='form-control'>
        <label htmlFor='name' className='label label-text text-lg'>
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
        <label htmlFor='email' className='label label-text text-lg'>
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
        <label htmlFor='message' className='label label-text text-lg'>
          Your message
        </label>
        <textarea
          className='textarea textarea-primary'
          placeholder='Enter your message'
          id='message'
          name='message'
          rows='3'
        />
      </div>
      <button type='submit' className='btn btn-wide flex mx-auto'>
        Submit
      </button>
    </form>
  );
}
export default ContactForm;
