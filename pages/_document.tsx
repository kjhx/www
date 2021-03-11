import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

class Document extends NextDocument {
  render(): JSX.Element {
    return (
      <Html lang='en' className='h-full'>
        <Head />
        <body className='h-full'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;