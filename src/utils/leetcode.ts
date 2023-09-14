import type { CollectionEntry } from "astro:content";

export const sortEntriesByProblemNumber = (
  entryA: CollectionEntry<any>,
  entryB: CollectionEntry<any>
) => {
  return entryA.data.problem_number - entryB.data.problem_number;
};
