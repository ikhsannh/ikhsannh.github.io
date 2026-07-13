import Head from "next/head";
import { ReactNode } from "react";

export default function BaseLayout({ children }: { children: ReactNode }) {
return (
    <div>
       <Head>
        <title>Ikhsan N. Huda — Dev.</title>
        <meta name="description" content="Ikhsan N. Huda's personal website. A web software engineer based in Indonesia." />
        <meta name="keywords" content="Ikhsan N. Huda, Ikhsan, Ikhsan Nur Huda, Web Software Engineer, Frontend Engineer, Indonesia" />
        <meta name="author" content="Ikhsan N. Huda" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href='/favicon.ico' type="image/x-icon" />
      </Head>
    <div className="container mx-auto">
      {/* <Navigation /> */}
      {children}
    </div>
    </div>
  )
}