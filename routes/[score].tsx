import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

interface APIData {
  title: string;
  update: string;
  current: string;
  batsman: string;
  batsmanrun: string;
  ballsfaced: string;
  fours: string;
  sixes: string;
  sr: string;
  batsmantwo: string;
  batsmantworun: string;
  batsmantwoballsfaced: string;
  batsmantwofours: string;
  batsmantwosixes: string;
  batsmantwosr: string;
  bowler: string;
  bowlerover: string;
  bowlerruns: string;
  bowlerwickets: string;
  bowlermaiden: string;
  bowlertwo: string;
  bowletworover: string;
  bowlertworuns: string;
  bowlertwowickets: string;
  bowlertwomaiden: string;
  partnership: string;
  recentballs: string;
  lastwicket: string;
  runrate: string;
  commentary: string;
}

export const handler: Handlers<APIData | null> = {
  async GET(_, ctx) {
    const { score } = ctx.params;
    //const resp = await fetch(`https://cricket-api.vercel.app/score?url=https://m.cricbuzz.com/live-cricket-scores/${score}`);
    const resp = await fetch(`https://criscore.deno.dev/match/${score}`);
    if (resp.status === 404) {
      return ctx.render(null);
    }
    const match: APIData = await resp.json();
    return ctx.render(match);
  },
};
export default function Page({ data, url }: PageProps<APIData | null>) {
  if (!data) {
    return (
      <div class="min-h-screen bg-indigo-300 dark:bg-current">
        <div class="container mx-auto">
          <Head>
            <title>🔴 404 Not Found</title>
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
                        🔴 404 Not Found
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
  } else if (data.current == "Data Not Found") {
    return (
      <div class="min-h-screen bg-indigo-300 dark:bg-current">
        <div class="container mx-auto">
          <Head>
            <title>🔴 Sorry Currently No Live Match</title>
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
                        🔴 Sorry Currently No Live Match
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
  return (
    <div class="min-h-screen bg-indigo-300 dark:bg-current">
      <div class="container mx-auto">
        <Head>
          <title>{data.title}</title>
          <meta
            name="description"
            content="Get Real-time Live Cricket Score Update."
          />
          <meta http-equiv="refresh" content="60" />
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
                  <th class="p-4 text-left font-bold border border-slate-300 border-current">
                    🏏
                  </th>
                  <td class="p-4 border border-slate-300 border-current">
                    {data.title}
                  </td>
                </tr>
                <tr>
                  <th class="p-4 text-left font-bold border border-slate-300 border-current">
                    📊
                  </th>
                  <td class="p-4 border border-slate-300 border-current">
                    {data.update}
                  </td>
                </tr>
                <tr>
                  <th class="p-4 text-left font-bold border border-slate-300 border-current">
                    🔴
                  </th>
                  <td class="p-4 border border-slate-300 border-current">
                    {data.current}
                  </td>
                </tr>
                <tr>
                  <th class="p-4 text-left font-bold border border-slate-300 border-current">
                    📉
                  </th>
                  <td class="p-4 border border-slate-300 border-current">
                    {data.runrate}
                  </td>
                </tr>
                <tr>
                  <th class="p-4 text-left font-bold border border-slate-300 border-current">
                    ✊
                  </th>
                  <td class="p-4 border border-slate-300 border-current">
                    {data.batsman} - {data.batsmanrun} - {data.ballsfaced}Balls
                    {" "}
                    <br />
                    SR {data.sr} - fours {data.fours} - six {data.sixes}
                  </td>
                </tr>
                <tr>
                  <th class="p-4 text-left font-bold border border-slate-300 border-current">
                    ✊
                  </th>
                  <td class="p-4 border border-slate-300 border-current">
                    {data.bowler} - {data.bowlerover} Overs -{" "}
                    {data.bowlerruns}Runs - {data.bowlerwickets} Wickets and
                    {" "}
                    {data.bowlermaiden} maiden
                  </td>
                </tr>
                <tr>
                  <th class="p-4 text-left font-bold border border-slate-300 border-current">
                    😳
                  </th>
                  <td class="p-4 border border-slate-300 border-current">
                    {data.lastwicket}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}
