import Technology from './Technology';
import Modal from '../layout/Modal';

function Project({ title, description, seeMore, techs, liveUrl, gitUrl }) {
  //this is content of the modal thats visible on small resolutions
  //its here so i can just map once and reuse outside modal on larger screen
  const moreInfo = seeMore.map((paragraph, id) => (
    <p key={`s${id}`}>{paragraph}</p>
  ));

  return (
    <div className='card bg-base-100 shadow-lg card-project max-w-3xl lg:max-w-full mx-auto flex xl:flex-row'>
      <div className='card-body flex-col sm:flex-row xl:flex-col xl:justify-between gap-8 xl:gap-4'>
        <div className='h-full flex flex-col'>
          <h3 className='card-title text-xl font-bold mb-6'>{title}</h3>
          <div className='my-auto flex flex-col gap-3'>
            {description.map((paragraph, id) => (
              <p key={`p${id}`}>{paragraph}</p>
            ))}
            <div className='hidden lg:block'>{moreInfo}</div>
            <Modal content={moreInfo} title={title} hide={true} />
          </div>
        </div>
        <div className='flex flex-col gap-3 justify-center xl:flex-row xl:justify-end 2xl:justify-between'>
          <a
            target='_blank'
            rel='noreferrer'
            href={liveUrl}
            className='btn btn-accent text-primary-content xl:w-60 xl:btn-sm 2xl:w-1/2'
          >
            Live
          </a>
          <a
            target='_blank'
            rel='noreferrer'
            href={gitUrl}
            className='btn btn-dark btn-outline xl:w-60 xl:btn-sm 2xl:w-1/2'
          >
            Github
          </a>
        </div>
      </div>
      <div className='bg-accent xl:order-first'>
        <div className='flex flex-wrap p-2 gap-6 justify-evenly xl:flex-col h-full'>
          {techs.map((tech, id) => (
            <Technology name={tech.name} icon={tech.icon} key={id} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Project;
