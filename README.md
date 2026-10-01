# doguy.online — Doğu Yiğit Portfolyo

Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · Motion (Framer Motion) · EN/TR · Vercel

## Doldurulacaklar

- [x] **CV**: `public/cv/dogu-yigit-cv.pdf` (ATS sürümü). Güncellemek için aynı adla değiştir. İsteğe bağlı dil/fotoğraflı sürümler:
  - `dogu-yigit-cv-ats-en.pdf`, `dogu-yigit-cv-ats-tr.pdf` (ATS uyumlu)
  - `dogu-yigit-cv-en.pdf`, `dogu-yigit-cv-tr.pdf` (fotoğraflı)
- [ ] **Siber güvenlik araçları**: `content/profile.ts` içindeki `security.items`. Liste boş olduğu için kart şu an gizli.
- [ ] **Proje ekran görüntüleri**: `public/projects/<slug>/` altına koy, `content/projects.ts` içinde `cover` ve `screenshots` alanlarını doldur. Görsel yoksa gradyanlı bir placeholder gösterilir.
- [ ] **Proje linkleri**: `liveUrl` / `githubUrl` alanlarını doldur. Boş bırakılırsa butonlar görünmez.
- [ ] **Proje detay metinleri**: `problem`, `solution`, `architecture` ve `learnings` metinleri verdiğin bilgilerden yazılmış taslaklar. Özellikle `learnings` alanlarını (`// [ ] TODO: review` işaretli) gözden geçir.
- [ ] **RESEND_API_KEY**: İletişim formu bu anahtar olmadan hata verir ve ziyaretçiye e-posta adresini gösterir (aşağıya bak).

## Varsayımlar

- Eğitim tarihleri CV'ye göre girildi (yüksek lisans Şubat 2026 – 2027, lisans 2020 – 2025).
- Unvan Türkçe sürümde de "Full-Stack Developer" olarak bırakıldı.
- Hero'daki "Open to opportunities / Yeni fırsatlara açığım" rozeti `content/ui.ts` → `hero.available` alanında.
- İş başvuru aracının adı "Job Application Automation" olarak belirlendi.
- i18n için harici paket kullanılmadı: URL yapısı `/en/...` ve `/tr/...`. `/` adresi son seçilen dile, yoksa İngilizceye yönlendirir (`proxy.ts`).
- İletişim formu Resend ile çalışıyor (API route + honeypot). Ayrı bir paket gerekmiyor, doğrudan REST API çağrılıyor.

## Kurulum

```bash
npm install
cp .env.example .env.local   # RESEND_API_KEY'i doldur
npm run dev                  # http://localhost:3000
```

`npm run build` production build alır, `npm run lint` lint kontrolü yapar.

## İçerik güncelleme

Kod bilgisi gerekmeden düzenlenebilecek dosyalar:

| Dosya | İçerik |
| --- | --- |
| `content/profile.ts` | İsim, unvan, tanıtım, hakkımda, yetenekler, eğitim, linkler, CV yolları |
| `content/projects.ts` | Projeler (sıralama dosyadaki sırayla aynı) |
| `content/ui.ts` | Buton ve başlık metinleri (EN/TR) |
| `app/theme.css` | Tüm renkler (koyu ve açık tema). `--accent` / `--accent-2` imza gradyanını belirler |

Her metnin `en` ve `tr` sürümü var. Yeni proje eklemek için `projects` dizisine bir nesne ekle. Detay sayfası, OG görseli, sitemap girdisi ve filtre etiketleri otomatik oluşur.

## CV değiştirme

Yeni PDF'i aynı dosya adıyla `public/cv/` altına koyup push'lamak yeterli. Dosya adını değiştirmek istersen `content/profile.ts` → `cv` alanını güncelle.

## İletişim formu (Resend)

1. [resend.com](https://resend.com) hesabını **doguthecreator@gmail.com** ile aç ve bir API key oluştur.
2. Vercel → Project → Settings → Environment Variables altına `RESEND_API_KEY` ekle ve yeniden deploy et.
3. Varsayılan gönderici `onboarding@resend.dev`. Bu adres yalnızca hesap sahibinin e-postasına gönderebilir; bizim senaryomuz için yeterli. İstersen Resend'de `doguy.online` domainini doğrulayıp `CONTACT_FROM_EMAIL=Portfolio <hello@doguy.online>` ayarlayabilirsin.

Botlar, ziyaretçilere görünmeyen `website` alanını (honeypot) doldurduğunda mesaj sessizce yok sayılır.

## Deploy (Vercel)

1. Kodu GitHub'daki `douyigit/portfolio` reposunun `main` branch'ine push'la.
2. Vercel → **Add New → Project** → `portfolio` reposunu import et. Framework Next.js olarak otomatik algılanır, ayar değiştirmeye gerek yok.
3. Environment Variables bölümüne `RESEND_API_KEY` ekle → **Deploy**.
4. Bundan sonra `main`'e yapılan her push otomatik deploy edilir.

### doguy.online'ı eski projeden yeni projeye taşıma

DNS zaten Hostinger'dan Vercel'e yönlendirilmiş olduğu için DNS tarafında bir şey yapmana gerek yok. Sadece domainin Vercel'de hangi projeye bağlı olduğunu değiştireceksin:

1. **Eski proje** → Settings → Domains → `doguy.online` ve `www.doguy.online` için **Remove**.
2. **Yeni proje (portfolio)** → Settings → Domains → **Add** → `doguy.online`. `www.doguy.online` için de ekleyip apex'e yönlendir (Vercel bunu önerir).
3. Vercel DNS kayıtlarını doğrular. Kayıtlar zaten doğruysa (A `76.76.21.21` / CNAME `cname.vercel-dns.com` veya Vercel'in gösterdiği değerler) birkaç dakika içinde **Valid Configuration** olur ve SSL sertifikası otomatik yenilenir.
4. Kayıtlar farklı görünürse Hostinger → DNS Zone'da Vercel'in gösterdiği değerlerle güncelle.
5. Her şey çalışınca eski Vercel projesini arşivleyebilir veya silebilirsin.

## Klasör yapısı

```
app/
  [lang]/            layout, ana sayfa, 404, OG görseli
    projects/[slug]/ proje detay sayfası + OG görseli
  api/contact/       iletişim formu endpoint'i
  global-not-found   eşleşmeyen URL'ler için 404
  sitemap.ts, robots.ts, icon.svg
  theme.css          renk teması
components/          UI bileşenleri
content/             ← tüm içerik burada
lib/                 i18n, site URL, OG görsel üretici
proxy.ts             dil yönlendirmesi
public/cv, public/projects
```

## Notlar

- Animasyonlar `prefers-reduced-motion` açıkken kapanır.
- Koyu tema varsayılan. Seçilen tema `localStorage`'da saklanır.
- SEO: canonical + hreflang, Open Graph/Twitter görselleri (Türkçe karakter desteğiyle derleme sırasında üretilir), `sitemap.xml`, `robots.txt`, JSON-LD (Person).
