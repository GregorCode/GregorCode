import Head from 'next/head';
import { createRef, useEffect } from 'react';
import Date from '@components/Date';
import { getAllPostIds, getPostData } from '@lib/posts';
import Layout from '@components/Layout';
import WordCounter from '@components/WordCounter';
import Comment from '@components/Comment';
import PruebaComment from '@components/PruebaComment';

const Post = ({ postData }) => {
  const ReadingTime = WordCounter(postData.contentHtml);

  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1>{postData.title}</h1>
        <div>
          <div>Por {postData.author}</div>
          <div>
            <Date dateString={postData.date} />
          </div>
          <div>Lectura de {ReadingTime} min</div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        <div>
          <div>
            <h2>Comentarios</h2>
            <Comment />
          </div>
        </div>
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
