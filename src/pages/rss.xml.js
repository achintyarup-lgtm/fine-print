import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return rss({
    title: 'The Fine Print',
    description: 'What was sanctioned, what was built, and what got left out of the record. Reporting and essays by Achintyarup Ray.',
    site: context.site,
    items: posts
      .sort((a, b) => new Date(b.data.date) - new Date(a.data.date))
      .map((post) => ({
        title: post.data.title,
        description: post.data.standfirst ?? post.data.description ?? '',
        pubDate: new Date(post.data.date),
        link: `/${post.slug}/`,
      })),
  });
}
