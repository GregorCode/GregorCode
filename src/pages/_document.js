import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="description" content="Aprende como construir un blog personal con Next.js, React.js, Markdown y Sass" />
          <meta name="keywords" content="javascript, nextjs, reactjs, markdown, sass, docker" />
          <meta name="author" content="Gregorys González" />
          {/* <meta name="copyright" content="Propietario del copyright" /> */}

          <link rel="icon" href="/logo.ico" />
          {/* <link rel="manifest" href="/manifest.json" /> */}
        </Head>
        <body className="dark:bg-gray-800">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
