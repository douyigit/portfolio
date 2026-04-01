const fs = require('fs');

// Load original dump
let rawData = fs.readFileSync('questions_dump.json', 'utf8');
let questions = JSON.parse(rawData);

// Filter out broken/irrelevant questions
questions = questions.filter(q => q.id !== "90" && q.id !== "99");

// Fix typos, meta-text, and distractors
questions = questions.map((q, index) => {
    // Correct IDs after filtering
    q.id = (index + 1).toString();

    // 1. Remove meta text from question
    q.text = q.text.replace(/el notlarınızdaki /i, '')
                   .replace(/el notlarına göre /i, '')
                   .replace(/notlarına göre /i, '')
                   .replace(/notlara göre /i, '')
                   .replace(/notlarda /i, '')
                   .replace(/el notunda /i, '')
                   .replace(/el notlarındaki /i, '')
                   .replace(/sunumdaki şemaya göre /i, '')
                   .replace(/şemaya göre /i, '')
                   .replace(/şemada /i, '')
                   .replace(/notlarındaki /i, '')
                   .replace(/\(Not: çıkmaz\)/i, '')
                   .replace(/\(Not: kesin çıkar\)/i, '')
                   .replace(/sinor notu/i, 'sınav notu');

    // Fix typical typos in questions
    q.text = q.text.replace(/Cinsel hayot/g, 'Cinsel hayat')
                   .replace(/İşe yorodı mı/g, 'İşe yaradı mı')
                   .replace(/vor mı/g, 'var mı')
                   .replace(/aksaklıkları duzelt/g, 'aksaklıkları düzelt')
                   .replace(/yeni turda daha iyisini ya"/g, 'yeni turda daha iyisini yap"');

    // 2. Fix absurd options and typos in options
    q.options = q.options.map(opt => {
        let txt = opt.text;
        txt = txt.replace(/Ofisin temizlik düzenini/i, 'Operasyonel ağ performansını')
                 .replace(/Sadece kendi maaşını/i, 'IT bütçe metriklerini')
                 .replace(/personelin tatil planlarını/i, 'Risk tolerans seviyesini')
                 .replace(/Sadece paraları/i, 'Yalnızca finans tablosunu')
                 .replace(/Personel maaşlarını/i, 'Ağ donanımlarını')
                 .replace(/Şirket arabalarını/i, 'Zafiyet değerlendirmelerini')
                 .replace(/Polise/i, 'Kamu otoritelerine')
                 .replace(/Sadece internete girmeyi/i, 'Yetki yükseltmeyi (Privilege Escalation)')
                 .replace(/Bina temizliğini sağlamayı/i, 'Ağ katmanlarındaki erişimleri')
                 .replace(/Tüm marketler için/i, 'Uluslararası holdingler için')
                 .replace(/Sadece bakkallar için/i, 'KOBİ işletmeleri için')
                 .replace(/Masanın üzerinde/i, 'Sıradan klasörlerde')
                 .replace(/Çöp kutusuna/i, 'Parçalanarak veya yakılarak')
                 .replace(/Herkese dağıtılarak/i, 'Açık ağlarda (Plaintext)')
                 .replace(/Sadece internet kafeler/i, 'Standart e-ticaret siteleri')
                 .replace(/Sadece bakkallar/i, 'Küçük çaplı tedarikçiler')
                 .replace(/Spor salonları/i, 'Start-up şirketleri')
                 .replace(/İnterneti kapatmak/i, 'Sistemi çevrimdışına almak')
                 .replace(/Ofis mobilyalarının durumu/i, 'Yasal regülasyonlar')
                 .replace(/Günlük teknik log çıktıları/i, 'Haftalık yedekleme logları')
                 .replace(/Sadece bayram kutlamaları/i, 'Personele yönelik uyarılar')
                 .replace(/Sadece BT departmanını/i, 'Erişim denetim mekanizmalarını')
                 .replace(/Dış dünyaya/i, 'Bağımsız denetim ajanslarına')
                 .replace(/Yemek mönüsü/i, 'İş sürekliliği metrikleri')
                 .replace(/Şikayet dilekçeleri/i, 'Varlık tanımlamaları')
                 .replace(/Faturalar/i, 'Günlük zafiyet bültenleri')
                 .replace(/Maaş zammı talebi/i, 'Ağ haritaları')
                 .replace(/Devlet/i, 'Kamu')
                 .replace(/Hükümet Rapor/i, 'Güvenlik Standartları')
                 .replace(/Sadece siber saldırılara yanıt vermek/i, 'Yalnızca olay müdahalesini yönetmek')
                 .replace(/Bilgisayarlara virüs bulaşmasıdır/i, 'Zararlı yazılımların yayılmasıdır')
                 .replace(/Sadece elektrik faturasına/i, 'Temel hizmetlere')
                 .replace(/Sadece departmanının/i, 'Risk bazlı sınırlandırılmasıdır')
                 .replace(/Tehtidlerin/i, 'Tehditlerin')
		 .replace(/hesopla/i, 'hesapla')
                 .replace(/sırola/i, 'sırala');
                 
        return { key: opt.key, text: txt };
    });

    return q;
});

// Save to data.js
let dataContent = fs.readFileSync('data.js', 'utf8');

// The replacement logic: we find where appData.bilgiguvenligi = starts
let idx = dataContent.indexOf('appData.bilgiguvenligi =');

if (idx !== -1) {
    dataContent = dataContent.substring(0, idx);
} else {
    // If it doesn't exist, just append
    if (!dataContent.endsWith('\n')) {
        dataContent += '\n';
    }
}

dataContent += 'appData.bilgiguvenligi = ' + JSON.stringify(questions, null, 2) + ';\n';
fs.writeFileSync('data.js', dataContent);

console.log("Successfully restored and refined 98 questions.");
