import Head from 'next/head';
import Link from 'next/link';
//import { createRef, useEffect } from 'react';
import Date from '@components/Date';
import { getAllPostIds, getPostData } from '@lib/posts';
import Layout from '@components/Layout';
import WordCounter from '@components/WordCounter';
import Comments from '@components/Comments';
import { CustomLink } from '@pages/index';

const Post = ({ postData }) => {
  const ReadingTime = WordCounter(postData.contentHtml);
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article className="mt-6">
        <h1>{postData.title}</h1>

        <div className="flex items-center justify-between py-4 px-10 text-gray-500">
          <div>Por {postData.author}</div>
          <div>
            <Date dateString={postData.date} />
          </div>
          <div>Lectura de {ReadingTime} min</div>
        </div>

        <div className="leading-8" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />

        <div className="my-8">
          <h2>Comentarios</h2>
          <Comments />
        </div>

        <Link href="/" passHref>
          <a className={CustomLink}>← Ir al inicio</a>
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
