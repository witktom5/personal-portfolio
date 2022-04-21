function Project({ title, description }) {
  return (
    <div className='card bg-base-100 shadow-xl'>
      <div className='card-body flex-row 2xl:flex-col 2xl:justify-between gap-5'>
        <div>
          <h2 className='card-title mb-5 text-2xl'>{title}</h2>
          <p>{description}</p>
        </div>
        <div className='flex flex-col gap-6 justify-center 2xl:flex-row 2xl:flex-wrap'>
          <a href='/' className='btn btn-secondary btn-outline'>
            Live
          </a>
          <a href='/' className='btn btn-primary btn-outline'>
            Github
          </a>
        </div>
      </div>
    </div>
  );
}
export default Project;
