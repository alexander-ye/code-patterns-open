import { colors } from "@lib/constants";

export default function SolutionArticleCard({ href, title, difficulty }: any) {
  const difficultyColor: any = colors.difficulties;
  return (
    <a
      href={href}
      className={`
      flex
      flex-row
      py-[1.5rem]
      px-[1rem]
      border-[1px]
      border-solid
      border-black
      rounded-[4px]
      no-underline
      transition-transform
      duration-[0.2s]
      hover:scale-[1.025]
    `}
    >
      <article className="flex-1 flex flex-col justify-between">
        <p className={`pb-[2rem]`}>{title}</p>
        {difficulty ? (
          <p
            className={`
            text-[12px]
            text-center
            rounded-[4px]`}
            style={{
              backgroundColor: `${difficultyColor[difficulty]}`,
            }}
          >
            {difficulty}
          </p>
        ) : null}
      </article>
    </a>
  );
}
