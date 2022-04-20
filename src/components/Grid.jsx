import NavbarContent from './layout/NavbarContent';
import { setTheme } from '../utils/theme';
import { FaRegLightbulb } from 'react-icons/fa';

function Grid({ children }) {
  const onClick = () => {
    if (document.documentElement.getAttribute('data-theme') === 'night') {
      setTheme('light');
    } else {
      setTheme('night');
    }
  };

  return (
    <div className='drawer drawer-end'>
      <input id='drawer-page' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content flex flex-col'>
        <div className='bg-base-300 flex justify-center fixed right-4 w-screen'>
          <div className='navbar w-full lg:w-3/5'>
            <div className='flex-1 px-2 mx-2'>Navbar Title</div>
            <div className='flex-none hidden md:block'>
              <ul className='menu menu-horizontal'>
                <NavbarContent />
              </ul>
            </div>
            <button
              aria-label='toggle dark mode'
              className='btn btn-sm btn-outline mx-3 p-0 w-8'
              onClick={onClick}
            >
              <FaRegLightbulb className='h-4 w-4' />
            </button>
            <div className='flex-none md:hidden'>
              <label htmlFor='drawer-page' className='btn btn-square btn-ghost'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  className='inline-block w-10 h-10 stroke-current'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h16M4 18h16'
                  ></path>
                </svg>
              </label>
            </div>
          </div>
        </div>
        {children}
      </div>
      <div className='drawer-side'>
        <label htmlFor='drawer-page' className='drawer-overlay'></label>
        <ul className='menu pt-5 w-80 overflow-y-auto bg-base-100'>
          <NavbarContent />
        </ul>
      </div>
    </div>
  );
}
export default Grid;
