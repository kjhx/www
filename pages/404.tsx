import Page from '@components/Page';

export default function Home(): JSX.Element {
  return (
    <Page title="Navigation Error">
      <div className="max-w-xl mx-auto">
        <article>
          <h1>404</h1>
          <p>That&apos;s an error.</p>
        </article>
      </div>
    </Page>
  );
}
