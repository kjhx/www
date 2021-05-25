import Link from 'next/link';

interface LinkProps {
  href?: string;
  to?: string;
  className?: string;
  children?: any;
}

const Page = ({ href, to, className = 'link-std link-underline', children }: LinkProps): JSX.Element => {
  if (to) {
    return (
      <Link href={to as string}>
        <a className={className}>{children}</a>
      </Link>
    );
  } else {
    return (
      <a href={href as string} className={className}>
        {children}
      </a>
    );
  }
};

export default Page;
