// The site's sections. Order here is the order on the home page and in the menu.
export const SECTIONS = [
  {
    slug: 'investigations',
    name: 'Fine Print Investigations',
    short: 'Investigations',
    blurb: 'Long-form reporting built on archive files, RTI replies and official records — what the documents say, and what they leave out.',
  },
  {
    slug: 'news',
    name: 'News',
    short: 'News',
    blurb: 'Short, plain-language stories from public documents such as audit reports and parliamentary papers. Published daily as Proper Channel.',
  },
  {
    slug: 'history',
    name: 'History',
    short: 'History',
    blurb: 'Old stories, retold from the record: legends tested against the files that should settle them.',
  },
  {
    slug: 'essays',
    name: 'Essays & Features',
    short: 'Essays',
    blurb: 'Places, people and vanished trades — reported writing with more room to breathe.',
  },
];

export const sectionBySlug = Object.fromEntries(SECTIONS.map((s) => [s.slug, s]));
