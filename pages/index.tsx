import Page from '@components/Page';
import Link from '@components/Link';
import Emoji from '@components/Emoji';
import Projects from '@components/Projects';
import { PinnedProjects } from 'config/pinned';

export default function Home(): JSX.Element {
  return (
    <Page headerOptions={{title: 'Welcome', snackbar: false}}>
      <div className='max-w-xl mx-auto'>
        <article>
          <h1>Hey <Emoji symbol='👋🏻' label='wave' /> I&apos;m Kyle Huggins.</h1>
          <p>
            I&apos;m a designer & developer from Houston, Texas. I love open source, design systems, photography, and music.
          </p>
        </article>
        <div className='flex space-x-6 mt-6'>
          <Link to='/about' className='link-nostyle'>
            <div className='btn btn-accent'>
              More info
            </div>
          </Link>
          <Link to='/open-invitation' className='link-nostyle'>
            <div className='btn btn-gray'>
              An open invitation
            </div>
          </Link>
        </div>
        <div className='flex flex-col mt-12'>
          <div className='flex items-center mb-3'>
            <p className='text-dynamic-h1 font-bold'>Select Projects</p>
            <div className="flex-1 h-px ml-4 bg-gray-200 dark:bg-gray-700" />
          </div>
          <Projects projectsArray={PinnedProjects}/>
        </div>
      </div>
    </Page>
  );
}