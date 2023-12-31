"use client";

import { languageClassToName } from "@lib/constants";
import { Children, useState } from "react";

export default function CodeTabs({ children }: any) {
  const [languageIndex, setLanguageIndex] = useState(0);

  return (
    <section
      className={`
      m-[1rem] 
      overflow-hidden`}
    >
      <div className="flex flex-row border-b-[1px] border-[black] overflow-scroll">
        {Children.map(children, (child: any, index: number) => {
          const classNames: string[] =
            child?.props?.children?.props?.className?.split(" ") || [""];
          const languageClass: string = classNames[classNames.length - 1];
          const selected: boolean = languageIndex === index;

          return (
            <div
              key={languageClass}
              className={`
              cursor-pointer
              py-[0.2rem]
              px-[1rem]
              ${selected ? "text-bold" : ""}
              ${selected ? "text-[white]" : ""}
              ${selected ? "bg-[black]" : ""}
            `}
              onClick={() => setLanguageIndex(index)}
            >
              {languageClassToName[languageClass]}
            </div>
          );
        })}
      </div>
      <div className="flex flex-1 p-[1rem] break-words break-all overflow-scroll">
        {children[languageIndex] || children}
      </div>
    </section>
  );
}
