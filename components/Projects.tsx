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
          // eslint-disable-next-line react/jsx-key
          <div className='flex flex-col font-semibold'>
            <div className='flex space-x-1 items-start'>
              <p className='font-normal'>/</p>
              <div className='flex flex-col space-y-1'>
                <div className='flex items-center space-x-3'>
                  <Link href={project.homepage === '' || project.homepage === null ? project.html_url : project.homepage} className='link-std'>
                    <p>{project.name}</p>
                  </Link>
                  {project.archived && (
                    <div className='bg-white text-black px-2 text-dynamic-small2 font-normal'>
                      <p title='This project is no longer being maintained.' className='cursor-help'>archived</p>
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