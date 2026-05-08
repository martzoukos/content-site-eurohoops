import Link from "next/link";
import type { Metadata } from "next";
import { historyArticles } from "@/lib/content";

export const metadata: Metadata = {
  title: "History",
  description:
    "How the Euroleague evolved from a 1958 knockout cup into the modern round-robin competition.",
};

export default function HistoryIndexPage() {
  return (
    <div className="flex flex-col gap-10">
      <header className="flex flex-col gap-3">
        <p className="text-sm font-medium uppercase tracking-widest text-orange-600 dark:text-orange-400">
          Category
        </p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          History of the Euroleague
        </h1>
        <p className="max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          A short tour through the eras of European club basketball — the
          knockout cup, the Final Four, and the modern league.
        </p>
      </header>

      <ul className="flex flex-col divide-y divide-zinc-200 border-y border-zinc-200 dark:divide-zinc-800 dark:border-zinc-800">
        {historyArticles.map((article) => (
          <li key={article.slug}>
            <Link
              href={`/history/${article.slug}`}
              className="flex flex-col gap-2 py-6 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-900"
            >
              <h2 className="text-xl font-semibold tracking-tight">
                {article.title}
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400">
                {article.summary}
              </p>
              <span className="text-sm font-medium text-orange-600 dark:text-orange-400">
                Read article →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
