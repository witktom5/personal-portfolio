function Footer() {
  return (
    <footer className='mt-auto p-10 bg-base-200 flex justify-center'>
      <div className='w-full lg:w-4/5 text-base-content footer justify-between lg:justify-around'>
        <div>
          <span className='footer-title'>TW Webdev Portfolio</span>
          <a className='link link-hover' href='#header'>
            Back to top
          </a>
          <a className='link link-hover' href='#projects'>
            Projects
          </a>
          <a className='link link-hover' href='#about'>
            About
          </a>
          <a className='link link-hover' href='#contact'>
            Contact
          </a>
        </div>
        <div>
          <span className='footer-title'>Social</span>
          <div className='grid grid-flow-col gap-4'>
            <a href='/' aria-label='facebook'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                className='fill-current'
              >
                <path d='M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z'></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
