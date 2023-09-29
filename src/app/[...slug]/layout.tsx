import "../globals.css";
import "./post.css";
import type { Metadata } from "next";
import Head from "next/head";

export default function Layout({
  params,
  children,
}: {
  params: { metadata: Metadata };
  children: React.ReactNode;
}) {
  const metadata: Metadata = params.metadata || {
    title: "Code Patterns Open",
    description:
      "Open-source coding education website with solutions to technical screening problems.",
  };
  return (
    <main className="w-[96%] m-auto">
      <Head>
        <title>{`${metadata?.title}`}</title>
        <meta name="title" content={`${metadata?.title}`} />
        <meta name="description" content={`${metadata?.description}`} />
      </Head>
      {children}
    </main>
  );
}
