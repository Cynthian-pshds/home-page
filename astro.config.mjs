import { defineConfig } from 'astro/config';
import { rehypeHeadingIds } from '@astrojs/markdown-remark';
import {unified} from "unified";
import remarkToc from 'remark-toc';
import {toc} from "@jsdevtools/rehype-toc";


// https://astro.build/config


export default defineConfig({
  markdown: {
    remarkPlugins: [remarkToc, [remarkToc,{ heading: 'toc', maxDepth: 6 }]],
    rehypePlugins: [
      rehypeHeadingIds,
    ],
  },
});



// Use the Rehype TOC plugin with its default options
unified().use(toc);

// Use the Rehype TOC plugin with custom options
unified().use(toc, {
  headings: ["h1", "h2"],     // Only include <h1> and <h2> headings in the TOC
  cssClasses: {
    toc: "page-outline",      // Change the CSS class for the TOC
    link: "page-link",        // Change the CSS class for links in the TOC
  }
});