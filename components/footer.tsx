import { profile } from "@/content/profile";
import type { Dictionary } from "@/content/ui";
import type { Locale } from "@/lib/i18n";
import { SocialLinks } from "./social-links";

export function Footer({ dict }: { lang: Locale; dict: Dictionary["footer"] }) {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6">
        <div className="text-center text-sm text-fg-subtle sm:text-left">
          <p>
            © {new Date().getFullYear()} {profile.name}. {dict.rights}
          </p>
          <p className="mt-1 font-mono text-xs">{dict.built}</p>
        </div>
        <SocialLinks />
      </div>
    </footer>
  );
}
