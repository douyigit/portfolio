import { Mail } from "lucide-react";
import { profile } from "@/content/profile";
import { GitHubIcon, LinkedInIcon } from "./brand-icons";

const links = [
  { href: profile.socials.github, label: "GitHub", Icon: GitHubIcon, external: true },
  { href: profile.socials.linkedin, label: "LinkedIn", Icon: LinkedInIcon, external: true },
  { href: `mailto:${profile.email}`, label: "Email", Icon: Mail, external: false },
];

export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex items-center gap-2 ${className}`}>
      {links.map(({ href, label, Icon, external }) => (
        <li key={label}>
          <a
            href={href}
            aria-label={label}
            {...(external && { target: "_blank", rel: "noopener noreferrer" })}
            className="grid size-10 place-items-center rounded-full border border-border text-fg-muted transition hover:-translate-y-0.5 hover:border-accent hover:text-accent"
          >
            <Icon className="size-[18px]" />
          </a>
        </li>
      ))}
    </ul>
  );
}
