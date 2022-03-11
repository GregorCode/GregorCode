import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Layout, { siteTitle } from '@components/Layout';
import { getSortedPostsData } from '@lib/posts';
import Date from '@components/Date';

export const Home = ({ allPostsData }) => {
  const router = useRouter();
  const { locale } = router;
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="mt-6">
        <h2>Posts</h2>
        <ul className="flex flex-col space-y-5 p-6">
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              <Link href={`/posts/${id}`} passHref>
                <a className="no-underline hover:underline dark">{title}</a>
              </Link>
              <br />
              <small>
                <Date dateString={date} locale={locale} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
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
