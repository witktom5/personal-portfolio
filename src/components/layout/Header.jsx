import photo from '../../assets/fbzdj.jpg';
import { setTheme } from '../../utils/theme';

function Header() {
  return (
    <div className='flex justify-center bg-base-100 mt-navbar'>
      <div className='hero pt-10 w-full lg:w-4/5  '>
        <header className='hero-content flex-col lg:flex-row lg:gap-20'>
          <img
            src={photo}
            alt='photography of me'
            className='max-w-sm rounded-full shadow-2xl'
          />
          <div>
            <h1 className='text-5xl font-bold mb-4 text-center lg:text-left'>
              Tomasz Witkowski
            </h1>
            <h2 className='text-4xl font-bold text-center lg:text-left'>
              Web Developer
            </h2>
            <p className='py-6'>
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className='btn btn-dark'>Get Started</button>
          </div>
        </header>
      </div>
    </div>
  );
}
export default Header;
