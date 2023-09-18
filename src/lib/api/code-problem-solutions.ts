export function getCodingProblemSrc(post: any): {
  domain: string;
  url: string;
  difficulty: string;
} {
  return post.src || { domain: "None", url: "", difficulty: "" };
}
