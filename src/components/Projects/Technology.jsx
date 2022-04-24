function Technology({ name, icon }) {
  return (
    <div className='flex flex-col items-center gap-2 text-primary-content w-15 sm:w-auto xl:flex-row xl:mr-1 2xl:flex-col 2xl:mr-0'>
      <>{icon}</>
      <p className='text-xs font-bold'>{name}</p>
    </div>
  );
}
export default Technology;
