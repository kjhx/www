import { Entry } from '@interfaces/currententry';
import { BookOpen, Code, Command } from 'react-feather';

// Don't forget to subtract one from the target month.

export const CurrentEntries: Array<Entry> = [
  {
    Icon: Command,
    name: 'Software Engineer with J.B. Hunt',
    startDate: new Date(2021, 5, 12),
    description: 'Inventing the future of transportation.',
  },
  {
    Icon: Code,
    name: 'Interned with J.B. Hunt',
    startDate: new Date(2020, 5, 1),
    endDate: new Date(2021, 5, 12),
    description: 'Upgraded and maintained a core software product implemented in Angular, reducing technical debt and building new features to improve DX.',
  },
  {
    Icon: BookOpen,
    name: 'Studied at Harding University',
    startDate: new Date(2017, 7, 15),
    endDate: new Date(2021, 4, 8),
    description: 'Graduated with a Bachelor of Arts in Computer Science and a minor Graphic Design.',
  },
];
