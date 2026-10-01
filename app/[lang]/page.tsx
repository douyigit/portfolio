import { existsSync } from "node:fs";
import path from "node:path";
import { notFound } from "next/navigation";
import { profile } from "@/content/profile";
import { allTech, projects } from "@/content/projects";
import { getDictionary } from "@/content/ui";
import { hasLocale, type Locale } from "@/lib/i18n";
import { Hero, type CvLink } from "@/components/hero";
import { About } from "@/components/about";
import { Section } from "@/components/section";
import { SkillsGrid } from "@/components/skills";
import { ProjectsGrid } from "@/components/projects";
import { Education } from "@/components/education";
import { ContactForm } from "@/components/contact";

const publicFileExists = (href: string) => existsSync(path.join(process.cwd(), "public", href));

/** Only offers CVs whose PDF is actually in /public/cv (current language first). */
function getCvLinks(lang: Locale, dict: ReturnType<typeof getDictionary>["hero"]): CvLink[] {
  const options: CvLink[] = [
    { label: `${dict.cvAts} (PDF)`, href: profile.cv.ats[lang] },
    { label: `${dict.cvPhoto} (PDF)`, href: profile.cv.photo[lang] },
  ];
  return options.filter((o) => publicFileExists(o.href));
}

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <>
      <Hero
        lang={lang}
        dict={dict.hero}
        name={profile.name}
        title={profile.title[lang]}
        subtitle={profile.subtitle[lang]}
        tagline={profile.tagline[lang]}
        location={profile.location[lang]}
        cvLinks={getCvLinks(lang, dict.hero)}
      />
      <About lang={lang} dict={dict.about} />
      <Section id="skills" index={2} kicker={dict.skills.kicker} title={dict.skills.title}>
        <SkillsGrid lang={lang} skills={profile.skills} />
      </Section>
      <Section id="projects" index={3} kicker={dict.projects.kicker} title={dict.projects.title}>
        <ProjectsGrid lang={lang} dict={dict.projects} projects={projects} tech={allTech} />
      </Section>
      <Education lang={lang} dict={dict.education} />
      <Section id="contact" index={5} kicker={dict.contact.kicker} title={dict.contact.title}>
        <ContactForm dict={dict.contact} />
      </Section>
    </>
  );
}
