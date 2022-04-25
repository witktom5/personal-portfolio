import SectionHeader from '../layout/SectionHeader';
import Technology from '../Projects/Technology';
import AboutCard from './AboutCard';
import { myTechs } from '../../utils/projectsData';

function About() {
  return (
    <>
      <section
        className='flex justify-center bg-info pb-14 relative bg-about'
        id='about'
      >
        <div className='w-full lg:w-4/5 px-3'>
          <SectionHeader title='About' alternateColor />
          <div className='flex flex-col lg:flex-row justify-evenly gap-5'>
            <AboutCard title='Who I am'>
              <p>Hey</p>
            </AboutCard>
            <AboutCard title='Technologies I use'>
              <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-5'>
                {myTechs.map((tech, id) => (
                  <Technology
                    key={`tech${id}`}
                    name={tech.name}
                    icon={tech.icon}
                    aboutSection
                  />
                ))}
              </div>
            </AboutCard>
          </div>
        </div>
      </section>
      <div className='wave wave-3'></div>
    </>
  );
}
export default About;
