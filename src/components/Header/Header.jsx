import HeaderIcon from './HeaderIcon';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Header() {
  return (
    <div className='flex justify-center mt-header pb-48 sm:pb-72 lg:pb-52 2xl:pb-72 3xl:pb-80 wave wave-1'>
      <div className='hero pt-5 lg:pt-10 w-full lg:w-4/5  '>
        <header
          id='header'
          className='hero-content flex-col lg:flex-row lg:gap-20'
        >
          <HeaderIcon />
          <div className='flex flex-col'>
            <div className='w-100 flex justify-center lg:justify-start'>
              <h1 className='text-5xl w-fit font-bold mb-1 text-center leading-tight lg:text-left lg:-ml-1'>
                Tomasz Witkowski
              </h1>
            </div>
            <h2 className='text-4xl text-center lg:text-left font-normal sub-header'>
              Web Developer
            </h2>
            <div className='flex justify-center lg:justify-start py-8'>
              <p className='w-4/5 font-normal'>
                I'm a Web Developer based in Poland. My current goal is to build
                a professional career as a coder. I like learning new things and
                bringing my own ideas to life.
              </p>
            </div>
            <div className='self-center lg:self-start flex gap-12 items-center'>
              <button className='btn btn-dark w-fit '>My Resume</button>
              <div className='ml-auto flex gap-4'>
                <a
                  href='https://www.linkedin.com/in/witkowski-tomasz/'
                  target='_blank'
                  rel='noreferrer'
                  aria-label='linkedin'
                >
                  <FaLinkedin className='w-9 h-9 transition hover:text-primary-focus hover:scale-110' />
                </a>
                <a
                  href='https://github.com/witktom5/'
                  target='_blank'
                  rel='noreferrer'
                  aria-label='github'
                >
                  <FaGithub className='w-9 h-9 transition hover:text-primary-focus hover:scale-110' />
                </a>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}
export default Header;
