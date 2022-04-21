import projectsData from '../../utils/projectsData';
import Project from './Project';

function ProjectsSection() {
  return (
    <section className='flex justify-center bg-base-300 pb-14' id='projects'>
      <div className='w-full lg:w-4/5'>
        <header>
          <h2 className='text-center text-4xl font-bold pb-14'>Projects</h2>
        </header>
        <div className='grid grid-cols-1 2xl:grid-cols-2 content-center gap-5 lg:gap-14'>
          {projectsData.map((project) => (
            <Project
              key={project.id}
              title={project.title}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
export default ProjectsSection;
