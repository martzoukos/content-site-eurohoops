import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getArticle, historyArticles } from "@/lib/content";

export function generateStaticParams() {
  return historyArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata(
  props: PageProps<"/history/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.summary,
  };
}

export default async function HistoryArticlePage(
  props: PageProps<"/history/[slug]">,
) {
  const { slug } = await props.params;
  const article = getArticle(slug);
  if (!article) notFound();

  return (
    <article className="flex flex-col gap-6">
      <Link
        href="/history"
        className="text-sm font-medium text-orange-600 hover:underline dark:text-orange-400"
      >
        ← Back to history
      </Link>
      <header className="flex flex-col gap-3">
        <p className="text-sm font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
          History
        </p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {article.title}
        </h1>
        <p className="max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          {article.summary}
        </p>
      </header>
      <div className="flex flex-col gap-4 text-zinc-700 dark:text-zinc-300">
        {article.body.map((paragraph, index) => (
          <p key={index} className="text-base leading-7">
            {paragraph}
          </p>
        ))}
      </div>
    </article>
  );
}
