import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import { getSortedPostsData } from '@lib/posts';
import Layout from '@components/Layout';
import { siteTitle } from '@components/Header';
import Date from '@components/Date';

export const CustomLink = 'p-1 rounded-md ease-in duration-200 no-underline text-black hover:bg-gray-300 dark:text-white dark:hover:bg-gray-700';

const Home = ({ allPostsData }) => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const { locale } = router;

  const [posts, setPosts] = useState([]);
  const [busqueda, setBusqueda] = useState('');

  const handleChange = (event) => {
    setBusqueda(event.target.value);
  };

  useEffect(() => {
    if (allPostsData) {
      if (busqueda) {
        const resultadoBusqueda = allPostsData.filter((post) => {
          return post.title.toString().toLowerCase().includes(busqueda.toString().toLowerCase());
        });
        setPosts(resultadoBusqueda);
      } else {
        setPosts(allPostsData);
      }
    }
  }, [allPostsData, busqueda]);

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <div className="mt-10 mb-5 flex items-center justify-between">
        <h2>{t('Posts')}</h2>
        <input className="bg-transparent focus:outline-none border-b border-gray-500" value={busqueda} placeholder={t('Placeholder')} onChange={handleChange} />
      </div>

      <section>
        <ul className="space-y-5 p-4">
          {posts &&
            posts.map(({ id, date, title }) => (
              <li key={id}>
                <Link href={`/posts/${id}`} locale={locale}>
                  <a className={CustomLink}>{title}</a>
                </Link>
                <br />
                <small className="pl-2 text-gray-500">
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
