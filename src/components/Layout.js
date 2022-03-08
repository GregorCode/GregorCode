import Head from 'next/head';
import Link from 'next/link';
import Header from '@components/Header';
import Footer from '@components/Footer';

export const siteTitle = `GregorCode`;
export const name = `() => { ${siteTitle} }`;

const Layout = ({ children, home }) => {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      {home ? <Header home /> : <Header />}
      <main>{children}</main>
      {!home && (
        <div>
          <Link href="/" passHref>
            <span>← Ir al inicio</span>
          </Link>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Layout;
