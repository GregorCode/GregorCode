import Document, { Html, Head, Main, NextScript } from 'next/document';

export const Autor = `Gregorys González`;

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="keywords" content="javascript, nextjs, reactjs, markdown, sass, docker" />
          <meta name="author" content={Autor} />
          <meta name="robots" content="index,follow" />
          <link rel="icon" href="/logo.ico" />
          {/* <link rel="manifest" href="/manifest.json" /> */}
        </Head>
        <body className="bg-gray-100 dark:bg-gray-800">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
