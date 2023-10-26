import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className='scroll-smooth'>
      <Head>
        <title>Portfolio Ho Quoc Thang</title>
        <meta name="description" content="Portfolio Ho Quoc Thang" />
        <link rel="icon" href="/favicon.ico" />
        {/* <link rel="stylesheet" href="https://rsms.me/inter/inter.css" /> */}
        {/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" /> */}
      </Head>
      <Main />
      <NextScript />
    </Html>
  )
}
