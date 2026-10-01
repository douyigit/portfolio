/**
 * Interface text (buttons, headings, labels) in both languages.
 * Personal content lives in profile.ts and projects.ts.
 */
import type { Locale } from "@/lib/i18n";

const en = {
  nav: {
    about: "About",
    skills: "Skills",
    projects: "Projects",
    education: "Education",
    contact: "Contact",
    menu: "Menu",
    close: "Close menu",
    switchLang: "Türkçe'ye geç",
    toggleTheme: "Toggle colour theme",
    skip: "Skip to content",
  },
  hero: {
    greeting: "Hi, I'm",
    downloadCv: "Download CV",
    cvAts: "ATS-friendly",
    cvPhoto: "With photo",
    viewProjects: "View projects",
    contact: "Get in touch",
    available: "Open to opportunities",
  },
  about: {
    kicker: "about",
    title: "A bit about me",
    interests: "Interests",
    location: "Based in",
  },
  skills: { kicker: "skills", title: "What I work with" },
  projects: {
    kicker: "projects",
    title: "Selected work",
    all: "All",
    filterLabel: "Filter projects by technology",
    details: "Details",
    empty: "No projects use this technology yet.",
  },
  project: {
    back: "All projects",
    problem: "Problem",
    solution: "Solution",
    architecture: "Architecture",
    tech: "Technologies",
    features: "Highlights",
    screenshots: "Screenshots",
    learnings: "What I learned",
    links: "Links",
    live: "Live site",
    source: "Source code",
    noLinks: "This project isn't public yet — happy to walk you through it in an interview.",
    next: "Next project",
  },
  education: { kicker: "education", title: "Education", current: "Ongoing", gpa: "GPA" },
  contact: {
    kicker: "contact",
    title: "Let's build something",
    intro: "Have a role, a project or just a question? My inbox is open.",
    name: "Name",
    email: "Email",
    message: "Message",
    send: "Send message",
    sending: "Sending…",
    success: "Thanks! Your message is on its way — I'll get back to you soon.",
    error: "Something went wrong. Please email me directly at",
    invalid: "Please fill in all fields with a valid email.",
  },
  footer: { rights: "All rights reserved.", built: "Built with Next.js & Tailwind CSS." },
  notFound: { title: "Page not found", text: "The page you're looking for doesn't exist.", home: "Back home" },
};

export type Dictionary = typeof en;

const tr: Dictionary = {
  nav: {
    about: "Hakkımda",
    skills: "Yetenekler",
    projects: "Projeler",
    education: "Eğitim",
    contact: "İletişim",
    menu: "Menü",
    close: "Menüyü kapat",
    switchLang: "Switch to English",
    toggleTheme: "Renk temasını değiştir",
    skip: "İçeriğe geç",
  },
  hero: {
    greeting: "Merhaba, ben",
    downloadCv: "CV İndir",
    cvAts: "ATS uyumlu",
    cvPhoto: "Fotoğraflı",
    viewProjects: "Projeler",
    contact: "İletişim",
    available: "Yeni fırsatlara açığım",
  },
  about: {
    kicker: "hakkımda",
    title: "Biraz kendimden",
    interests: "İlgi alanları",
    location: "Konum",
  },
  skills: { kicker: "yetenekler", title: "Kullandığım teknolojiler" },
  projects: {
    kicker: "projeler",
    title: "Seçili projeler",
    all: "Tümü",
    filterLabel: "Projeleri teknolojiye göre filtrele",
    details: "Detay",
    empty: "Bu teknolojiyi kullanan proje henüz yok.",
  },
  project: {
    back: "Tüm projeler",
    problem: "Problem",
    solution: "Çözüm",
    architecture: "Mimari",
    tech: "Teknolojiler",
    features: "Öne çıkan özellikler",
    screenshots: "Ekran görüntüleri",
    learnings: "Öğrendiklerim",
    links: "Bağlantılar",
    live: "Canlı site",
    source: "Kaynak kod",
    noLinks: "Bu proje henüz herkese açık değil — mülakatta memnuniyetle detaylıca anlatırım.",
    next: "Sonraki proje",
  },
  education: { kicker: "eğitim", title: "Eğitim", current: "Devam ediyor", gpa: "GPA" },
  contact: {
    kicker: "iletişim",
    title: "Birlikte bir şeyler üretelim",
    intro: "Bir pozisyon, proje ya da sadece bir sorunuz mu var? Mesajınızı bekliyorum.",
    name: "Ad Soyad",
    email: "E-posta",
    message: "Mesaj",
    send: "Mesaj gönder",
    sending: "Gönderiliyor…",
    success: "Teşekkürler! Mesajınız iletildi — en kısa sürede dönüş yapacağım.",
    error: "Bir sorun oluştu. Lütfen doğrudan e-posta gönderin:",
    invalid: "Lütfen tüm alanları geçerli bir e-posta ile doldurun.",
  },
  footer: { rights: "Tüm hakları saklıdır.", built: "Next.js & Tailwind CSS ile geliştirildi." },
  notFound: { title: "Sayfa bulunamadı", text: "Aradığınız sayfa mevcut değil.", home: "Ana sayfaya dön" },
};

const dictionaries: Record<Locale, Dictionary> = { en, tr };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
