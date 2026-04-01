const fs = require('fs');

const questions = [
  {
    "id": "1",
    "text": "GRC kavramlarının Türkçe karşılıkları aşağıdakilerden hangisinde doğru verilmiştir?",
    "options": [
      { "key": "A", "text": "Global Risk Kontrolü" },
      { "key": "B", "text": "Yönetişim (Governance) - Risk - Uyum (Compliance)" },
      { "key": "C", "text": "Genel Kaynak Denetimi" },
      { "key": "D", "text": "Güvenlik, Gözetim ve Çözümleme" }
    ],
    "answer": "B"
  },
  {
    "id": "2",
    "text": "Kurumsal güvenlik yapısında Yönetişim (Governance) katmanının temel görevi aşağıdakilerden hangisidir?",
    "options": [
      { "key": "A", "text": "Operasyonel ağ güvenliğini sağlamak ve güvenlik duvarlarını yönetmek" },
      { "key": "B", "text": "Organizasyonun hedeflerini, stratejilerini ve güvenlik politikalarını belirlemek" },
      { "key": "C", "text": "Sızma testlerini gerçekleştirmek ve zafiyet taraması yapmak" },
      { "key": "D", "text": "Günlük sistem loglarını incelemek" }
    ],
    "answer": "B"
  },
  {
    "id": "3",
    "text": "Yönetişim döngüsünde kullanılan 'EDM' kısaltmasının açılımı nedir?",
    "options": [
      { "key": "A", "text": "Evaluate (Değerlendir) - Direct (Yönlendir) - Monitor (İzle)" },
      { "key": "B", "text": "Edit (Düzenle) - Delete (Sil) - Move (Taşı)" },
      { "key": "C", "text": "Enterprise Data Management (Kurumsal Veri Yönetimi)" },
      { "key": "D", "text": "Event Detection Method (Olay Tespit Yöntemi)" }
    ],
    "answer": "A"
  },
  {
    "id": "4",
    "text": "Yönetim Organı (Governing Body) ile İcra Yöneticileri (Managers) arasındaki kurumsal bilgi akışı uyum açısından nasıldır?",
    "options": [
      { "key": "A", "text": "Yöneticiler stateji belirler, yönetim organı operasyonel işlemleri uygular." },
      { "key": "B", "text": "Yönetim organı strateji ve politika iletir; yöneticiler onay için teklif ve plan sunar." },
      { "key": "C", "text": "Her iki birim de birbirinden tamamen bağımsız güvenlik politikaları kurgular." },
      { "key": "D", "text": "Yalnızca dış denetim bulguları aracılığıyla ortak rapor alırlar." }
    ],
    "answer": "B"
  },
  {
    "id": "5",
    "text": "Kurumsal BT Yönetişimi (IT Governance) süreçleri tasarlanırken referans alınan temel ISO standardı hangisidir?",
    "options": [
      { "key": "A", "text": "ISO 27001" },
      { "key": "B", "text": "ISO 9001" },
      { "key": "C", "text": "ISO 38500" },
      { "key": "D", "text": "ISO 22301" }
    ],
    "answer": "C"
  },
  {
    "id": "6",
    "text": "Geniş kapsamlı siber risk değerlendirme süreçlerinde kullanılan risk hesaplama mantığı aşağıdakilerden hangisidir?",
    "options": [
      { "key": "A", "text": "Risk = Tehdit Girdisi + Zafiyet Skoru" },
      { "key": "B", "text": "Risk = Olasılık (Probability) x Sistem Etkisi (Impact)" },
      { "key": "C", "text": "Risk = İş Etkisi / Yönetim Planı" },
      { "key": "D", "text": "Risk = Toplam Maliyet / Güvenlik Bütçesi" }
    ],
    "answer": "B"
  },
  {
    "id": "7",
    "text": "Uluslararası standartlarda 'Risk' kavramının kurumsal açıdan genel tanımı aşağıdakilerden hangisidir?",
    "options": [
      { "key": "A", "text": "Bir bilişim sisteminin tamamen erişilemez hale gelmesidir." },
      { "key": "B", "text": "Kurumun stratejik hedefleri üzerindeki belirsizliğin etkisidir." },
      { "key": "C", "text": "Organizasyondaki ağ donanımlarının donanımsal arızalanma ihtimalidir." },
      { "key": "D", "text": "Zararlı yazılımların şirket e-postalarına yönelik hedeflenmiş saldırılarıdır." }
    ],
    "answer": "B"
  },
  {
    "id": "8",
    "text": "Sürekli iyileştirme prensibine dayalı PUKÖ döngüsünde 'Kontrol Et (Check)' aşamasında odaklanılması gereken eylem nedir?",
    "options": [
      { "key": "A", "text": "Güvenlik zafiyet politikaları tamamen yeniden yazılır." },
      { "key": "B", "text": "Düzeltici süreçler derhal üretim ortamına alınır." },
      { "key": "C", "text": "Uygulama sonuçları ölçülür, politikalarla kıyaslanır ve varsa hedeften sapmalar tespit edilir." },
      { "key": "D", "text": "Siber saldırı riskleri ilk kez masaya yatırılır." }
    ],
    "answer": "C"
  },
  {
    "id": "9",
    "text": "PUKÖ döngüsünde yer alan 'Önlem Al / Uygula (Act)' aşamasının temel organizasyonel hedefi nedir?",
    "options": [
      { "key": "A", "text": "Tespit edilen aksaklıkların düzeltici eylemlerle kalıcı çözüme kavuşturulması ve standartlaşmanın oluşturulması." },
      { "key": "B", "text": "Döngünün baştan tasarlanması amacıyla tüm IT operasyonlarının durdurulması." },
      { "key": "C", "text": "Yalnızca bağımsız dış denetim bulgularının raporlanması." },
      { "key": "D", "text": "Teknik personelin sosyal mühendislik eğitimlerinin yenilenmesi." }
    ],
    "answer": "A"
  },
  {
    "id": "10",
    "text": "Etkin bir Siber Güvenlik risk yönetimi ve değerlendirme sürecinin başlangıç (ilk) adımı olarak ne yapılmalıdır?",
    "options": [
      { "key": "A", "text": "Kriptografik algoritmaların anahtarlarının rotasyona sokulması." },
      { "key": "B", "text": "Korunması gereken varlıkların (Assets) sistemli biçimde belirlenmesi ve güncel envanterlerinin çıkarılması." },
      { "key": "C", "text": "Geniş ölçekli ddos simülasyonlarının yapılması." },
      { "key": "D", "text": "Mevcut firewall konfigürasyon dosyalarının yedeklenmesi." }
    ],
    "answer": "B"
  },
  {
    "id": "11",
    "text": "NIST Siber Güvenlik Çerçevesinin (CSF) yenilenen 2.0 versiyonu ile mevcut yapıya tam merkezde eklenen yeni ana fonksiyon hangisidir?",
    "options": [
      { "key": "A", "text": "Identify (Tanımla)" },
      { "key": "B", "text": "Govern (Yönetişim)" },
      { "key": "C", "text": "Recover (Kurtar)" },
      { "key": "D", "text": "Respond (Yanıtla)" }
    ],
    "answer": "B"
  },
  {
    "id": "12",
    "text": "NIST CSF kapsamında, kritik dijital varlıkları güvence altına almak, operasyonları kısıtlamak ve yetkisiz erişimi engellemek için kurulan mekanizmalar hangi fonksiyon altında yer alır?",
    "options": [
      { "key": "A", "text": "Identify (Tanımla)" },
      { "key": "B", "text": "Govern (Yönetişim)" },
      { "key": "C", "text": "Protect (Koru)" },
      { "key": "D", "text": "Respond (Yanıtla)" }
    ],
    "answer": "C"
  },
  {
    "id": "13",
    "text": "Siber saldırı riskleri esnasında sızıntı veya potansiyel anomalilerin tespit edilmesi için ağ trafiğinin analizini öngören NIST CSF metodu hangisidir?",
    "options": [
      { "key": "A", "text": "Detect (Tespit Et)" },
      { "key": "B", "text": "Recover (Kurtar)" },
      { "key": "C", "text": "Protect (Koru)" },
      { "key": "D", "text": "Respond (Yanıtla)" }
    ],
    "answer": "A"
  },
  {
    "id": "14",
    "text": "Olay müdahale süreçlerinde (Incident Response) 'Mitigation / Zarar Azaltma' yaklaşımının kavramsal temelini ne oluşturur?",
    "options": [
      { "key": "A", "text": "Saldırı anında kolluk kuvvetlerini siber istihbarat arayüzüne dahil etmek." },
      { "key": "B", "text": "Veri ifşasını sınırlandıracak, saldırganların hedefe ulaşmasını geçici de olsa kesecek ilk kısıtlama yöntemlerini almak." },
      { "key": "C", "text": "Zararlıya maruz kalmış tüm sunucu disklerini anında formatlayıp yenilemek." },
      { "key": "D", "text": "Hedef odaklı oltalama tatbikatlarını hızlandırmak." }
    ],
    "answer": "B"
  },
  {
    "id": "15",
    "text": "Modern bilgi ve siber güvenliğin üzerine inşa edildiği, yetkisiz değişikliklerden korunma, bilginin eksiksizliği ve ifşanın engellenmesini ifade eden 'CIA Triad'ın yapısı nasıldır?",
    "options": [
      { "key": "A", "text": "Computer - Internet - Access" },
      { "key": "B", "text": "Confidentiality (Gizlilik) - Integrity (Bütünlük) - Availability (Erişilebilirlik)" },
      { "key": "C", "text": "Cyber - Intelligence - Assessment" },
      { "key": "D", "text": "Control - Information - Analysis" }
    ],
    "answer": "B"
  },
  {
    "id": "16",
    "text": "ISO 27001 gereksinimlerinde yer alan 'Bilgi Güvenliği İhlal Olayı Yönetimi', kuruma öncelikli olarak ne tür bir altyapı sunar?",
    "options": [
      { "key": "A", "text": "İnternet bant genişliği tüketim metriklerinin düzenlenmesini." },
      { "key": "B", "text": "Hizmet kesintileri ile zafiyet ve sızıntı durumlarında olayın nasıl raporlanıp, tespit edilip kime iletileceği prosedürlerini." },
      { "key": "C", "text": "Yeni satın alınacak IDS/IPS donanımlarının markalarının belirlenmesini." },
      { "key": "D", "text": "Olayla hiç ilgisi olmayan kullanıcıların şifre rotasyonlarını iptal edilmesini." }
    ],
    "answer": "B"
  },
  {
    "id": "17",
    "text": "Fiziksel ve Çevresel Güvenlik alanındaki denetim ve kontroller kurum içerisinde hangi risk senaryosunu doğrudan engeller?",
    "options": [
      { "key": "A", "text": "Uygulama katmanındaki (L7) SQL Injection tarzı yazılımsal istismarları." },
      { "key": "B", "text": "İş istasyonlarının çalınmasını veya sunucu odalarına yapılacak yetkisiz fiziksel müdahaleleri." },
      { "key": "C", "text": "Sosyal medya üzerinden gerçekleştirilen marka karalama aktivitelerini." },
      { "key": "D", "text": "Veri tabanları arasına atılan hatalı verilerin senkronizasyon bozukluklarını." }
    ],
    "answer": "B"
  },
  {
    "id": "18",
    "text": "Kurum Bilgi Güvenliği Yönetimi Sistemlerinin (BGYS) risk parametrelerindeki nihai hedefi matematiksel olarak nasıldır?",
    "options": [
      { "key": "A", "text": "İş süreçlerindeki tüm siber riskleri %100 oranında silmek." },
      { "key": "B", "text": "Saldırı yüzeylerindeki zafiyetleri yönetim tarafından onaylanmış makul (kabul edilebilir) tolerans seviyelerine çekmek." },
      { "key": "C", "text": "Hiçbir yasal risk bırakmayacak biçimde sistemleri dış dünyaya kapatmak." },
      { "key": "D", "text": "Yalnızca sızma testi skorerliği bazında hedeflenen puana ulaşmak." }
    ],
    "answer": "B"
  },
  {
    "id": "19",
    "text": "Kişisel Verilerin Korunması mevzuatı bağlamında, bireylere karşı ayrımcılık yapılmasına sebep olabilecek 'Özel Nitelikli' (Hassas Veri) kategoride hangisi yer alır?",
    "options": [
      { "key": "A", "text": "İlgili kişiye tahsis edilen ofis dahili numarası." },
      { "key": "B", "text": "Özgeçmiş içerisindeki referans kişiler listesi." },
      { "key": "C", "text": "Biyometrik veya genetik veriler (Parmak izi, sağlık tahlilleri, ceza mahkumiyeti, din vb.)." },
      { "key": "D", "text": "Ağ üzerinden alınan dinamik IPv4 adresi." }
    ],
    "answer": "C"
  },
  {
    "id": "20",
    "text": "KVKK literatüründe yer alan 'Kişisel Veri İşlemek' kavramının kapsayıcılığı nedir?",
    "options": [
      { "key": "A", "text": "Verilerin salt elektronik yollarla depolama araçlarına yazılmasını ifede eder." },
      { "key": "B", "text": "Verilerin şirket içerisinde veya kurumlar arası veri akışında üçüncü taraflara ticari satışını kapsar." },
      { "key": "C", "text": "Hukuken yetkisiz yollarla elde edilmiş bilgi bankalarını analiz etmeyi tanımlar." },
      { "key": "D", "text": "Verinin elde edilmesi, analizi, depolanması, güncellenmesi veya yasadışı dahi olsa geri getirilmesi dahil kişisel veri üzerindeki istisnasız tüm aksiyonları kapsar." }
    ],
    "answer": "D"
  },
  {
    "id": "21",
    "text": "Kişisel veriler kapsamında süreçlerin hukuka uyumluluğunu temin eden 'Ölçülülük' ilkesi tam olarak neyi sınırlamaktadır?",
    "options": [
      { "key": "A", "text": "Yalnızca belirli, açık ve işleme amacına hizmet edecek kadar asgari düzeyde verinin toplanmasını gerektirir." },
      { "key": "B", "text": "Aylık sunucu yedekleme kotalarının belli bir terabaytla limitlenmesini öngörür." },
      { "key": "C", "text": "Kişilerin rızasının belirli bir zaman diliminden sonra zaman aşımına uğramasını sağlar." },
      { "key": "D", "text": "Sadece 18 yaş altı için olan verilerin şifreleneceği kapasiteyi belirler." }
    ],
    "answer": "A"
  },
  {
    "id": "22",
    "text": "Dijital ortamda bulundurulan ve sızıntısı durumunda mağduriyet potansiyeli kritik olan 'Özel Nitelikli Kişisel Veriler'in saklanmasıyla alakalı en temel teknik güvenlik önlemi nedir?",
    "options": [
      { "key": "A", "text": "Dış port bağlantılarının manuel kapatılması." },
      { "key": "B", "text": "İlgili verilerin şifrelenerek (Kriptografi kullanılarak) depolanması ve iletilmesi." },
      { "key": "C", "text": "Söz konusu veri tabanlarının doğrudan cloud platformlara taşınması." },
      { "key": "D", "text": "Veri depolama yongalarının çevrimdışı (offline) ortamlarda tutulması." }
    ],
    "answer": "B"
  },
  {
    "id": "23",
    "text": "Kurumun, veri sahibine ait kişisel bilgilerin niçin ve nasıl işleneceğine dair sunması gereken 'Aydınlatma Yükümlülüğü' (Privacy Notice) hukuken kimin sorumluluğundadır?",
    "options": [
      { "key": "A", "text": "Veri tabanı mimarisini kurgulayan siber güvenlik uzmanının." },
      { "key": "B", "text": "Pazarlama ve reklam kampanyalarını gerçekleştiren ajansın." },
      { "key": "C", "text": "Kişisel verilerin işleme süreçlerini ve amaçlarını saptayan Veri Sorumlusu'nun." },
      { "key": "D", "text": "Yasal denetim gerçekleştiren savcılık makamının." }
    ],
    "answer": "C"
  },
  {
    "id": "24",
    "text": "Kişisel verilerin, veri koruma kanunlarına mutlak surette aykırı bir biçimde kayıt altına alınmasının, Türk Ceza Kanunu karşılığındaki yeri nasıldır?",
    "options": [
      { "key": "A", "text": "Kabahatlar kanunu kapsamında değerlendirilerek sadece uyarı alınır." },
      { "key": "B", "text": "Yalnızca kurum içi disiplin cezasına çarptırılır, yargılanmaz." },
      { "key": "C", "text": "Suç kapsamında değerlendirilerek ilgili faillere doğrudan 1 yıldan 3 yıla kadar hapis cezası uygulanır." },
      { "key": "D", "text": "Kamu yararında istinaf sözleşmeleriyle suç unsuru kaldırılır." }
    ],
    "answer": "C"
  },
  {
    "id": "25",
    "text": "Siber saldırı sonucunda KVKK İdari Tedbirlerin veya Veri Güvenliği yükümlülüğünün ihlali dolayısıyla firmalara kesilebilecek cezai yaptırımların karakteristik boyutu (örneğin güncel sınırlar içerisinde) ne seviyededir?",
    "options": [
      { "key": "A", "text": "Sabit ve değişmez 10.000 TL bandında para cezaları." },
      { "key": "B", "text": "Uluslararası platformlara ifşası durumunda lisansların kısıtlanması." },
      { "key": "C", "text": "Milyonlarca lira limitlerine uzanan, firmanın yapısına paralel oranda yüksek idari para cezaları." },
      { "key": "D", "text": "Asgari tutarlarda tutularak şirketlerin batması önlenir." }
    ],
    "answer": "C"
  },
  {
    "id": "26",
    "text": "Veri maskeleme ve imha politikalarına göre, kanuni saklama zorunluluğu biten veya toplanma amacı ortadan kalkan verilere ne uygulanmalıdır?",
    "options": [
      { "key": "A", "text": "Şifrelenerek sonsuza denk arşiv disklerinde saklanmalıdır." },
      { "key": "B", "text": "Kanuna ve rehberlere uygun güvenli silme, tam imha etme veya ifşa edilemeyecek düzeyde anonim hale getirme süreçleri." },
      { "key": "C", "text": "Dış hizmet sağlayıcılara açık veri olarak satılmalıdır." },
      { "key": "D", "text": "Üzerinde testler yapmak üzere yedek veri tabanlarına klonlanmalıdır." }
    ],
    "answer": "B"
  },
  {
    "id": "27",
    "text": "Organizasyondaki kişisel veri güvenliği sistemlerinde idari tedbir olarak kabul edilen eylem çeşidi hangisidir?",
    "options": [
      { "key": "A", "text": "DLP (Veri Kaybı Önleme) yazılımlarının lisanslanması." },
      { "key": "B", "text": "Çalışanlara periyodik veri güvenliği farkındalık eğitimlerinin verilmesi ve iç politikaların yayınlanması." },
      { "key": "C", "text": "Donanımsal güvenlik anahtarlarının dağıtılması." },
      { "key": "D", "text": "Dosya tünelleme ve VPN sistemlerinin yapılandırılması." }
    ],
    "answer": "B"
  },
  {
    "id": "28",
    "text": "Devletlerin altyapılarında (Enerji, Telekomünikasyon, Ulaşım vd.) gerçekleşecek büyük çaplı bir siber istismar temel olarak hangi riski tetikler?",
    "options": [
      { "key": "A", "text": "Sivil düzende aksamalar, kaos ve ulusal güvenlik nezdinde ciddi itibar kayıtları." },
      { "key": "B", "text": "Yalnızca taşeronların donanım karlarındaki düşüşleri." },
      { "key": "C", "text": "Vardiya yöneticilerinin rotasyon değişikliklerini." },
      { "key": "D", "text": "Genel lokal elektrik fazındaki kısa süreli kesintiyi." }
    ],
    "answer": "A"
  },
  {
    "id": "29",
    "text": "Mevzuat bağlamında Veri Sorumluluları Siciline (VERBİS) kurumu kaydettirme veya periyodik veri güncelleme yükümlülüğünün atlanması hangi neticeyi doğurur?",
    "options": [
      { "key": "A", "text": "Operasyonel BT loglarında anomaliye sebep olur." },
      { "key": "B", "text": "Ciddi yasal yükümlülük ihlali çerçevesinde kuruma yüksek meblağlarda idari yaptırım (Para C.) yansıtılır." },
      { "key": "C", "text": "Bilgi İşlem yetkililerine adli yargılanma süreci başlatılır." },
      { "key": "D", "text": "Geçici kapatma veya sunucu erişimi sınırlandırması uygulanır." }
    ],
    "answer": "B"
  },
  {
    "id": "30",
    "text": "NIST CSF'nin Recover (Kurtar) evresindeki stratejilerden biri olan, sistemleri felaket senaryosundan sonra en çabuk eski haline döndürme metrikleri için hangisi temel teşkil eder?",
    "options": [
      { "key": "A", "text": "Tehdit edici veritabanlarının tam log analiz çıktısı." },
      { "key": "B", "text": "Kurumun belirlediği Maksimum Kabul Edilebilir Kesinti (MTPD/RTO) sürelerinin ve planlamalarının uygulanması." },
      { "key": "C", "text": "Yeni firewall kurallarının yavaş yavaş ve dikkatlice test edilmesi." },
      { "key": "D", "text": "Zafiyete sebep olan IP aralığının servis sağlayıcı üzerinden bloklanması." }
    ],
    "answer": "B"
  }
];

const dataJsPath = 'data.js';
let content = fs.readFileSync(dataJsPath, 'utf8');

// Regex to replace the bilgiguvenligi array securely
content = content.replace(/bilgiguvenligi\s*:\s*\[[\s\S]*?(?=\}\s*;\s*$|\}\s*,)/, 'bilgiguvenligi: ' + JSON.stringify(questions, null, 2));

fs.writeFileSync(dataJsPath, content);
console.log('Successfully updated questions in data.js');
