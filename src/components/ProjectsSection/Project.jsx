function Project({ title, description }) {
  return (
    <div className='card bg-base-100 shadow-xl flex-row 2xl:flex-col card-project mx-2 lg:mx-0'>
      <div className='card-body'>
        <h2 className='card-title mb-5 text-2xl'>{title}</h2>
        <p>{description}</p>
      </div>

      <div className='card-actions flex flex-col gap-4 w-40 mx-8 justify-center lg:w-60 2xl:flex-row 2xl:w-full 2xl:mb-5 2xl:mx-0 2xl:justify-evenly'>
        <a
          href='/'
          className='btn btn-secondary btn-outline btn-sm w-40 lg:w-56'
        >
          Live
        </a>
        <a href='/' className='btn btn-primary btn-outline btn-sm w-40 lg:w-56'>
          Github
        </a>
      </div>
    </div>
  );
}
export default Project;
