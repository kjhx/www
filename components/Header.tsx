import Link from '@components/Link';
import { useRouter } from 'next/dist/client/router';

export interface HeaderOptions {
  title: string,
  snackbar: boolean
}

const Header = ({ title = 'Welcome', snackbar = true }: Partial<HeaderOptions>): JSX.Element => {
  const router = useRouter();
  const currentPath = router.pathname.substring(1).split('/');

  return (
    <header className='w-full px-3 pt-3 mb-3 font-semibold items-center sticky top-0 z-50 bg-blurred'>
      <div className='flex flex-col space-y-3 justify-between max-w-xl mx-auto'>
        <div className='p-3 bg-black text-white dark:bg-white dark:text-black text-dynamic-h0 font-black tracking-tighter'>
          <p>{title}</p>
        </div>
        {snackbar && (
          <div className='flex space-x-1 bg-black text-white dark:bg-white dark:text-black text-dynamic-small p-3'>
            <Link to='/' className='hover:text-accent-400 dark:hover:text-accent-500'>Index</Link>
            <p>/</p>
            {currentPath.map(slug => {
              const divider = currentPath.indexOf(slug) === currentPath.length ? <p>/</p> : <div />;
              return (
                // eslint-disable-next-line react/jsx-key
                <div className='flex space-x-1'>
                  <Link to={slug} className='hover:text-accent-400 dark:hover:text-accent-500 capitalize'>{slug.replace('-', ' ')}</Link>
                  {divider}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;