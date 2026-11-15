// The site's sections. Order here is the order in the menu and on the home page.
export const SECTIONS = [
  {
    slug: 'investigations',
    name: 'Fine Print Investigations',
    short: 'Investigations',
    blurb: 'Fresh reporting from official records — audit reports, sanctions lists, company filings — in plain language, with every figure traced to the document.',
  },
  {
    slug: 'long-read',
    name: 'The Long Read',
    short: 'Long Read',
    blurb: 'Long-form stories from archives, old files and manuscripts: what the documents say, and what they leave out.',
  },
];

export const sectionBySlug = Object.fromEntries(SECTIONS.map((s) => [s.slug, s]));
