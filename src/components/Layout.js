import Head from 'next/head';
import Link from 'next/link';
import Header from '@components/Header';
import Footer from '@components/Footer';
import { siteTitle } from '@components/Header';

const Layout = ({ children, home }) => {
  const sectionClassName = 'flex flex-col px-4 tablet:px-8';
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <main class="grid-wrapper min-h-content">
        <section className={sectionClassName}>
          {home ? <Header home /> : <Header />}
          <main>{children}</main>
          {!home && (
            <div>
              <Link href="/" passHref>
                <span>← Ir al inicio</span>
              </Link>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
