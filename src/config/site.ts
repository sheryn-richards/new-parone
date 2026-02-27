export const SITE = {
  name: 'ParOne',
  title: 'ParOne | Precision, Creativity, and Insight',
  description: 'Combining precision, creativity, and insight across golf, media, and technology — delivering solutions that last.',
  url: 'https://parone.com',
  twitterHandle: '@paronedev',
  socials: {
    twitter: 'https://twitter.com/paronedev',
    instagram: 'https://instagram.com/paronedev',
    linkedin: 'https://www.linkedin.com/company/parone-dev',
    dribbble: 'https://dribbble.com/parone',
  },
  image: {
    src: '/favicon.svg',
    alt: 'ParOne.dev Logo',
  },
} as const;

export type SiteConfig = typeof SITE;
