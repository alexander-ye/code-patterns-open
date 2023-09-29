import "../globals.css";
import type { Metadata } from "next";
import Head from "next/head";

export default function Template({
  params,
  children,
}: {
  params: { metadata: Metadata };
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
