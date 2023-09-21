import Header from "@components/site/header/Header";
import "./globals.css";
import type { Metadata } from "next";
import Footer from "@components/site/footer/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="title" content="Code Patterns Open" />
        <meta
          name="description"
          content="Open-source coding education website with solutions to technical screening problems."
        />
        <meta name="viewport" content="width=device-width" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/github.min.css"
        ></link>
        {/* <title>{title}</title> */}
      </head>
      <body>
        <Header />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
