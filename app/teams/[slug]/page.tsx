import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getTeam, teams } from "@/lib/content";

export function generateStaticParams() {
  return teams.map((team) => ({ slug: team.slug }));
}

export async function generateMetadata(
  props: PageProps<"/teams/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const team = getTeam(slug);
  if (!team) return {};
  return {
    title: team.name,
    description: team.summary,
  };
}

export default async function TeamPage(props: PageProps<"/teams/[slug]">) {
  const { slug } = await props.params;
  const team = getTeam(slug);
  if (!team) notFound();

  return (
    <article className="flex flex-col gap-6">
      <Link
        href="/teams"
        className="text-sm font-medium text-orange-600 hover:underline dark:text-orange-400"
      >
        ← Back to teams
      </Link>
      <header className="flex flex-col gap-3">
        <p className="text-sm font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
          {team.city}, {team.country}
        </p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {team.name}
        </h1>
        <p className="max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          {team.summary}
        </p>
      </header>

      <dl className="grid grid-cols-2 gap-4 rounded-xl border border-zinc-200 bg-white p-6 sm:grid-cols-4 dark:border-zinc-800 dark:bg-zinc-950">
        <div>
          <dt className="text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
            Founded
          </dt>
          <dd className="mt-1 text-base font-semibold">{team.founded}</dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
            EuroLeague titles
          </dt>
          <dd className="mt-1 text-base font-semibold">
            {team.euroleagueTitles}
          </dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
            Arena
          </dt>
          <dd className="mt-1 text-base font-semibold">{team.arena}</dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
            Country
          </dt>
          <dd className="mt-1 text-base font-semibold">{team.country}</dd>
        </div>
      </dl>

      <div className="flex flex-col gap-4 text-zinc-700 dark:text-zinc-300">
        {team.body.map((paragraph, index) => (
          <p key={index} className="text-base leading-7">
            {paragraph}
          </p>
        ))}
      </div>
    </article>
  );
}
