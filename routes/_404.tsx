import { Head } from "$fresh/runtime.ts";

export function ServerCodePage(
  props: { serverCode: number; codeDescription: string },
) {
  return (
    <>
      <Head>
        <title>{props.serverCode} Not Found</title>
        <meta
          name="description"
          content="Get Real-time Live Cricket Score Update."
        />
        <meta property="og:image" content="/random-score.jpg" />
        <meta property="og:image:alt" content="Live Cricket Score" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <link
          rel="icon"
          type="image/png"
          sizes="196x196"
          href="/icons/favicon-196.png"
        />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="/icons/favicon.ico"
        />
        <link rel="apple-touch-icon" href="/icons/apple-icon-180.png" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="Live Score" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Live Score" />
      </Head>
      <section class="w-full flex items-center justify-center">
        <div class="text-center">
          <h1 class="text-6xl md:text-9xl font-extrabold">
            {props.serverCode}
          </h1>

          <p class="p-4 text-2xl md:text-3xl">
            {props.codeDescription}
          </p>

          <p class="p-4">
            <a href="/" class="hover:underline">Back to the Homepage</a>
          </p>
        </div>
      </section>
    </>
  );
}

export default function PageNotFound() {
  return (
    <ServerCodePage
      serverCode={404}
      codeDescription={"We couldn't find the page you're looking for."}
    />
  );
}
