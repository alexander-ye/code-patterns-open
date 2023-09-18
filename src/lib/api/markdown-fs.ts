import fs from "fs";
import { join } from "path";
import { POSTS_ROOT_PATH } from "@lib/constants";
import { compileMDX } from "next-mdx-remote/rsc";

/**
 *
 * @param {string} path
 * @returns
 */
export function getSlugFromPath(path: string) {
  const splitPath: string[] = path.split(POSTS_ROOT_PATH);
  // Return a slug without the filetype
  const slugPath: string = splitPath[splitPath.length - 1].replace(
    /\.md$|\.mdx$/,
    ""
  );
  const slugPathSplit: string[] = slugPath.split("/");
  // Get the very last element of the slug
  const slugSegment: string = slugPathSplit[slugPathSplit.length - 1].replace(
    /\.md$|\.mdx$/,
    ""
  );

  return [slugPath, slugSegment];
}

/**
 * Recursive function that navigates post directory tree and returns
 * a list of all markdown file paths
 *
 * @param {string} directory Root directory to begin searching from
 *
 * @returns paths string[] List of directory paths to posts
 */
export function getMarkdownFilePaths(directory = POSTS_ROOT_PATH): string[] {
  const postsDirectory: string = join(process.cwd(), directory);
  let out: string[] = [];
  let directoriesToRead = [postsDirectory];

  // Navigate all subdirectories to obtain paths for posts
  while (directoriesToRead.length) {
    directoriesToRead.forEach((directoryName: string) => {
      // Read directory
      const fileNames: string[] = fs
        .readdirSync(directoryName)
        .filter((fileName: string) => fileName !== ".DS_Store");
      // Get the file paths for each file
      const paths: string[] = fileNames.map((fileString: string) => {
        return `${directoryName}/${fileString}`;
      });
      out = out.concat(paths);
    });
    // Check if any files read were directories
    directoriesToRead = [];
    out = out.filter((fileName: string) => {
      if (fs.lstatSync(fileName).isDirectory()) {
        directoriesToRead.push(fileName);
        return false;
      } else if (!fileName.includes(".mdx")) {
        return false;
      }
      return true;
    });
  }
  return out;
}

/**
 * @param {string} path Directory path to post
 *
 * @returns posts string[] A list of all post paths
 */
export function getMarkdownFileByPath(path: string) {
  // Replace ',' with '/' for paths with more than one path string
  const fileContents: any = fs.readFileSync(path.replace(/,/g, "/"), "utf8");
  const [slugPath, slugSegment] = getSlugFromPath(path);
  return { slug: slugPath, content: fileContents };
}

/**
 * @param {string} slug Slug (relative path) pointing to post
 *
 * @returns posts string[] A list of all post paths
 */
export function getMarkdownFileBySlug(slug: string) {
  const postsDirectory: string = join(process.cwd(), POSTS_ROOT_PATH);
  const path: string = join(postsDirectory, `${slug}.mdx`);
  return getMarkdownFileByPath(path);
}

export async function getMarkdownFrontmatter(file: any) {
  const { frontmatter } = await compileMDX({
    source: file,
    options: {
      parseFrontmatter: true,
    },
  });
  return frontmatter;
}

export function getMarkdownFilesFromDirectory(directory = POSTS_ROOT_PATH) {
  return getMarkdownFilePaths(directory).map((path: string) =>
    getMarkdownFileByPath(path)
  );
}

export async function getMarkdownFrontmatterFromDirectory(
  directory = POSTS_ROOT_PATH
) {
  const frontmatters = [];
  const files = getMarkdownFilesFromDirectory(directory);
  for await (const { slug, content } of files) {
    const frontmatter = await getMarkdownFrontmatter(content);
    frontmatters.push({ ...frontmatter, slug });
  }
  return frontmatters;
}
