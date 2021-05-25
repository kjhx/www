import Page from '@components/Page';
import Link from '@components/Link';
import Projects from '@components/Projects';
import { PinnedProjects } from 'config/pinned';
import { GitHub, Instagram, ArrowRight } from 'react-feather';
import Image from 'next/image';
import { CurrentEntries } from 'config/currently';

interface SectionProps {
  title: string;
  children: any;
}

const Section = ({ title, children }: SectionProps): JSX.Element => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center mb-3">
        <p className="text-dynamic-h1 font-bold">{title}</p>
        <div className="flex-1 h-px ml-4 bg-gray-300 dark:bg-gray-700" />
      </div>
      <div className="flex flex-col space-y-3">{children}</div>
    </div>
  );
};

// https://stackoverflow.com/a/17727953
function daysBetween(StartDate: Date, EndDate: Date) {
  // The number of milliseconds in all UTC days (no DST)
  const oneDay = 1000 * 60 * 60 * 24;

  // A day in UTC always lasts 24 hours (unlike in other time formats)
  const start = Date.UTC(EndDate.getFullYear(), EndDate.getMonth(), EndDate.getDate());
  const end = Date.UTC(StartDate.getFullYear(), StartDate.getMonth(), StartDate.getDate());

  // so it's safe to divide by 24 hours
  return (start - end) / oneDay;
}

interface CurrentEntryProps {
  Icon: React.ElementType;
  name: string;
  startDate: Date;
  endDate?: Date;
  description: string;
}

const CurrentEntry = ({ Icon, name, startDate, endDate, description }: CurrentEntryProps): JSX.Element => {
  const ended = endDate ? true : false;
  const duration = (ended ? daysBetween(startDate, endDate) : daysBetween(startDate, new Date())).toLocaleString();
  const timeField = ended ? `for ${duration} days` : `since ${duration} days ago`;
  return (
    <div className="flex space-x-3">
      <div className="p-1">
        <Icon size={18} strokeWidth={3} />
      </div>
      <div className="flex flex-col items-start text-dynamic-p">
        <div className="flex space-x-0 sm:space-x-2 flex-wrap sm:flex-nowrap">
          <span className="font-semibold w-full sm:w-auto">{name}</span>
          <span className="text-gray-400 font-normal"> {timeField}</span>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default function About(): JSX.Element {
  return (
    <Page title="About">
      <div className="max-w-xl mx-auto flex flex-col space-y-12">
        <div className="overflow-hidden w-full">
          <Image
            src="/img/about/huggins.jpg"
            layout="responsive"
            width={949}
            height={634}
            className="z-0 rounded-md"
            draggable={false}
          />
        </div>
        <article>
          <p>My name is Kyle Huggins. I‘m a designer and developer from Houston, Texas.</p>
          <p>
            I love web development, design systems, and photography. I spend the majority of my time as a student,
            learning about software engineering and graphic design.
          </p>
          <p>
            If you‘d like to get in touch, see my <Link to="/open-invitation">open invitation</Link>.
          </p>
        </article>
        <Section title="Currently">
          {CurrentEntries.map((entry) => {
            return (
              <div key={entry.name}>
                <CurrentEntry
                  Icon={entry.Icon}
                  name={entry.name}
                  startDate={entry.startDate}
                  endDate={entry?.endDate}
                  description={entry.description}
                />
              </div>
            );
          })}
        </Section>
        <Section title="Select Projects">
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
        </Section>
        <Section title="Social">
          <div className="flex items-center space-x-2">
            <GitHub size={18} strokeWidth={3} />
            <Link href="//github.com/kjhx">@kjhx</Link>
          </div>
          <div className="flex items-center space-x-2">
            <Instagram size={18} strokeWidth={3} />
            <Link href="//instagram.com/hugginsio">@hugginsio</Link>
          </div>
        </Section>
      </div>
    </Page>
  );
}
