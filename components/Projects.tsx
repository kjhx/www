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
                <Link href={project.homepage ?? project.html_url} className='link-std'>
                  <div className='flex space-x-1 items-center text-dynamic-p'>
                    <p>{project.name}</p>
                    {/* <ArrowUpRight size={16} strokeWidth={4} /> */}
                  </div>
                </Link>
                <div className='text-dynamic-small font-normal text-gray-400'>
                  <p>{project.description}</p>
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