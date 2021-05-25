import { Project } from '@interfaces/github';

export const PinnedProjects: Array<Partial<Project>> = [
  {
    name: 'agile',
    description: 'Minimalist time tracking for agile teams.',
    html_url: 'https://github.com/kjhx/agile',
    homepage: 'https://agile.huggins.io',
  },
  {
    name: 'klab-cli',
    description: 'The photo processing assistant.',
    html_url: 'https://github.com/kjhx/klab-cli',
    homepage: 'https://github.com/kjhx/klab-cli',
  },
  {
    name: 'vscode-lifeline',
    description: 'Display a clock and current battery state in the status bar.',
    html_url: 'https://github.com/kjhx/vscode-lifeline',
    homepage: 'https://marketplace.visualstudio.com/items?itemName=kjhx.vscode-lifeline',
  },
  {
    name: 'www',
    description: 'The code behind huggins.io',
    html_url: 'https://github.com/kjhx/www',
    homepage: 'https://github.com/kjhx/www',
  },
];
