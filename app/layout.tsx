import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "EuroHoops — A guide to the Euroleague",
    template: "%s · EuroHoops",
  },
  description:
    "A small content site about the EuroLeague: history, teams, and players.",
};

const navLinks = [
  { href: "/history", label: "History" },
  { href: "/teams", label: "Teams" },
  { href: "/players", label: "Players" },
  { href: "/about", label: "About" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-zinc-50 text-zinc-900 dark:bg-black dark:text-zinc-100">
        <header className="border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
            <Link
              href="/"
              className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-50"
            >
              EuroHoops
            </Link>
            <nav className="flex gap-5 text-sm font-medium text-zinc-600 dark:text-zinc-400">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-50"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>
        <main className="flex-1">
          <div className="mx-auto w-full max-w-5xl px-6 py-12">{children}</div>
        </main>
        <footer className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
          <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-6 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between dark:text-zinc-400">
            <span>© {new Date().getFullYear()} EuroHoops</span>
            <span>An unofficial fan-built guide. All views our own.</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
