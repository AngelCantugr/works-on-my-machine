import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://angelcantugr.github.io',
  base: '/works-on-my-machine',
  integrations: [
    starlight({
      title: 'Works On My Machine',
      description: 'A tech blog to share what I know, learn, and experiment with',
      social: {
        github: 'https://github.com/AngelCantugr/works-on-my-machine',
      },
      sidebar: [
        {
          label: 'Guides',
          items: [
            { label: 'Getting Started', slug: 'guides/getting-started' },
          ],
        },
        {
          label: 'Reference',
          autogenerate: { directory: 'reference' },
        },
      ],
    }),
  ],
});
