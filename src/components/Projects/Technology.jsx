function Technology({ name, icon }) {
  return (
    <div className='flex flex-col items-center gap-2 text-primary-content xl:flex-row xl:mr-1 2xl:flex-col 2xl:mr-0 basis-1/5 sm:basis-auto'>
      <>{icon}</>
      <p className='text-xs font-bold whitespace-nowrap'>{name}</p>
    </div>
  );
}
export default Technology;
