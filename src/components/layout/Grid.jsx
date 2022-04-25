import NavbarContent from './NavbarContent';
import { setTheme } from '../../utils/theme';
import { FaRegLightbulb } from 'react-icons/fa';

function Grid({ children }) {
  // dark/light theme toggler handle
  const onClick = () => {
    if (document.documentElement.getAttribute('data-theme') === 'night') {
      setTheme('light');
    } else {
      setTheme('night');
    }
  };

  return (
    //drawer comes from DaisyUI, lets me easily implement a sidebar for responsive
    <div className='drawer drawer-end'>
      <input
        id='drawer-page'
        type='checkbox'
        className='drawer-toggle hidden'
        aria-hidden='true'
      />
      <div className='drawer-content flex flex-col'>
        <div className='bg-base-200 flex justify-center sticky top-0 w-full z-50 bg-opacity-80'>
          <div className='navbar w-full lg:w-3/5'>
            <div className='flex-1'></div>
            <div className='flex-none hidden md:block'>
              <ul className='menu menu-horizontal items-center'>
                <NavbarContent />
                <button
                  aria-label='toggle dark mode'
                  className='btn btn-square btn-ghost bg-opacity-80 bg-transparent btn-sm'
                  onClick={onClick}
                >
                  <FaRegLightbulb className='h-4 w-4' />
                </button>
              </ul>
            </div>

            <div className='flex-none md:hidden'>
              <label
                htmlFor='drawer-page'
                className='btn btn-square btn-ghost bg-opacity-60 mr-3'
              >
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
        <ul className='menu pt-5 w-60 overflow-y-auto bg-base-100'>
          <NavbarContent />
          <button
            aria-label='toggle dark mode'
            className='btn w-5/6 mx-auto bg-opacity-80 mt-auto mb-3'
            onClick={onClick}
          >
            <FaRegLightbulb className='h-4 w-4' />
          </button>
        </ul>
      </div>
    </div>
  );
}
export default Grid;
