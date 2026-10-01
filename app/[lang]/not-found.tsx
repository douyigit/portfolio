import Link from "next/link";
import { getDictionary } from "@/content/ui";
import { lang } from "next/root-params";
import { defaultLocale, hasLocale } from "@/lib/i18n";

export default async function NotFound() {
  const current = await lang();
  const locale = hasLocale(current) ? current : defaultLocale;
  const dict = getDictionary(locale).notFound;
  return (
    <div className="mx-auto flex min-h-[80dvh] max-w-xl flex-col items-center justify-center px-4 text-center">
      <p className="font-mono text-sm text-accent">error 404</p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight">{dict.title}</h1>
      <p className="mt-3 text-fg-muted">{dict.text}</p>
      <Link href={`/${locale}`} className="mt-8 rounded-xl bg-gradient-accent px-5 py-2.5 text-sm font-semibold text-accent-fg">
        {dict.home}
      </Link>
    </div>
  );
}
