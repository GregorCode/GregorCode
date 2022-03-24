import Head from 'next/head';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { getAllPostIds, getPostData } from '@lib/posts';
import Date from '@components/Date';
import Layout from '@components/Layout';
import WordCounter from '@components/WordCounter';
import Comments from '@components/Comments';
import { CustomLink } from '@pages/index';

const Post = ({ postData }) => {
  const { t } = useTranslation('posts');
  const ReadingTime = WordCounter(postData.contentHtml);
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
        {/* <meta property="og:title" content="FTP con Docker-compose" /> */}
      </Head>
      <article className="mt-6">
        <div className="sm:text-base md:text-2xl">{postData.title}</div>

        <div className="flex items-center justify-between py-4 px-10 text-gray-500 sm:text-xs md:text-base">
          <div>
            {t('Por')} {postData.author}
          </div>
          <div>
            <Date dateString={postData.date} />
          </div>
          <div>{t('Lectura', { minutos: ReadingTime })}</div>
        </div>

        <div className="leading-8 sm:text-xs md:text-base" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />

        <div className="my-8">
          <div className="sm:text-base md:text-2xl">{t('Comentarios')}</div>
          <Comments />
        </div>

        <Link href="/" passHref>
          <a className={CustomLink}>← {t('IrAlInicio')}</a>
        </Link>
      </article>
    </Layout>
  );
};

export default Post;

export async function getStaticPaths({ locales }) {
  const paths = getAllPostIds(locales);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params, locale }) {
  const postData = await getPostData(params.id, locale);
  return {
    props: {
      postData,
    },
  };
}
