import Callout from '@components/Callout';
import Page from '@components/Page';
import Link from '@components/Link';
import Projects from '@components/Projects';
import { Project } from '@interfaces/github';
import { AlertCircle } from 'react-feather';

interface AboutProps {
  data: Array<Project>,
  notFound: boolean
}

export async function getServerSideProps(): Promise<any> {
  const res = await fetch('https://api.github.com/users/kjhx/repos');
  const data = await res.json();

  if (!data || data.message === 'Not Found') {
    return {
      props: {
        data: null,
        notFound: true
      }
    };
  }

  return {
    props: {
      // Sort the array by last updated
      data: data.sort((a, b) => +new Date(b.updated_at) - +new Date(a.updated_at)),
      notFound: false
    }
  };
}

export default function About({ data, notFound }: AboutProps): JSX.Element {
  return (
    <Page title='Projects'>
      <div className='max-w-xl mx-auto pt-3'>
        <div className='flex-col space-y-6'>
          <p>
            Software projects I‘ve built to learn, have fun, or automate workflows.
          </p>
          {notFound && (
            <Callout Icon={AlertCircle}>
              <p>
                There was an issue connecting to the GitHub User API, and project data could not be fetched.
                You can view all my projects <Link href='//github.com/kjhx'>on my profile</Link>.
              </p>
            </Callout>
          )}
          {!notFound && (
            <Projects projectsArray={data} />
          )}
        </div>
      </div>
    </Page>
  );
}