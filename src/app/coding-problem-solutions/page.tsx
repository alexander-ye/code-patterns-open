import SolutionArticleCards from "@components/content/solutionarticlecards/SolutionArticleCards";
import { getMarkdownFrontmatterFromDirectory } from "@lib/api/markdown-fs";

import { CODING_SOLUTION_POST_ROOT_PATH } from "@lib/constants";

const sourcedCodingSolutions: any = [
  {
    domain: "LeetCode",
    href: "/coding-problem-solutions/leetcode",
    postsDirectory: `${CODING_SOLUTION_POST_ROOT_PATH}/leetcode`,
  },
  {
    domain: "HackerRank",
    href: "/coding-problem-solutions/hackerrank",
    postsDirectory: `${CODING_SOLUTION_POST_ROOT_PATH}/hackerrank`,
  },
];

export default async function CodeChallengeSolutions() {
  for await (const item of sourcedCodingSolutions) {
    const { postsDirectory } = item;
    const posts = await getMarkdownFrontmatterFromDirectory(postsDirectory);
    item.posts = posts;
  }

  return (
    <main>
      <h1>Programming Challenge Solutions</h1>
      {sourcedCodingSolutions.map(({ domain, href, posts }: any) => {
        return (
          <SolutionArticleCards sectionName={domain} src={href} posts={posts} />
        );
      })}
    </main>
  );
}
