/**
 * ─────────────────────────────────────────────────────────────
 *  PROJECTS — add, remove or reorder projects here.
 *
 *  • `slug` becomes the URL: /en/projects/<slug>
 *  • `liveUrl` / `githubUrl` are optional — buttons only show when set.
 *  • `cover` / `screenshots` are optional — paths under /public,
 *    e.g. "/projects/finlora/cover.png". Without a cover, a gradient
 *    placeholder using `colors` is generated automatically.
 *  • `tech` drives the filter buttons on the home page.
 * ─────────────────────────────────────────────────────────────
 */
import type { Localized } from "@/lib/i18n";

export type Project = {
  slug: string;
  name: string;
  category: Localized;
  summary: Localized;
  tech: string[];
  /** Two hex colours used for the placeholder cover and accents. */
  colors: [string, string];
  status?: Localized;
  liveUrl?: string;
  githubUrl?: string;
  cover?: string;
  screenshots?: { src: string; alt: Localized }[];
  problem: Localized;
  solution: Localized;
  architecture: Localized<string[]>;
  features: Localized<string[]>;
  learnings: Localized<string[]>;
};

export const projects: Project[] = [
  {
    slug: "alicidan",
    name: "Alıcıdan",
    category: { en: "Marketplace / Startup", tr: "Pazar Yeri / Girişim" },
    summary: {
      en: "Türkiye's reverse marketplace: buyers post what they need, sellers compete with offers.",
      tr: "Türkiye'nin tersine pazar yeri: alıcılar ihtiyacını ilan eder, satıcılar teklif verir.",
    },
    status: { en: "In development · Beta soon", tr: "Geliştiriliyor · Beta yakında" },
    tech: ["React", "Node.js", "Express", "PostgreSQL", "Papara", "Vercel", "Railway"],
    colors: ["#FF6B4A", "#FF2D78"],
    problem: {
      en: "On classic marketplaces buyers have to search through endless listings, and sellers compete only on visibility. There is no simple way for a buyer to say “this is what I need, at this budget” and let sellers come to them — safely.",
      tr: "Klasik pazar yerlerinde alıcı sayısız ilan arasında arama yapmak zorunda, satıcılar ise sadece görünürlük için yarışıyor. Alıcının “şuna, şu bütçeyle ihtiyacım var” deyip satıcıların kendisine gelmesini sağlayan — üstelik güvenli — basit bir yol yok.",
    },
    solution: {
      en: "Alıcıdan flips the flow: buyers publish a request, sellers send offers, and the buyer picks the best one. Payments are held in escrow via Papara until the buyer confirms delivery, which removes the trust problem for both sides.",
      tr: "Alıcıdan akışı tersine çeviriyor: alıcı talebini yayınlar, satıcılar teklif gönderir, alıcı en iyisini seçer. Ödeme, alıcı teslimatı onaylayana kadar Papara üzerinden escrow'da tutulur; böylece iki taraf için de güven sorunu ortadan kalkar.",
    },
    architecture: {
      en: [
        "React single-page frontend deployed on Vercel",
        "Node.js / Express REST API (40+ endpoints) deployed on Railway",
        "PostgreSQL as the primary relational database",
        "Papara integration for escrow-based payments",
      ],
      tr: [
        "Vercel'de yayınlanan React tek sayfa uygulaması",
        "Railway'de çalışan Node.js / Express REST API (40+ endpoint)",
        "Ana ilişkisel veritabanı olarak PostgreSQL",
        "Escrow tabanlı ödeme için Papara entegrasyonu",
      ],
    },
    features: {
      en: [
        "40+ REST API endpoints",
        "Secure payments with escrow",
        "Offer system between buyers and sellers",
        "8% seller-commission business model",
      ],
      tr: [
        "40+ REST API endpoint",
        "Escrow ile güvenli ödeme",
        "Alıcı ve satıcı arasında teklif sistemi",
        "%8 satıcı komisyonu iş modeli",
      ],
    },
    learnings: {
      // [ ] TODO: review — draft text
      en: [
        "Designing a two-sided marketplace where trust is part of the product",
        "Modelling payment states (held, released, refunded) safely",
        "Splitting frontend and API hosting across Vercel and Railway",
      ],
      tr: [
        "Güvenin ürünün bir parçası olduğu iki taraflı bir pazar yeri tasarlamak",
        "Ödeme durumlarını (bekletilen, serbest bırakılan, iade) güvenli şekilde modellemek",
        "Frontend ve API barındırmayı Vercel ile Railway arasında ayırmak",
      ],
    },
  },
  {
    slug: "finlora",
    name: "Finlora",
    category: { en: "SaaS / E-commerce Analytics", tr: "SaaS / E-ticaret Analitiği" },
    summary: {
      en: "A SaaS platform giving Trendyol sellers clear insight into sales, profitability and performance.",
      tr: "Trendyol satıcılarına satış, kârlılık ve performans analitiği sunan SaaS platformu.",
    },
    tech: ["Python", "Flask"],
    colors: ["#22D3EE", "#6366F1"],
    problem: {
      en: "Trendyol sellers see revenue, but the real picture — profit after commissions, shipping and returns, and which products actually perform — is scattered and hard to track.",
      tr: "Trendyol satıcıları ciroyu görüyor; ancak gerçek tablo — komisyon, kargo ve iadeler sonrası kâr ve hangi ürünlerin gerçekten iyi performans gösterdiği — dağınık ve takip etmesi zor.",
    },
    solution: {
      en: "Finlora collects seller data into a single, seller-focused dashboard that tracks sales and profitability over time, so sellers can make decisions on numbers instead of guesses.",
      tr: "Finlora satıcı verilerini tek bir satıcı odaklı panelde toplar; satış ve kârlılığı zaman içinde takip ederek satıcıların tahmin yerine rakamlarla karar vermesini sağlar.",
    },
    architecture: {
      en: [
        "Python / Flask web application",
        "Data processing layer that turns raw seller data into metrics",
        "Dashboard views for sales and profitability tracking",
      ],
      tr: [
        "Python / Flask web uygulaması",
        "Ham satıcı verisini metriklere dönüştüren veri işleme katmanı",
        "Satış ve kârlılık takibi için panel ekranları",
      ],
    },
    features: {
      en: ["Seller-focused analytics dashboard", "Sales and profitability tracking", "Performance analytics"],
      tr: ["Satıcı odaklı analitik paneli", "Satış ve kârlılık takibi", "Performans analitiği"],
    },
    learnings: {
      // [ ] TODO: review — draft text
      en: [
        "Building a SaaS product around a real marketplace's workflow",
        "Turning messy commercial data into metrics people can act on",
      ],
      tr: [
        "Gerçek bir pazar yerinin iş akışı etrafında SaaS ürün geliştirmek",
        "Dağınık ticari veriyi aksiyon alınabilir metriklere dönüştürmek",
      ],
    },
  },
  {
    slug: "ballinc",
    name: "Ballinc",
    category: { en: "Machine Learning", tr: "Makine Öğrenmesi" },
    summary: {
      en: "Predicts football match results with machine learning and delivers them through a Telegram bot.",
      tr: "Futbol maç sonuçlarını makine öğrenmesi ile tahmin edip Telegram bot üzerinden sunan sistem.",
    },
    tech: ["Python", "scikit-learn", "pandas", "Telegram Bot API"],
    colors: ["#34D399", "#0EA5E9"],
    problem: {
      en: "Football predictions are usually based on gut feeling. The goal was to see how far a data-driven model could go — and to make its predictions easy to consume.",
      tr: "Futbol tahminleri genellikle sezgiye dayanıyor. Amaç, veriye dayalı bir modelin ne kadar ileri gidebileceğini görmek ve tahminleri kolayca ulaşılabilir kılmaktı.",
    },
    solution: {
      en: "Ballinc processes historical match data with pandas, trains a scikit-learn model to predict outcomes, and sends the predictions to users through a Telegram bot.",
      tr: "Ballinc geçmiş maç verilerini pandas ile işler, sonuçları tahmin etmek için scikit-learn modeli eğitir ve tahminleri Telegram bot aracılığıyla kullanıcılara iletir.",
    },
    architecture: {
      en: [
        "Data pipeline: collecting and cleaning match data with pandas",
        "Feature engineering + scikit-learn prediction model",
        "Telegram Bot API as the user interface",
      ],
      tr: [
        "Veri hattı: maç verisinin pandas ile toplanması ve temizlenmesi",
        "Özellik mühendisliği + scikit-learn tahmin modeli",
        "Kullanıcı arayüzü olarak Telegram Bot API",
      ],
    },
    features: {
      en: ["Match data processing", "ML-based prediction model", "Predictions delivered via Telegram bot"],
      tr: ["Maç verisi işleme", "ML tabanlı tahmin modeli", "Tahminlerin Telegram bot ile iletilmesi"],
    },
    learnings: {
      // [ ] TODO: review — draft text
      en: [
        "Feature engineering matters more than model choice on noisy sports data",
        "Shipping an ML model behind a simple, familiar interface",
      ],
      tr: [
        "Gürültülü spor verisinde özellik mühendisliği model seçiminden daha önemli",
        "Bir ML modelini basit ve tanıdık bir arayüzün arkasında yayına almak",
      ],
    },
  },
  {
    slug: "eyg-development",
    name: "E.Y.G Development & Investment",
    category: { en: "Client Project / Corporate Web", tr: "Müşteri Projesi / Kurumsal Web" },
    summary: {
      en: "A 9-language corporate website for a construction, real-estate and development company in Northern Cyprus.",
      tr: "KKTC'de inşaat, gayrimenkul ve proje geliştirme alanında faaliyet gösteren şirket için 9 dilli kurumsal web sitesi.",
    },
    tech: ["PHP", "Laravel", "Blade", "Tailwind CSS", "Alpine.js", "Livewire", "Filament", "MySQL"],
    colors: ["#F59E0B", "#B45309"],
    problem: {
      en: "The company serves an international audience and needed a site that speaks their customers' languages — including right-to-left ones — and turns visitors into qualified quote requests, while staying easy to update without a developer.",
      tr: "Şirket uluslararası bir kitleye hitap ediyor ve müşterilerinin dilini — sağdan sola yazılanlar dahil — konuşan, ziyaretçileri nitelikli teklif taleplerine dönüştüren ve geliştiriciye ihtiyaç duymadan güncellenebilen bir siteye ihtiyaç duyuyordu.",
    },
    solution: {
      en: "A Laravel site with 9 languages (RTL for Arabic and Persian), a service catalogue with dynamic sub-services, smart quote/booking forms and a Filament admin panel for content management.",
      tr: "9 dil (Arapça ve Farsça için RTL), dinamik alt hizmetli hizmet kataloğu, akıllı teklif/rezervasyon formları ve içerik yönetimi için Filament admin paneli içeren bir Laravel sitesi.",
    },
    architecture: {
      en: [
        "Laravel + Blade server-rendered pages, styled with Tailwind CSS",
        "Alpine.js and Livewire for interactive components",
        "Filament admin panel for managing services and content",
        "MySQL database; form submissions stored and emailed",
      ],
      tr: [
        "Tailwind CSS ile stillendirilmiş, Laravel + Blade ile sunucu tarafında oluşturulan sayfalar",
        "Etkileşimli bileşenler için Alpine.js ve Livewire",
        "Hizmetleri ve içeriği yönetmek için Filament admin paneli",
        "MySQL veritabanı; form gönderimleri kaydedilip e-postayla iletilir",
      ],
    },
    features: {
      en: [
        "9 languages, with RTL layout for Arabic and Persian",
        "8 main services + dynamic sub-services",
        "Quote / booking form that pre-fills based on the selected service (email + database)",
        "WhatsApp integration",
        "Content management from the admin panel",
      ],
      tr: [
        "9 dil desteği, Arapça ve Farsça için RTL düzen",
        "8 ana hizmet + dinamik alt hizmetler",
        "Seçilen hizmete göre otomatik dolan teklif/rezervasyon formu (e-posta + veritabanı)",
        "WhatsApp entegrasyonu",
        "Admin panelden içerik yönetimi",
      ],
    },
    learnings: {
      // [ ] TODO: review — draft text
      en: [
        "Handling RTL layouts and multilingual content at scale",
        "Working with a real client: requirements, feedback and delivery",
      ],
      tr: [
        "RTL düzenleri ve çok dilli içeriği ölçekli şekilde yönetmek",
        "Gerçek bir müşteriyle çalışmak: gereksinimler, geri bildirim ve teslim",
      ],
    },
  },
  {
    slug: "job-application-automation",
    name: "Job Application Automation",
    category: { en: "Automation / Personal Tool", tr: "Otomasyon / Kişisel Araç" },
    summary: {
      en: "Tracks LinkedIn and Kariyer.net applications via Gmail and auto-applies to quick-apply listings.",
      tr: "LinkedIn ve Kariyer.net başvurularını Gmail entegrasyonuyla takip eden, hızlı başvuru ilanlarına otomatik başvuran araç.",
    },
    tech: ["Gmail API", "Web Automation"],
    colors: ["#A78BFA", "#EC4899"],
    problem: {
      en: "Applying to many jobs across platforms quickly becomes chaotic: it's hard to remember where you applied and which companies replied.",
      tr: "Birden fazla platformda çok sayıda ilana başvurmak kısa sürede kaosa dönüşüyor: nereye başvurduğunu ve hangi şirketin dönüş yaptığını hatırlamak zorlaşıyor.",
    },
    solution: {
      en: "A personal tool that reads application emails through the Gmail API to keep a status overview, and automates applications for quick-apply listings.",
      tr: "Gmail API ile başvuru e-postalarını okuyarak durum takibi yapan ve hızlı başvuru ilanlarına başvuruyu otomatikleştiren kişisel bir araç.",
    },
    architecture: {
      en: [
        "Gmail API integration for parsing application-related emails",
        "Web automation for quick-apply listings",
        "Local status tracking of every application",
      ],
      tr: [
        "Başvuruyla ilgili e-postaları ayrıştırmak için Gmail API entegrasyonu",
        "Hızlı başvuru ilanları için web otomasyonu",
        "Her başvurunun yerel olarak durum takibi",
      ],
    },
    features: {
      en: ["Gmail-based application tracking", "LinkedIn and Kariyer.net support", "Automatic quick-apply"],
      tr: ["Gmail tabanlı başvuru takibi", "LinkedIn ve Kariyer.net desteği", "Otomatik hızlı başvuru"],
    },
    learnings: {
      // [ ] TODO: review — draft text
      en: ["Working with Google OAuth and the Gmail API", "Building robust automation against changing web pages"],
      tr: ["Google OAuth ve Gmail API ile çalışmak", "Değişen web sayfalarına karşı dayanıklı otomasyon kurmak"],
    },
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export const allTech = Array.from(new Set(projects.flatMap((p) => p.tech))).sort((a, b) =>
  a.localeCompare(b),
);
