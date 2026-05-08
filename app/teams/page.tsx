import Link from "next/link";
import type { Metadata } from "next";
import { teams } from "@/lib/content";

export const metadata: Metadata = {
  title: "Teams",
  description:
    "Three of the most decorated clubs in the history of European basketball.",
};

export default function TeamsIndexPage() {
  return (
    <div className="flex flex-col gap-10">
      <header className="flex flex-col gap-3">
        <p className="text-sm font-medium uppercase tracking-widest text-orange-600 dark:text-orange-400">
          Category
        </p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Teams
        </h1>
        <p className="max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Three of the most decorated clubs in the history of European
          basketball — together they account for more than two dozen continental
          titles.
        </p>
      </header>

      <ul className="grid gap-6 sm:grid-cols-2">
        {teams.map((team) => (
          <li key={team.slug}>
            <Link
              href={`/teams/${team.slug}`}
              className="group flex h-full flex-col gap-3 rounded-xl border border-zinc-200 bg-white p-6 transition-colors hover:border-orange-500 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-orange-500"
            >
              <div className="flex items-baseline justify-between gap-3">
                <h2 className="text-xl font-semibold tracking-tight">
                  {team.name}
                </h2>
                <span className="shrink-0 text-sm font-medium text-zinc-500 dark:text-zinc-400">
                  {team.city}, {team.country}
                </span>
              </div>
              <dl className="flex gap-6 text-sm text-zinc-600 dark:text-zinc-400">
                <div>
                  <dt className="text-xs uppercase tracking-widest">Founded</dt>
                  <dd className="font-medium text-zinc-900 dark:text-zinc-100">
                    {team.founded}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-widest">
                    EuroLeague titles
                  </dt>
                  <dd className="font-medium text-zinc-900 dark:text-zinc-100">
                    {team.euroleagueTitles}
                  </dd>
                </div>
              </dl>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {team.summary}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
