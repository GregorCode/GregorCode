import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import { getSortedPostsData } from '@lib/posts';
import Layout from '@components/Layout';
import { siteTitle } from '@components/Header';
import Date from '@components/Date';

export const CustomLink = 'p-1 rounded-md ease-in duration-200 no-underline text-black hover:bg-gray-300 dark:text-white dark:hover:bg-gray-700';

const Home = ({ allPostsData }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const { locale } = router;
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <h2 className="my-5">{t('common:Posts')}</h2>
      <section>
        <ul className="space-y-5 p-4">
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              <Link href={`/posts/${id}`} passHref>
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
