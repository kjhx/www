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

export async function getStaticProps(): Promise<any> {
  const res = await fetch('https://api.github.com/users/kjhx/repos');
  const data = await res.json();

  if (!data || data.message === 'Not Found') {
    return {
      props: {
        data: null,
        notFound: true
      },
      revalidate: 3
    };
  }

  return {
    props: {
      // Sort the array by last updated
      data: data.sort((a, b) => +new Date(b.updated_at) - +new Date(a.updated_at)),
      notFound: false
    },
    revalidate: 30
  };
}

export default function About({ data, notFound }: AboutProps): JSX.Element {
  return (
    <Page title='Projects'>
      <div className='max-w-xl mx-auto pt-3'>
        <div className='flex-col space-y-6'>
          <p>
            All my software projects that are currently hosted on GitHub.
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