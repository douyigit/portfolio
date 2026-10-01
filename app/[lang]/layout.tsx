import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import { profile } from "@/content/profile";
import { getDictionary } from "@/content/ui";
import { hasLocale, locales } from "@/lib/i18n";
import { siteUrl } from "@/lib/site";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { MotionProvider } from "@/components/motion-provider";
import { ScrollProgress } from "@/components/scroll-progress";
import { Loader } from "@/components/loader";
import { getCvLinks } from "@/lib/cv";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin", "latin-ext"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin", "latin-ext"] });

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const dynamicParams = false;

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
  ],
};

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const title = `${profile.name} — ${profile.title[lang]}`;
  return {
    metadataBase: new URL(siteUrl),
    title: { default: title, template: `%s · ${profile.name}` },
    description: profile.seoDescription[lang],
    authors: [{ name: profile.name, url: siteUrl }],
    alternates: {
      canonical: `/${lang}`,
      languages: { en: "/en", tr: "/tr", "x-default": "/en" },
    },
    openGraph: {
      type: "website",
      siteName: profile.name,
      title,
      description: profile.seoDescription[lang],
      locale: lang === "tr" ? "tr_TR" : "en_US",
      url: `/${lang}`,
    },
    twitter: { card: "summary_large_image", title, description: profile.seoDescription[lang] },
  };
}

// Runs before paint: applies the saved theme (dark by default) and turns on
// the intro loader only for the first page view of a browser session.
const themeScript = `(function(){var d=document.documentElement;try{d.dataset.theme=localStorage.getItem("theme")==="light"?"light":"dark"}catch(e){d.dataset.theme="dark"}try{if(!sessionStorage.getItem("intro")){sessionStorage.setItem("intro","1");d.classList.add("intro")}}catch(e){}})()`;

export default async function LangLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);
  const cvHref = getCvLinks({ main: "", ats: "" })[0]?.href;

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    alternateName: profile.nameAscii,
    jobTitle: profile.title.en,
    url: siteUrl,
    email: `mailto:${profile.email}`,
    address: { "@type": "PostalAddress", addressLocality: "Istanbul", addressCountry: "TR" },
    sameAs: [profile.socials.github, profile.socials.linkedin],
    alumniOf: profile.education.map((e) => ({ "@type": "CollegeOrUniversity", name: e.school })),
    knowsAbout: profile.skills.flatMap((s) => s.items),
  };

  return (
    <html
      lang={lang}
      data-theme="dark"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }}
        />
      </head>
      <body className="min-h-dvh font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-fg"
        >
          {dict.nav.skip}
        </a>
        <Loader name={profile.name} />
        <MotionProvider>
          <ScrollProgress />
          <Navbar lang={lang} dict={dict.nav} cvHref={cvHref} />
          <main id="main">{children}</main>
          <Footer lang={lang} dict={dict.footer} />
        </MotionProvider>
      </body>
    </html>
  );
}
