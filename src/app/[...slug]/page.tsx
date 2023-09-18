import CodeTabs from "@components/content/codetabs/CodeTabs";
import {
  getMarkdownFileBySlug,
  getMarkdownFilePaths,
  getMarkdownFrontmatter,
  getSlugFromPath,
} from "@lib/api/markdown-fs";
import { MDXRemote } from "next-mdx-remote/rsc";

export default async function Post({ params }: any) {
  const post: any = await getPost(params);
  return (
    <main>
      <article className="mb-32">
        <h1>{post?.title}</h1>
        {post.src ? <p>{post.src.difficulty}</p> : null}
        <MDXRemote
          source={post.source}
          options={{ parseFrontmatter: true }}
          components={{ CodeTabs }}
        />
      </article>
    </main>
  );
}

// Return a list of 'params' to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const postFilePaths = getMarkdownFilePaths();
  return postFilePaths.map((filePath: string) => {
    const [slugPath, slugSegment] = getSlugFromPath(filePath);
    return { slug: slugPath.split("/") };
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
