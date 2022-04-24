import SectionHeader from '../layout/SectionHeader';
import Project from './Project';
import projectsData from '../../utils/projectsData';

function Projects() {
  return (
    <>
      <section className='flex justify-center bg-base-300' id='projects'>
        <div className='w-full lg:w-4/5 px-3'>
          <SectionHeader title='Projects' />
          <div className='grid grid-cols-1 2xl:grid-cols-2 content-center gap-5 lg:gap-14'>
            {projectsData.map((project) => (
              <Project
                key={project.id}
                title={project.title}
                description={project.description}
                seeMore={project.seeMore}
                techs={project.techs}
                gitUrl={project.gitUrl}
                liveUrl={project.liveUrl}
              />
            ))}
          </div>
        </div>
      </section>
      <div className='wave wave-2'></div>
    </>
  );
}
export default Projects;
