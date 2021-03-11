import Footer from './Footer';
import Head from './Head';
import Header, { HeaderOptions } from './Header';

interface PageProps {
  title?: string,
  desc?: string,
  ogImage?: string,
  header?: boolean,
  headerOptions?: Partial<HeaderOptions>,
  footer?: boolean,
  children?: any
}

const Page = ({ title, desc, ogImage, header = true, headerOptions = { title: title }, footer = true, children }: PageProps): JSX.Element => {
  return (
    <>
      <Head
        title={`${title ? `${title} – ` : ''}Kyle Huggins`}
        desc={desc}
        ogImage={ogImage}
      />
      <div className='flex flex-col min-h-full border-t-2 border-black dark:border-white'>
        {header && <Header title={headerOptions?.title} snackbar={headerOptions?.snackbar} />}
        <main className='flex-grow text-dynamic-p w-full min-h-full px-3'>
          {children}
        </main>
        {footer && <Footer />}
      </div>
    </>
  );
};

export default Page;