import Link from '@components/Link';

import { Project } from '@interfaces/github';

interface ProjectsProps {
  projectsArray: Array<Partial<Project>>
}

const Projects = ({ projectsArray }: ProjectsProps): JSX.Element => {
  return (
    <div className='flex flex-col space-y-6'>
      {projectsArray.map(project => {
        return (
          <div className='flex flex-col font-semibold' key={project.name}>
            <div className='flex space-x-1 items-start'>
              <p className='font-normal'>/</p>
              <div className='flex flex-col space-y-1'>
                <div className='flex items-center space-x-3'>
                  <Link href={project.homepage === null || project.homepage === '' ? project.html_url : project.homepage} className='link-std'>
                    <p>{project.name}</p>
                  </Link>
                  {project.archived && (
                    <div className='bg-black text-white dark:bg-white dark:text-black px-2 text-dynamic-small2 font-normal'>
                      <p title='This project is no longer being maintained.' className='cursor-help'>archived</p>
                    </div>
                  )}
                  {project.fork && (
                    <div className='bg-black text-white dark:bg-white dark:text-black px-2 text-dynamic-small2 font-normal'>
                      <p title='This project is a fork of another repository.' className='cursor-help'>fork</p>
                    </div>
                  )}
                  {project.stargazers_count > 0 && (
                    <div className='bg-black text-white dark:bg-white dark:text-black px-2 text-dynamic-small2 font-normal'>
                      <p title='This project is a fork of another repository.' className='cursor-help'>{project.stargazers_count} {project.stargazers_count === 1 ? 'star' : 'stars' }</p>
                    </div>
                  )}
                </div>
                <div className='text-dynamic-small font-normal text-gray-400'>
                  {project.description}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;