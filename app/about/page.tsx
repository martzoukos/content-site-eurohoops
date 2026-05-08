import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <article className="prose prose-zinc max-w-none dark:prose-invert">
      <h1 className="text-3xl font-semibold tracking-tight">About EuroHoops</h1>
      <p className="mt-4 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
        EuroHoops is a small unofficial guide to European club basketball — a
        side project built mostly to have a content site to run monitoring
        against. None of it is affiliated with Euroleague Basketball, FIBA, or
        any of the clubs covered.
      </p>
      <h2 className="mt-10 text-xl font-semibold tracking-tight">
        What you'll find here
      </h2>
      <ul className="mt-3 list-inside list-disc space-y-2 text-zinc-700 dark:text-zinc-300">
        <li>A short history of the Euroleague competition, from 1958 onward.</li>
        <li>Profiles of three of the most decorated clubs in the league.</li>
        <li>
          Profiles of three players who defined the 2000s and 2010s of European
          basketball.
        </li>
      </ul>
      <h2 className="mt-10 text-xl font-semibold tracking-tight">Corrections</h2>
      <p className="mt-3 text-zinc-700 dark:text-zinc-300">
        Spotted something inaccurate? The whole site is intentionally light on
        primary sources, so most factual issues are honest mistakes. Pull
        requests welcome.
      </p>
    </article>
  );
}
