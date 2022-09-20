import { UnknownPageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export default function Home({ url }: UnknownPageProps) {
  return (
    <div class="min-h-screen bg-indigo-300 dark:bg-current">
      <div class="container mx-auto">
        <Head>
          <title>404 - Not Found</title>
          <meta
            name="description"
            content="Get Real-time Live Cricket Score Update."
          />
          <link rel="canonical" href={url.href} />
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
        <div class="flex flex-col justify-center items-center">
          <div class="flex flex-initial w-80 dark:bg-gray-500 dark:text-gray-100 bg-indigo-100 border-2 border-current rounded-lg mt-6">
            <table class="min-w-full shadow-md rounded table-auto border-collapse border border-slate-400 border-current font-bold">
              <tbody>
                <tr>
                  <td class="p-4">
                    <p class="text-center">
                      🔴 404 - Not Found
                    </p>
                  </td>
                </tr>
                <tr>
                  <td class="p-4">
                    <p class="text-center">
                      Get Live Cricket Score in Real-time Built using Deno Fresh
                      web Framework
                    </p>
                  </td>
                </tr>
                <tr>
                  <td class="p-4">
                    <p class="text-center">
                      <div class="flex items-center justify-center">
                        <img
                          width="197"
                          height="37"
                          src="https://fresh.deno.dev/fresh-badge-dark.svg"
                          alt="Made with Fresh"
                        />
                      </div>
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
