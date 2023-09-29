export const POSTS_ROOT_PATH: string = "src/_content";
export const CODING_SOLUTION_POST_ROOT_PATH: string = `${POSTS_ROOT_PATH}/coding-problem-solutions`;

export const navLinks = [
  {
    url: "/coding-problem-solutions",
    label: "Programming Challenge Solutions",
    // subnav: [
    //   {
    //     url: "/coding-problem-solutions/leetcode",
    //     label: "LeetCode",
    //   },
    //   {
    //     url: "/coding-problem-solutions/hackerrank",
    //     label: "HackerRank",
    //   },
    // ],
  },
  {
    url: "/about",
    label: "About",
  },
  {
    url: "/contribute",
    label: "Contribute",
  },
];

export const colors = {
  difficulties: {
    Easy: "#4ade80",
    Medium: "#fbbf24",
    Hard: "#ef4444",
  },
};

export const languageReferences = {
  python: {
    runtimes: "https://wiki.python.org/moin/TimeComplexity",
  },
};

export const languageClassToName: any = {
  "language-python": "Python",
  "language-lua": "Lua",
  "language-js": "JavaScript",
  "": "Pseudocode",
};
