import { Entry } from '@interfaces/currententry';
import { BookOpen, Code } from 'react-feather';

// Don't forget to subtract one from the target month.

export const CurrentEntries: Array<Entry> = [
  {
    Icon: Code,
    name: 'Engineering Intern at J.B. Hunt',
    startDate: new Date(2020, 5, 1) ,
    description: 'Reinventing transportation through the development of innovative software solutions for a national portfolio of customers.'
  },
  {
    Icon: BookOpen,
    name: 'Studied at Harding University',
    startDate: new Date(2017, 7, 15),
    endDate: new Date(2021, 4, 8),
    description: 'Graduated with a Bachelor of Arts in Computer Science and a minor Graphic Design.'
  }
];