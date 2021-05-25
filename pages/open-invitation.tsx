/* eslint-disable no-irregular-whitespace */
import Page from '@components/Page';
import Link from '@components/Link';
import { Mail } from 'react-feather';

export default function Home(): JSX.Element {
  return (
    <Page title="Open Invitation">
      <div className="max-w-xl mx-auto">
        <article>
          <p>
            I love talking about technology. I also love talking to people about new ideas and perspectives. This page
            serves as an open invitation: if you want to talk to me – about anything – I would love to talk to you.
          </p>
          <p>Some of the things I like talking about:</p>
          <ul>
            <li>Open source</li>
            <li>Web technologies</li>
            <li>Design trends</li>
          </ul>
          <p>Things I‘m interested in:</p>
          <ul>
            <li>Software tooling</li>
            <li>Managing teams</li>
            <li>Accessibility in design</li>
          </ul>
          <p>Don’t feel like you have to trade me something if you only have questions. I‘m happy to talk.</p>
          <p>While I try to respond to every email I recieve, if I don’t respond, it’s because of me, not you.</p>
        </article>
        <div className="mt-12 flex items-center space-x-3">
          <Mail size={18} />
          <Link href="mailto:kyle@huggins.io?subject=Open Invitation">kyle@huggins.io</Link>
        </div>
      </div>
    </Page>
  );
}
