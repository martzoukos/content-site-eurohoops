import Link from "next/link";
import type { Metadata } from "next";
import { players } from "@/lib/content";

export const metadata: Metadata = {
  title: "Players",
  description:
    "Profiles of players who shaped European basketball in the modern era.",
};

export default function PlayersIndexPage() {
  return (
    <div className="flex flex-col gap-10">
      <header className="flex flex-col gap-3">
        <p className="text-sm font-medium uppercase tracking-widest text-orange-600 dark:text-orange-400">
          Category
        </p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Players
        </h1>
        <p className="max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Three players who defined the EuroLeague's modern era — between them,
          a stack of MVP and Final Four MVP awards, and a generation of imitators.
        </p>
      </header>

      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {players.map((player) => (
          <li key={player.slug}>
            <Link
              href={`/players/${player.slug}`}
              className="group flex h-full flex-col gap-3 rounded-xl border border-zinc-200 bg-white p-6 transition-colors hover:border-orange-500 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-orange-500"
            >
              <div className="flex flex-col gap-1">
                <h2 className="text-xl font-semibold tracking-tight">
                  {player.name}
                </h2>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  {player.position} · {player.nationality}
                </p>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {player.summary}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
