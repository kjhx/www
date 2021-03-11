import Link from './Link';
import { ArrowUpRight } from 'react-feather';

const Footer = (): JSX.Element => {
  return (
    <div className='w-full px-3 pt-12 pb-3 text-gray-400 dark:text-gray-600 text-dynamic-small'>
      <div className='max-w-xl mx-auto flex justify-between flex-wrap'>
        <p>&copy; 2021</p>
        <Link href='//github.com/kjhx/agile' className='link-std hidden'>
          <div className='flex items-center space-x-1'>
            <p>View on GitHub</p>
            <ArrowUpRight size={18} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Footer;