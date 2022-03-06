//import Head from 'next/head';
import { useState } from 'react';
//import Layout, { siteTitle } from '@components/layout';
import { getSortedPostsData } from '@lib/posts';
import Link from 'next/link';
//import Date from '@components/date';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';

export const Home = ({ allPostsData }) => {
  const { theme, setTheme } = useTheme();
  const router = useRouter();

  return (
    // <Layout home>
    //   <Head>
    //     <title>{siteTitle}</title>
    //   </Head>
    <section>
      <ul>
        {allPostsData.map(({ id, date, title }) => (
          <li key={id}>
            <Link href={`/posts/${id}`} passHref>
              <a>{title}</a>
            </Link>
            <br />
            {/* <small>
                  <Date dateString={date} locale={locale} />
                </small> */}
          </li>
        ))}
      </ul>
      <ul>
        {router.locales.map((locale) => (
          <li key={locale}>
            <Link href={router.asPath} locale={locale}>
              <a>{locale}</a>
            </Link>
          </li>
        ))}
      </ul>
      <div>
        <h1 className="text-3xl text-pink-500" css={{ backgroundColor: 'teal' }}>
          Welcome to Your App
        </h1>
        <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>Cambiar tema</button>
      </div>
    </section>

    // </Layout>
  );
};

export default Home;

export const getStaticProps = async ({ locale }) => {
  const allPostsData = getSortedPostsData(locale);
  return {
    props: {
      allPostsData,
    },
  };
};
