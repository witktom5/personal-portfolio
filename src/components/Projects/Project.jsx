function Project({ title, description }) {
  return (
    <div className='card bg-base-100 shadow-lg card-project'>
      <div className='card-body flex-row xl:flex-col xl:justify-between xl:gap-4'>
        <div>
          <h3 className='card-title mb-5 text-2xl'>{title}</h3>
          <p>{description}</p>
        </div>
        <div className='flex flex-col gap-3 justify-center xl:flex-row xl:justify-end 2xl:justify-between'>
          <a href='/' className='btn btn-primary xl:w-60 xl:btn-sm 2xl:w-1/2'>
            Live
          </a>
          <a
            href='/'
            className='btn btn-dark btn-outline xl:w-60 xl:btn-sm 2xl:w-1/2'
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
}
export default Project;
