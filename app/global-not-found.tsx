import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "404 — Page not found",
  description: "The page you are looking for does not exist.",
};

export default function GlobalNotFound() {
  return (
    <html lang="en" data-theme="dark">
      <body className="font-sans">
        <main className="mx-auto flex min-h-dvh max-w-xl flex-col items-center justify-center px-4 text-center">
          <p className="font-mono text-sm text-accent">error 404</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight">Page not found</h1>
          <p className="mt-3 text-fg-muted">The page you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/" className="mt-8 rounded-xl bg-gradient-accent px-5 py-2.5 text-sm font-semibold text-accent-fg">
            Back home
          </Link>
        </main>
      </body>
    </html>
  );
}
