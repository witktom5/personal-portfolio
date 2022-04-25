function AboutCard({ title, children }) {
  return (
    <div className='card bg-base-200 shadow-xl'>
      <div className='card-body px-8'>
        <h3 className='card-title mb-8 text-2xl w-fit mx-auto'>{title}</h3>
        {children}
      </div>
    </div>
  );
}
export default AboutCard;
