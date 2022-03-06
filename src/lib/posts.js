import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

// guardo el path donde estan los posts
const postsDirectory = path.join(process.cwd(), 'src/posts');
const { defaultLocale } = require('../../i18n.json');
//const { defaultLocale } = require('../../i18n.json');

// obtengo ordenadamente los datos de las publicaciones
export function getSortedPostsData(locale) {
  // guardo en un arreglo los nombres de los posts en el directorio: posts
  const postIds = fs.readdirSync(postsDirectory);
  // recorro el arreglo con map
  const allPostsData = postIds
    .map((id) => {
      const fileName = locale === defaultLocale ? `index.md` : `index.${locale}.md`;
      // guardo el path del archivo para leerlo despues
      const fullPath = path.join(postsDirectory, id, fileName);
      if (!fs.existsSync(fullPath)) {
        return;
      }
      // leo el archivo como un string con codificacion utf-8
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      // con gray-matter parseo la metadata del post
      const matterResult = matter(fileContents);
      // combino la metadata con el id
      return {
        id,
        ...matterResult.data,
      };
    })
    .filter((post) => post);

  // ordeno todos los posts por fecha
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

//obtengo todos los id de los posts
export function getAllPostIds(locales) {
  let paths = [];
  const postIds = fs.readdirSync(postsDirectory);

  for (let id of postIds) {
    for (let locale of locales) {
      let fullpath = path.join(postsDirectory, id, locale === defaultLocale ? 'index.md' : `index.${locale}.md`);
      if (!fs.existsSync(fullpath)) {
        continue;
      }

      paths.push({ params: { id }, locale });
    }
  }

  return paths;
}

export async function getPostData(id, locale) {
  const fullPath = path.join(postsDirectory, id, locale === defaultLocale ? 'index.md' : `index.${locale}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark().use(html).process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
