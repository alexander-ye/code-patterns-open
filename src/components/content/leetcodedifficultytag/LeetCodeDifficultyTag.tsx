import { colors } from "@lib/constants";

export default function LeetCodeDifficultyTag({ difficulty }: any) {
  const difficultyColor: any = colors.difficulties;
  return (
    <p
      className={`
        px-[1rem]
        py-[0.2rem]
        text-[white]
        text-[14px]
        text-center
        rounded-[4px]`}
      style={{
        backgroundColor: `${difficultyColor[difficulty]}`,
      }}
    >
      {difficulty}
    </p>
  );
}
