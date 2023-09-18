import { remark } from "remark";
import remarkMdx from "remark-html";
import { serialize } from "next-mdx-remote/serialize";

export default async function markdownToHtml(markdown: string) {
  const result = await remark().use(remarkMdx).process(markdown);
  return result;
}
