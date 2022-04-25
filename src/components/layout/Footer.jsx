import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className='mt-auto p-10 bg-secondary flex justify-center'>
      <div className='w-full lg:w-4/5 text-primary-content text-opacity-70 footer justify-between lg:justify-around'>
        <div>
          <span className='footer-title'>Tomasz Witkowski's Portfolio</span>
          <a className='transition hover:text-primary-content' href='#header'>
            Back to top
          </a>
          <a className='transition hover:text-primary-content' href='#projects'>
            Projects
          </a>
          <a className='transition hover:text-primary-content' href='#about'>
            About
          </a>
          <a className='transition hover:text-primary-content' href='#contact'>
            Contact
          </a>
        </div>
        <div>
          <span className='footer-title'>Social</span>
          <div className='grid grid-flow-col gap-4'>
            <a
              href='https://www.linkedin.com/in/tomasz-witkowski-8a0743238/'
              target='_blank'
              rel='noreferrer'
              aria-label='linkedin'
            >
              <FaLinkedin className='w-8 h-8 transition hover:text-primary-content hover:scale-110' />
            </a>
            <a
              href='https://github.com/witktom5/'
              target='_blank'
              rel='noreferrer'
              aria-label='github'
            >
              <FaGithub className='w-8 h-8 transition hover:text-primary-content hover:scale-110' />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
