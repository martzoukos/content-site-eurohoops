import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPlayer, players } from "@/lib/content";

export function generateStaticParams() {
  return players.map((player) => ({ slug: player.slug }));
}

export async function generateMetadata(
  props: PageProps<"/players/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const player = getPlayer(slug);
  if (!player) return {};
  return {
    title: player.name,
    description: player.summary,
  };
}

export default async function PlayerPage(props: PageProps<"/players/[slug]">) {
  const { slug } = await props.params;
  const player = getPlayer(slug);
  if (!player) notFound();

  return (
    <article className="flex flex-col gap-6">
      <Link
        href="/players"
        className="text-sm font-medium text-orange-600 hover:underline dark:text-orange-400"
      >
        ← Back to players
      </Link>
      <header className="flex flex-col gap-3">
        <p className="text-sm font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
          {player.position} · {player.nationality}
        </p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {player.name}
        </h1>
        <p className="max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          {player.summary}
        </p>
      </header>

      <dl className="grid grid-cols-2 gap-4 rounded-xl border border-zinc-200 bg-white p-6 sm:grid-cols-3 dark:border-zinc-800 dark:bg-zinc-950">
        <div>
          <dt className="text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
            Born
          </dt>
          <dd className="mt-1 text-base font-semibold">{player.born}</dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
            Position
          </dt>
          <dd className="mt-1 text-base font-semibold">{player.position}</dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
            Primary club
          </dt>
          <dd className="mt-1 text-base font-semibold">{player.primaryTeam}</dd>
        </div>
      </dl>

      <div className="flex flex-col gap-4 text-zinc-700 dark:text-zinc-300">
        {player.body.map((paragraph, index) => (
          <p key={index} className="text-base leading-7">
            {paragraph}
          </p>
        ))}
      </div>
    </article>
  );
}
