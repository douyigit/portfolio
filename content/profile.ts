/**
 * ─────────────────────────────────────────────────────────────
 *  PROFILE — everything about you lives here.
 *  Edit text freely; every field has an English (en) and a
 *  Turkish (tr) version. No other file needs to change.
 * ─────────────────────────────────────────────────────────────
 */
import type { Localized } from "@/lib/i18n";

export type SkillCategory = {
  id: string;
  icon: "code" | "server" | "layout" | "brain" | "database" | "shield" | "wrench";
  title: Localized;
  items: string[];
};

export type EducationItem = {
  degree: Localized;
  school: string;
  period: Localized;
  gpa?: string;
  /** Shows the GPA as a highlighted badge. */
  highlight?: boolean;
  current?: boolean;
  description?: Localized;
};

export const profile = {
  name: "Doğu Yiğit",
  /** Used for SEO / JSON-LD where non-ASCII may be an issue. */
  nameAscii: "Dogu Yigit",
  location: { en: "Istanbul, Türkiye", tr: "İstanbul, Türkiye" } satisfies Localized,
  title: { en: "Full-Stack Developer", tr: "Full-Stack Developer" } satisfies Localized,
  subtitle: {
    en: "M.Sc. Cybersecurity @ Marmara University",
    tr: "Siber Güvenlik Yüksek Lisans @ Marmara Üniversitesi",
  } satisfies Localized,
  tagline: {
    en: "I build practical products — from web platforms to ML models and security tools — with a soft spot for the Turkish market.",
    tr: "Web platformlarından makine öğrenmesi modellerine ve güvenlik araçlarına kadar, Türkiye pazarına yönelik pratik ürünler geliştiriyorum.",
  } satisfies Localized,
  /** Short line used in <meta description> and social previews. */
  seoDescription: {
    en: "Doğu Yiğit — Full-Stack Developer based in Istanbul. Python, React, Next.js, Node.js, machine learning and cybersecurity. M.Sc. Cybersecurity student at Marmara University.",
    tr: "Doğu Yiğit — İstanbul'da Full-Stack Developer. Python, React, Next.js, Node.js, makine öğrenmesi ve siber güvenlik. Marmara Üniversitesi Siber Güvenlik yüksek lisans öğrencisi.",
  } satisfies Localized,

  about: {
    en: [
      "I'm a full-stack engineer with a Python-first mindset. I enjoy taking an idea all the way from a database schema to a polished interface — and shipping it.",
      "My work spans web development, machine learning and cybersecurity tooling. Lately I've been building platform-style products for the Turkish market: seller analytics for Trendyol, a reverse marketplace, and ML-driven predictions.",
      "I'm currently doing my M.Sc. in Cybersecurity at Marmara University, and I'm especially interested in entrepreneurship and platform business models.",
    ],
    tr: [
      "Python öncelikli düşünen bir full-stack mühendisiyim. Bir fikri veritabanı şemasından cilalı bir arayüze kadar uçtan uca geliştirip yayına almayı seviyorum.",
      "Web geliştirme, makine öğrenmesi ve siber güvenlik araçları üzerine çalışıyorum. Son dönemde Türkiye pazarına yönelik platform tabanlı ürünler geliştiriyorum: Trendyol satıcıları için analitik, tersine pazar yeri ve ML tabanlı tahmin sistemleri.",
      "Şu anda Marmara Üniversitesi'nde Siber Güvenlik yüksek lisansı yapıyorum; girişimcilik ve platform tabanlı iş modelleri özellikle ilgimi çekiyor.",
    ],
  } satisfies Localized<string[]>,

  interests: {
    en: ["Full-stack web", "Machine learning", "Cybersecurity", "Entrepreneurship", "Platform business models"],
    tr: ["Full-stack web", "Makine öğrenmesi", "Siber güvenlik", "Girişimcilik", "Platform iş modelleri"],
  } satisfies Localized<string[]>,

  email: "doguyigit1@gmail.com",
  socials: {
    github: "https://github.com/douyigit",
    linkedin: "https://linkedin.com/in/doguyigit",
  },

  /**
   * CV files live in /public/cv/. A button only appears once the file
   * actually exists, so you can drop the PDFs in whenever they are ready.
   */
  cv: {
    ats: { en: "/cv/dogu-yigit-cv-ats-en.pdf", tr: "/cv/dogu-yigit-cv-ats-tr.pdf" } satisfies Localized,
    photo: { en: "/cv/dogu-yigit-cv-en.pdf", tr: "/cv/dogu-yigit-cv-tr.pdf" } satisfies Localized,
  },

  skills: [
    {
      id: "languages",
      icon: "code",
      title: { en: "Languages", tr: "Diller" },
      items: ["Python", "TypeScript", "JavaScript", "Java", "C#", "C++", "Swift", "PHP"],
    },
    {
      id: "backend",
      icon: "server",
      title: { en: "Backend", tr: "Backend" },
      items: ["Flask", "Node.js", "Express", ".NET", "Laravel", "REST API"],
    },
    {
      id: "frontend",
      icon: "layout",
      title: { en: "Frontend", tr: "Frontend" },
      items: ["React", "Next.js", "Tailwind CSS"],
    },
    {
      id: "ml",
      icon: "brain",
      title: { en: "Data & ML", tr: "Veri & ML" },
      items: ["scikit-learn", "pandas"],
    },
    {
      id: "databases",
      icon: "database",
      title: { en: "Databases", tr: "Veritabanları" },
      items: ["PostgreSQL", "MySQL"],
    },
    {
      id: "security",
      icon: "shield",
      title: { en: "Cybersecurity", tr: "Siber Güvenlik" },
      // [ ] TODO: list the tools you actually use, e.g.
      //     "Burp Suite", "Nmap", "Wireshark", "Kali Linux"
      //     This card stays hidden while the list is empty.
      items: [],
    },
    {
      id: "devops",
      icon: "wrench",
      title: { en: "DevOps & Tools", tr: "DevOps & Araçlar" },
      items: ["Git", "Vercel", "Railway"],
    },
  ] satisfies SkillCategory[],

  education: [
    {
      degree: { en: "M.Sc. Cybersecurity", tr: "Siber Güvenlik Yüksek Lisans" },
      school: "Marmara University",
      period: { en: "2025 — 2027 (expected)", tr: "2025 — 2027 (beklenen)" },
      gpa: "4.00 / 4.00",
      highlight: true,
      current: true,
      description: {
        en: "First-term GPA: 4.00 / 4.00.",
        tr: "İlk dönem GPA: 4.00 / 4.00.",
      },
    },
    {
      degree: { en: "B.Sc. Computer Engineering", tr: "Bilgisayar Mühendisliği Lisans" },
      school: "Doğuş University",
      period: { en: "Graduated 2025", tr: "Mezuniyet 2025" },
      gpa: "3.00 / 4.00",
    },
  ] satisfies EducationItem[],
};
