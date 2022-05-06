function NavbarContent() {
  return (
    <ul className='nav-menu'>
      <li>
        <a href='#projects' className='btn btn-ghost rounded-lg'>
          Projects
        </a>
      </li>
      <li>
        <a href='#about' className='btn btn-ghost rounded-lg'>
          About
        </a>
      </li>
      <li>
        <a href='#contact' className='btn btn-ghost rounded-lg'>
          Contact
        </a>
      </li>
      <li>
        <a
          href='/resume/tomasz-witkowski-resume.pdf'
          target='_blank'
          className='btn btn-ghost rounded-lg'
        >
          Get Resume
        </a>
      </li>
    </ul>
  );
}
export default NavbarContent;
