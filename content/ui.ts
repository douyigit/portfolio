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
    cv: "Download CV",
    home: "Doğu Yiğit — home",
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
    cvDefault: "CV (PDF)",
    viewProjects: "View projects",
    contact: "Get in touch",
    available: "Open to opportunities",
  },
  about: {
    title: "About me",
    interests: "Interests",
    location: "Based in",
  },
  skills: { title: "Skills & tools" },
  projects: {
    title: "Things I've built",
    details: "Details",
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
  education: { title: "Education", current: "Ongoing", gpa: "GPA" },
  contact: {
    title: "Let's work together",
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
  footer: { rights: "All rights reserved." },
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
    cv: "CV İndir",
    home: "Doğu Yiğit — ana sayfa",
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
    cvDefault: "CV (PDF)",
    viewProjects: "Projeler",
    contact: "İletişim",
    available: "Yeni fırsatlara açığım",
  },
  about: {
    title: "Hakkımda",
    interests: "İlgi alanları",
    location: "Konum",
  },
  skills: { title: "Yetenekler & araçlar" },
  projects: {
    title: "Geliştirdiklerim",
    details: "Detay",
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
  education: { title: "Eğitim", current: "Devam ediyor", gpa: "GPA" },
  contact: {
    title: "Birlikte çalışalım",
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
  footer: { rights: "Tüm hakları saklıdır." },
  notFound: { title: "Sayfa bulunamadı", text: "Aradığınız sayfa mevcut değil.", home: "Ana sayfaya dön" },
};

const dictionaries: Record<Locale, Dictionary> = { en, tr };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
