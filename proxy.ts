import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, hasLocale, LOCALE_COOKIE, locales } from "@/lib/i18n";

// Sends locale-less URLs (e.g. "/" or "/projects/finlora") to the
// visitor's last chosen language, falling back to English.
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasPrefix = locales.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`));
  if (hasPrefix) return;

  const saved = request.cookies.get(LOCALE_COOKIE)?.value;
  const locale = saved && hasLocale(saved) ? saved : defaultLocale;
  request.nextUrl.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  // Skip API routes, Next internals, metadata files and anything with a file extension.
  matcher: ["/((?!api|_next|sitemap.xml|robots.txt|opengraph-image|icon|.*\\..*).*)"],
};
