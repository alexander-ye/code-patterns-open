import type { CollectionEntry } from "astro:content";

export const getCollectionEntrySubfolder = (
  post: CollectionEntry<any>
): string => {
  return post.slug.split("/")[0];
};

export const filterCollectionBySubfolder = (
  entry: CollectionEntry<any>,
  subfolder: string
): boolean => {
  return getCollectionEntrySubfolder(entry) === subfolder;
};
