import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='bg-[url(/headerbg.jpg)] bg-cover bg-fixed'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
