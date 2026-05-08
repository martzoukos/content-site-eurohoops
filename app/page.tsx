import Link from "next/link";
import { categories } from "@/lib/content";

export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      <section className="flex flex-col gap-4">
        <p className="text-sm font-medium uppercase tracking-widest text-orange-600 dark:text-orange-400">
          A guide to European basketball
        </p>
        <h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          Sixty-five years of Euroleague basketball, in one small site.
        </h1>
        <p className="max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          From the first Champions Cup in 1958 to the modern round-robin
          EuroLeague, this is a quick tour of the competition that defines
          European club basketball — its history, its biggest clubs, and the
          players who shaped it.
        </p>
      </section>

      <section className="grid gap-6 sm:grid-cols-3">
        {categories.map((category) => (
          <Link
            key={category.slug}
            href={`/${category.slug}`}
            className="group flex flex-col gap-2 rounded-xl border border-zinc-200 bg-white p-6 transition-colors hover:border-orange-500 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-orange-500"
          >
            <span className="text-xs font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
              Category
            </span>
            <h2 className="text-xl font-semibold tracking-tight">
              {category.title}
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              {category.blurb}
            </p>
            <span className="mt-2 text-sm font-medium text-orange-600 dark:text-orange-400">
              Browse {category.title.toLowerCase()} →
            </span>
          </Link>
        ))}
      </section>
    </div>
  );
}
