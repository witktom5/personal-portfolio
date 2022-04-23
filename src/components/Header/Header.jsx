import HeaderIcon from './HeaderIcon';

function Header() {
  return (
    <div className='flex justify-center mt-header pb-48 sm:pb-72 lg:pb-52 2xl:pb-72 3xl:pb-80 wave wave-1'>
      <div className='hero pt-10 w-full lg:w-4/5  '>
        <header
          id='header'
          className='hero-content flex-col lg:flex-row lg:gap-20'
        >
          <HeaderIcon />
          <div className='flex flex-col'>
            <div className='w-100 flex justify-center lg:justify-start'>
              <h1 className='text-5xl w-fit font-bold mb-5 text-center lg:text-left leading-tight'>
                Tomasz Witkowski
              </h1>
            </div>
            <h2 className='text-4xl font-bold text-center lg:text-left'>
              Web Developer
            </h2>
            <div className='flex justify-center lg:justify-start py-8'>
              <p className='w-4/5'>
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
            <button className='btn btn-dark w-fit self-center lg:self-start'>
              Get Started
            </button>
          </div>
        </header>
      </div>
    </div>
  );
}
export default Header;
