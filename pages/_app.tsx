import BaseLayout from '@/components/layout/BaseLayout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return ( 
    <BaseLayout>
      <Head>
        <title>Ikhsan N. Huda — Web Software Engineer.</title>
        <meta name="description" content="Ikhsan Nur Huda's personal websites. A web software engineer based in Indonesia."></meta>
        <meta name="keywords" content="Ikhsan Nur Huda, Ikhsan, Ikhsan N. Huda, Web Developer, Frontend Developer, Software Engineer, Indonesia"></meta>
        <meta name="author" content="Ikhsan Nur Huda"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta name="theme-color" content="#000000"></meta>
        <link rel="manifest" href="/manifest.json"></link>
        <link rel="apple-touch-icon" href="/icon-512x512.png"></link>
        <link rel="shortcut icon" href='/favicon.ico' type="image/x-icon"></link>
      </Head>
      <Component {...pageProps}></Component>
    </BaseLayout>
  )
}
