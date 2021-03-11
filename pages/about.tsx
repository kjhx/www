import Page from '@components/Page';
import Link from '@components/Link';
import Projects from '@components/Projects';
import { PinnedProjects } from 'config/pinned';
import { BookOpen, Code, GitHub, Instagram } from 'react-feather';
import Image from 'next/image';

interface SectionProps {
  title: string,
  children: any
}

const Section = ({title, children}: SectionProps): JSX.Element => {
  return (
    <div className='flex flex-col'>
      <div className='flex items-center mb-3'>
        <p className='text-dynamic-h1 font-bold'>{title}</p>
        <div className="flex-1 h-px ml-4 bg-gray-300 dark:bg-gray-700" />
      </div>
      <div className='flex flex-col space-y-3'>
        {children}
      </div>
    </div>
  );
};

interface CurrentEntryProps {
  Icon: React.ElementType
  name: string,
  startDate: string,
  description: string
}
const CurrentEntry = ({Icon, name, startDate, description}: CurrentEntryProps): JSX.Element => {
  return (
    <div className='flex space-x-3'>
      <div className='p-1'>
        <Icon size={18} strokeWidth={3} />
      </div>
      <div className='flex flex-col items-start text-dynamic-p'>
        <p className='font-semibold'>{name}<span className='text-gray-400 font-normal'> {startDate}</span></p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default function About(): JSX.Element {
  return (
    <Page title='About'>
      <div className='max-w-xl mx-auto flex flex-col space-y-12'>
        <div className='overflow-hidden w-full'>
          <Image src='/img/about/huggins.jpg' layout='responsive' width={949} height={634} className='z-0 rounded-md' draggable={false} />
        </div>
        <article>
          <p>
            My name is Kyle Huggins. I‘m a designer and developer from Houston, Texas.
          </p>
          <p>
            I love web development, design systems, and photography.
            I spend the majority of my time as a student, learning about software engineering and graphic design.
          </p>
          <p>
            If you‘d like to get in touch, see my <Link to='/open-invitation'>open invitation</Link>.
          </p>
        </article>
        <Section title='Currently'>
          <CurrentEntry
            Icon={Code}
            name='Engineering Intern at J.B. Hunt'
            startDate='June 1, 2021'
            description='Reinventing transportation through the development of innovative software solutions for a national portfolio of customers.'
          />
          <CurrentEntry
            Icon={BookOpen}
            name='Studying at Harding University'
            startDate='June 1, 2021'
            description='Pursuing a bachelor of arts in Computer Science and Graphic Design.'
          />
        </Section>
        <Section title='Projects'>
          <Projects projectsArray={PinnedProjects} />
        </Section>
        <Section title='Social'>
          <div className='flex items-center space-x-2'>
            <GitHub size={18} strokeWidth={3}/>
            <Link href='//github.com/kjhx'>@kjhx</Link>
          </div>
          <div className='flex items-center space-x-2'>
            <Instagram size={18} strokeWidth={3}/>
            <Link href='//instagram.com/hugginsio'>@hugginsio</Link>
          </div>
        </Section>
      </div>
    </Page>
  );
}