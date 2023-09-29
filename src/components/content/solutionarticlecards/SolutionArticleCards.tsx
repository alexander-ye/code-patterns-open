import SolutionArticleCard from "@components/content/solutionarticlecard/SolutionArticleCard";

export default function SolutionArticleCards({ sectionName, src, posts }: any) {
  return (
    <>
      {sectionName ? (
        src ? (
          <a href={src}>
            <h2>{sectionName}</h2>
          </a>
        ) : (
          <h2>sectionName</h2>
        )
      ) : null}
      <section
        className={`
              grid
              sm:grid-cols-2
              md:grid-cols-3
              lg:grid-cols-4
              gap-[10px]`}
      >
        {posts.map((entry: any) => {
          const postSlug: string = `${entry.slug}`;
          const postTitle: string = entry.title;
          const problemDifficulty: string = entry.src?.difficulty || "";
          return (
            <SolutionArticleCard
              key={postSlug}
              href={postSlug}
              title={postTitle}
              difficulty={problemDifficulty}
            />
          );
        })}
      </section>
    </>
  );
}
