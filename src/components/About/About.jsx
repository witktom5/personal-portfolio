import SectionHeader from '../layout/SectionHeader';
import Technology from '../Projects/Technology';
import AboutCard from './AboutCard';
import { myTechs } from '../../utils/projectsData';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function About() {
  return (
    <>
      <section
        className='flex justify-center bg-info pb-14 relative bg-about'
        id='about'
      >
        <div className='w-full lg:w-full 2xl:w-5/6 px-3'>
          <SectionHeader title='About' alternateColor />
          <div className='grid px-1 sm:px-5 grid-cols-1 lg:grid-cols-2 justify-evenly gap-10'>
            <AboutCard title='Who I Am'>
              <p>
                Self-taught Web Developer based in Poland. Currently looking for
                opportunities to start a professional career in software
                development. I really enjoy creating various things. I have been
                interested in computer technologies since the earliest years of
                my life. In late 2021 I finally decided to learn how to code.
              </p>
              <p>
                I really like the feeling when I'm doing something that's
                challenging to me and I figure it out. Coding quickly became my
                passion and I'm improving every day as I learn new technologies
                and build my own projects. I pay great attention to
                responsiveness and accessibility. And most importantly, I pay
                attention to the details.
              </p>
              <div className='flex  gap-5 mt-3 -mb-2'>
                <a
                  href='https://www.linkedin.com/in/tomasz-witkowski-8a0743238/'
                  target='_blank'
                  rel='noreferrer'
                  aria-label='linkedin'
                  className='btn btn-sm gap-2 normal-case w-3/12'
                >
                  <FaLinkedin className='w-6 h-6' />
                  LinkedIn
                </a>
                <a
                  href='https://github.com/witktom5/'
                  target='_blank'
                  rel='noreferrer'
                  aria-label='github'
                  className='btn btn-sm w-3/12  gap-2 normal-case'
                >
                  <FaGithub className='w-6 h-6' />
                  GitHub
                </a>
              </div>
            </AboutCard>
            <AboutCard title='Technologies I use'>
              <div className='grid grid-cols-3 sm:grid-cols-4  md:grid-cols-6 lg:grid-cols-3 xl:grid-cols-4 gap-5 my-auto'>
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
