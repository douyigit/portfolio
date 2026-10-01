import { notFound } from "next/navigation";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";
import { getDictionary } from "@/content/ui";
import { hasLocale } from "@/lib/i18n";
import { Hero } from "@/components/hero";
import { getCvLinks } from "@/lib/cv";
import { About } from "@/components/about";
import { Section } from "@/components/section";
import { SkillsGrid } from "@/components/skills";
import { ProjectsGrid } from "@/components/projects";
import { Education } from "@/components/education";
import { ContactForm } from "@/components/contact";

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
        cvLinks={getCvLinks(lang, { ats: `${dict.hero.cvAts} (PDF)`, photo: `${dict.hero.cvPhoto} (PDF)`, default: dict.hero.cvDefault })}
      />
      <About lang={lang} dict={dict.about} />
      <Section id="skills" index={2} kicker={dict.skills.kicker} title={dict.skills.title}>
        <SkillsGrid lang={lang} skills={profile.skills} />
      </Section>
      <Section id="projects" index={3} kicker={dict.projects.kicker} title={dict.projects.title}>
        <ProjectsGrid lang={lang} dict={dict.projects} projects={projects} />
      </Section>
      <Education lang={lang} dict={dict.education} />
      <Section id="contact" index={5} kicker={dict.contact.kicker} title={dict.contact.title}>
        <ContactForm dict={dict.contact} />
      </Section>
    </>
  );
}
