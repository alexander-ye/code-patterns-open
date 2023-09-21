import CodeTabs from "@components/content/codetabs/CodeTabs";
import {
  getMarkdownFileBySlug,
  getMarkdownFilePaths,
  getMarkdownFrontmatter,
  getSlugFromPath,
} from "@lib/api/markdown-fs";
import rehypeHighlight from "rehype-highlight";
import { MDXRemote } from "next-mdx-remote/rsc";

import langPython from "highlight.js/lib/languages/python";
import langJs from "highlight.js/lib/languages/javascript";
import LeetCodeDifficultyTag from "@components/content/leetcodedifficultytag/LeetCodeDifficultyTag";

const markdownOptions: any = {
  parseFrontmatter: true,
  mdxOptions: {
    remarkPlugins: [],
    rehypePlugins: [
      rehypeHighlight,
      { languages: { python: langPython, javascript: langJs } },
    ],
  },
};
export default async function Post({ params }: any) {
  const post: any = await getPost(params);
  return (
    <main>
      <article className="mb-32">
        <h1>{post?.title}</h1>
        {post.src ? (
          <div className={`flex flex-row m-[0.5rem]`}>
            <LeetCodeDifficultyTag difficulty={post.src.difficulty} />
          </div>
        ) : null}
        <MDXRemote
          source={post.source}
          options={markdownOptions}
          components={{ CodeTabs }}
        />
      </article>
    </main>
  );
}

// Return a list of 'params' to populate the [slug] dynamic segment
// DOCUMENTATION: https://nextjs.org/docs/app/api-reference/functions/generate-static-params#examples
export async function generateStaticParams() {
  const postFilePaths = getMarkdownFilePaths();
  return postFilePaths.map((filePath: string) => {
    const [slugPath, slugSegment] = getSlugFromPath(filePath);
    return {
      slug: slugPath.split("/").filter((subStr: string) => subStr !== ""),
    };
  });
}

// Pre-render a page at build time
// DOCUMENTATION: https://github.com/hashicorp/next-mdx-remote
// DOCUMENTATION: https://nextjs.org/docs/app/building-your-application/rendering#network-boundary
async function getPost(params: any) {
  const slug: string = `${params.slug.join("/")}`;
  if (slug.includes(".")) {
    return {};
  }
  const { content } = await getMarkdownFileBySlug(slug);
  const frontmatter = await getMarkdownFrontmatter(content);
  return { ...frontmatter, source: content };
}
