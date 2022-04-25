function Technology({ name, icon, aboutSection }) {
  return (
    <div
      className={`flex flex-col items-center gap-2  ${
        !aboutSection && 'xl:flex-row text-primary-content'
      } xl:mr-1 2xl:flex-col 2xl:mr-0 basis-1/5 sm:basis-auto`}
    >
      <>{icon}</>
      <p className='text-xs font-bold whitespace-nowrap'>{name}</p>
    </div>
  );
}
export default Technology;
