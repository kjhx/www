import Page from '@components/Page';
import Link from '@components/Link';
import Emoji from '@components/Emoji';
import Projects from '@components/Projects';
import { PinnedProjects } from 'config/pinned';
import { ArrowRight } from 'react-feather';

export default function Home(): JSX.Element {
  return (
    <Page headerOptions={{ title: 'Welcome', snackbar: false }}>
      <div className="max-w-xl mx-auto mt-3">
        <article>
          <h1>
            Hey <Emoji symbol="👋🏻" label="wave" /> I&apos;m Kyle Huggins.
          </h1>
          <p>
            I‘m a designer and developer living in Northwest Arkansas. I love web development, design systems, and photography.
          </p>
        </article>
        <div className="flex space-x-6 mt-6">
          <Link to="/about" className="link-nostyle">
            <div className="btn btn-accent">More about me</div>
          </Link>
          <Link to="/open-invitation" className="link-nostyle">
            <div className="btn btn-gray">An open invitation</div>
          </Link>
        </div>
        <div className="flex flex-col mt-12">
          <div className="flex items-center mb-3">
            <p className="text-dynamic-h1 font-bold">Select Projects</p>
            <div className="flex-1 h-px ml-4 bg-gray-200 dark:bg-gray-700" />
          </div>
          <div className="flex flex-col space-y-6">
            <Projects projectsArray={PinnedProjects} />
            <Link
              to="/projects"
              className="text-accent-500 flex items-center space-x-1 text-dynamic-small font-semibold pl-3"
            >
              <p>See all projects</p>
              <ArrowRight size={16} strokeWidth={3} />
            </Link>
          </div>
        </div>
      </div>
    </Page>
  );
}
