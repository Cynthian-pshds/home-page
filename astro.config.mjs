import { defineConfig } from 'astro/config';
import { remark } from 'remark';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import { remarkAlert } from 'remark-github-blockquote-alert'

let markdown = `# Alert \n> [!NOTE] \n> test`;
const htmlStr = remark()
    .use(remarkParse)
    .use(remarkAlert)
    .use(remarkRehype)
    .use(rehypeStringify)
    .processSync(markdown).toString()



// https://astro.build/config


export default defineConfig({
  markdown: {
    remarkPlugins: [
    ],
  },
});


