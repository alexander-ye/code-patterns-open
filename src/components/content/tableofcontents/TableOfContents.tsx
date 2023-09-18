import { useEffect } from "react";
import "./tableofcontents.css";

export default function TableOfContents({ headings }: any) {
  useEffect(() => {
    const intersectionObsCallback = () => {
      const observerCallback = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry: any) => {
          const tocLinkSelector: string = "main nav ul li a";
          const id: string | null = entry.target.getAttribute("id");
          const linkSelector: string = `${tocLinkSelector}[href="#${id}"]`;

          // If a link touches the intersection window,
          //    first remove the "active" class (i.e. the highlight) from all other links,
          //    then add the class back to the current link
          if (entry.isIntersecting) {
            document
              .querySelectorAll(tocLinkSelector)
              .forEach((element) =>
                element.parentElement.classList.remove("active")
              );
            document
              .querySelector(linkSelector)
              .parentElement.classList.add("active");
          }
        });
      };

      const observerOptions = {
        threshold: 1, // how many pixels are on the screen
        rootMargin: "0px 0px -66%", // how big the intersection window is
      };

      const observer: IntersectionObserver = new IntersectionObserver(
        observerCallback,
        observerOptions
      );

      // Track all h2s in the article that have an id applied
      document.querySelectorAll("h2[id]").forEach((h2: Element) => {
        observer.observe(h2);
      });
    };

    window.addEventListener("DOMContentLoaded", intersectionObsCallback);
  }, []);

  return (
    <nav className="article-tooc">
      <ul>
        {headings.map((heading: any) => {
          const {
            depth,
            slug,
            text,
          }: { depth: number; slug: string; text: string } = heading;

          const headingRef: string = `#${slug}`;
          return (
            <li className={`toc-header toc-depth-${depth}`}>
              <a href={headingRef}>{text}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
