import NextHead from 'next/head';

interface HeadProps {
  title: string,
  desc?: string,
  ogImage?: string,
  children?: any
}

const defaultDesc = 'Minimalist time tracking for agile teams.';
const defaultOgImage = '/og.png';

const Head = ({ title, desc = defaultDesc, ogImage = defaultOgImage, children }: HeadProps): JSX.Element => {
  return (
    <NextHead>
      <meta charSet='utf-8' />
      <meta httpEquiv='Content-Language' content='en' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />

      <title>{title}</title>
      <meta name='og:title' content={title} />
      <meta name='author' content='Kyle Huggins' />
      <link type="text/plain" rel="author" href="/humans.txt" />
      <meta name='description' content={desc} />
      <meta name='og:description' content={desc} />
      <meta name='og:image' content={ogImage} />
      <meta name='twitter:image' content={ogImage} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@_kjhuggins' />

      <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
      <link rel="manifest" href="/icons/site.webmanifest" />
      <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#ffffff" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />

      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&family=Sacramento&display=swap" rel="stylesheet" />

      {children}
    </NextHead>
  );
};

export default Head;