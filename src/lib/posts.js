import { getCollection } from 'astro:content';

// All published stories, newest first. Bengali editions (slug ending "-bn")
// are folded into their English twin, which carries a `bn` link instead.
export async function getStories() {
  const all = await getCollection('blog', ({ data }) => !data.draft);
  const slugs = new Set(all.map((p) => p.slug));
  return all
    .filter((p) => !p.slug.endsWith('-bn'))
    .map((p) => ({ ...p, bn: slugs.has(`${p.slug}-bn`) ? `${p.slug}-bn` : null }))
    .sort((a, b) => new Date(b.data.date) - new Date(a.data.date));
}

export const fmtDate = (d) =>
  new Date(d).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
