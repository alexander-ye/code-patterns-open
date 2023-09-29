import { MDXRemote } from "next-mdx-remote/rsc";
import CodeTabs from "@components/content/codetabs/CodeTabs";
import LeetCodeDifficultyTag from "@components/content/leetcodedifficultytag/LeetCodeDifficultyTag";
import TableOfContents from "@components/content/tableofcontents/TableOfContents";

import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";

import langPython from "highlight.js/lib/languages/python";
import langJs from "highlight.js/lib/languages/javascript";

const markdownOptions: any = {
  parseFrontmatter: true,
  mdxOptions: {
    remarkPlugins: [],
    rehypePlugins: [
      rehypeSlug,
      rehypeHighlight,
      { languages: { python: langPython, javascript: langJs } },
    ],
  },
};

export default function LeetCodePost({ post }: any) {
  if (!post) {
    return null;
  }

  // Get each line and filter out non-headings
  const headingLines = post?.source?.split("\n")?.filter((line: string) => {
    return line.match(/^###*\s/);
  });
  // Transform string '## text' into object with shape {text: ..., level:...}
  const heading23s = headingLines?.map((raw: string) => {
    const text: string = raw.replace(/^###*\s/, "");
    const slug: string = text
      .toLowerCase()
      .replace(/ |%20/g, "-")
      .replace(":", "");
    // We only care about h2 and h3; to get more levels, count #'s
    const depth: number = raw.slice(0, 3) === "***" ? 3 : 2;

    return { text, depth, slug };
  });

  // TODO: CUSTOM HEADER COMPONENTS FOR TABLE OF CONTENTS
  // TODO: REFS

  return (
    <div className="flex flex-row flex-1 w-[100%]">
      <TableOfContents headings={heading23s} />
      <article className="article-content flex-1">
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
    </div>
  );
}
