import {
  getMarkdownFileBySlug,
  getMarkdownFilePaths,
  getMarkdownFrontmatter,
  getSlugFromPath,
} from "@lib/api/markdown-fs";

import LeetCodePost from "./LeetCodePost";

export default async function Post({ params }: any) {
  const post: any = await getPost(params);

  return <LeetCodePost post={post} />;
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
