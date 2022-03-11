import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import { siteTitle } from '@components/Header';

const Layout = ({ children, home }) => {
  const sectionClassName = 'flex flex-col px-4 h-screen justify-between tablet:px-8';
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="grid-wrapper min-h-content">
        <div className={sectionClassName}>
          {home ? <Header home /> : <Header />}
          <main className="mb-auto">{children}</main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
