const appData = {
    sunu: [
  {
    "id": "1",
    "text": "Sızma testinde 'reconnaissance' aşamasının temel amacı nedir?",
    "options": [
      {
        "key": "A",
        "text": "Zafiyet sömürmek"
      },
      {
        "key": "B",
        "text": "Bilgi toplamak"
      },
      {
        "key": "C",
        "text": "Rapor yazmak"
      },
      {
        "key": "D",
        "text": "Yetki yükseltmek"
      }
    ],
    "answer": "B"
  },
  {
    "id": "2",
    "text": "Linux'ta bir dosyanın sahibi ve grubunu değiştirmek için hangi komut kullanılır?",
    "options": [
      {
        "key": "A",
        "text": "chmod"
      },
      {
        "key": "B",
        "text": "chown"
      },
      {
        "key": "C",
        "text": "passwd"
      },
      {
        "key": "D",
        "text": "usermod"
      }
    ],
    "answer": "B"
  },
  {
    "id": "3",
    "text": "Nmap’te  açık  TCP  portları  hızlıca  taramak  için  en  yaygın  kullanılan tarama türü hangisidir?",
    "options": [
      {
        "key": "A",
        "text": "TCP Connect Scan"
      },
      {
        "key": "B",
        "text": "SYN Scan"
      },
      {
        "key": "C",
        "text": "UDP Scan"
      },
      {
        "key": "D",
        "text": "ACK Scan"
      }
    ],
    "answer": "B"
  },
  {
    "id": "4",
    "text": "Port 22 varsayılan olarak hangi servise aittir?",
    "options": [
      {
        "key": "A",
        "text": "FTP"
      },
      {
        "key": "B",
        "text": "Telnet"
      },
      {
        "key": "C",
        "text": "SSH"
      },
      {
        "key": "D",
        "text": "SMTP"
      }
    ],
    "answer": "C"
  },
  {
    "id": "5",
    "text": "Linux’ta  root  yetkisi  gerektiren  işlemleri  geçici  olarak  yapmak  için kullanılan komut hangisidir?",
    "options": [
      {
        "key": "A",
        "text": "su"
      },
      {
        "key": "B",
        "text": "sudo"
      },
      {
        "key": "C",
        "text": "login"
      },
      {
        "key": "D",
        "text": "whoami"
      }
    ],
    "answer": "B"
  },
  {
    "id": "6",
    "text": "Bir sistemde çalışan servislerin versiyon bilgilerini tespit etmek hangi aşamada yapılır?",
    "options": [
      {
        "key": "A",
        "text": "Keşif"
      },
      {
        "key": "B",
        "text": "Enumeration"
      },
      {
        "key": "C",
        "text": "Exploitation"
      },
      {
        "key": "D",
        "text": "Post-exploitation"
      }
    ],
    "answer": "B"
  },
  {
    "id": "7",
    "text": "Nmap çıktısında 'closed' port ne anlama gelir?",
    "options": [
      {
        "key": "A",
        "text": "Firewall engelliyor"
      },
      {
        "key": "B",
        "text": "Servis çalışıyor"
      },
      {
        "key": "C",
        "text": "Port erişilebilir ama servis yok"
      },
      {
        "key": "D",
        "text": "Port kapalı ve erişilemez"
      }
    ],
    "answer": "D"
  },
  {
    "id": "8",
    "text": "Linux’ta  arka  planda  çalışan  işlemleri  listelemek  için  hangi  komut kullanılır?",
    "options": [
      {
        "key": "A",
        "text": "jobs"
      },
      {
        "key": "B",
        "text": "ps"
      },
      {
        "key": "C",
        "text": "bg"
      },
      {
        "key": "D",
        "text": "fg"
      }
    ],
    "answer": "B"
  },
  {
    "id": "9",
    "text": "Zafiyet (vulnerability) ile exploit arasındaki ilişki hangisidir?",
    "options": [
      {
        "key": "A",
        "text": "Aynı kavramlardır"
      },
      {
        "key": "B",
        "text": "Exploit zafiyeti kullanır"
      },
      {
        "key": "C",
        "text": "Zafiyet exploit üretir"
      },
      {
        "key": "D",
        "text": "Bağımsızdırlar"
      }
    ],
    "answer": "B"
  },
  {
    "id": "10",
    "text": "Ping komutunun temel amacı nedir?",
    "options": [
      {
        "key": "A",
        "text": "Port taramak"
      },
      {
        "key": "B",
        "text": "Servis tespit etmek"
      },
      {
        "key": "C",
        "text": "Ağ erişimini test etmek"
      },
      {
        "key": "D",
        "text": "DNS çözümlemek"
      }
    ],
    "answer": "C"
  },
  {
    "id": "11",
    "text": "Nmap -sS taramasının TCP Connect Scan’e göre temel avantajı nedir?",
    "options": [
      {
        "key": "A",
        "text": "Daha yavaş olması"
      },
      {
        "key": "B",
        "text": "Tam bağlantı kurmaması"
      },
      {
        "key": "C",
        "text": "UDP kullanması"
      },
      {
        "key": "D",
        "text": "Firewall geçmesi"
      }
    ],
    "answer": "B"
  },
  {
    "id": "12",
    "text": "Linux’ta SUID biti ayarlanmış bir binary aşağıdakilerden hangisine yol açabilir?",
    "options": [
      {
        "key": "A",
        "text": "Yetki düşürme"
      },
      {
        "key": "B",
        "text": "Yetki yükseltme"
      },
      {
        "key": "C",
        "text": "Dosya silinmesi"
      },
      {
        "key": "D",
        "text": "Kernel panic"
      }
    ],
    "answer": "B"
  },
  {
    "id": "13",
    "text": "False negative kavramı aşağıdakilerden hangisini ifade eder?",
    "options": [
      {
        "key": "A",
        "text": "Yanlış açık tespiti"
      },
      {
        "key": "B",
        "text": "Var olan açığın tespit edilememesi"
      },
      {
        "key": "C",
        "text": "Exploit başarısı"
      },
      {
        "key": "D",
        "text": "Sistem çökmesi"
      }
    ],
    "answer": "CIKMAZ"
  },
  {
    "id": "14",
    "text": "Nmap -A parametresi aşağıdakilerden hangilerini birlikte yapar?",
    "options": [
      {
        "key": "A",
        "text": "Port tarama"
      },
      {
        "key": "B",
        "text": "OS ve servis tespiti"
      },
      {
        "key": "C",
        "text": "Exploit denemesi"
      },
      {
        "key": "D",
        "text": "Brute force"
      }
    ],
    "answer": "B"
  },
  {
    "id": "15",
    "text": "Linux’ta  ağ  bağlantılarını  ve  dinlenen  portları  görmek  için  modern sistemlerde hangi komut tercih edilir?",
    "options": [
      {
        "key": "A",
        "text": "netstat"
      },
      {
        "key": "B",
        "text": "ss"
      },
      {
        "key": "C",
        "text": "ifconfig"
      },
      {
        "key": "D",
        "text": "route"
      }
    ],
    "answer": "B"
  },
  {
    "id": "16",
    "text": "Enumeration aşamasında aşağıdakilerden hangisi hedeflenmez?",
    "options": [
      {
        "key": "A",
        "text": "Kullanıcı hesapları"
      },
      {
        "key": "B",
        "text": "Paylaşımlar"
      },
      {
        "key": "C",
        "text": "Servis konfigürasyonları"
      },
      {
        "key": "D",
        "text": "Exploit payload"
      }
    ],
    "answer": "D"
  },
  {
    "id": "17",
    "text": "Nmap NSE scriptlerinin temel amacı nedir?",
    "options": [
      {
        "key": "A",
        "text": "Firewall kapatmak"
      },
      {
        "key": "B",
        "text": "Otomatik zafiyet ve servis analizi yapmak"
      },
      {
        "key": "C",
        "text": "Exploit çalıştırmak"
      },
      {
        "key": "D",
        "text": "Kernel taramak"
      }
    ],
    "answer": "B"
  },
  {
    "id": "18",
    "text": "Linux’ta /etc/shadow dosyasının okunabilmesi ne anlama gelir?",
    "options": [
      {
        "key": "A",
        "text": "Normal kullanıcı yetkisi"
      },
      {
        "key": "B",
        "text": "Yetki yükseltme ihtimali"
      },
      {
        "key": "C",
        "text": "Ağ erişimi"
      },
      {
        "key": "D",
        "text": "Servis hatası"
      }
    ],
    "answer": "B"
  },
  {
    "id": "19",
    "text": "TCP ACK scan (-sA) en çok hangi amaçla kullanılır?",
    "options": [
      {
        "key": "A",
        "text": "Açık port tespiti"
      },
      {
        "key": "B",
        "text": "Servis versiyonu"
      },
      {
        "key": "C",
        "text": "Firewall kural analizi"
      },
      {
        "key": "D",
        "text": "UDP keşfi"
      }
    ],
    "answer": "C"
  },
  {
    "id": "20",
    "text": "Privilege escalation genellikle hangi aşamada gerçekleştirilir?",
    "options": [
      {
        "key": "A",
        "text": "Reconnaissance"
      },
      {
        "key": "B",
        "text": "Enumeration"
      },
      {
        "key": "C",
        "text": "Exploitation sonrası"
      },
      {
        "key": "D",
        "text": "Raporlama"
      }
    ],
    "answer": "C"
  },
  {
    "id": "21",
    "text": "Linux’ta cron job’lar saldırgan açısından neden önemlidir?",
    "options": [
      {
        "key": "A",
        "text": "Log tutar"
      },
      {
        "key": "B",
        "text": "Periyodik root çalışabilir"
      },
      {
        "key": "C",
        "text": "Ağ trafiği üretir"
      },
      {
        "key": "D",
        "text": "Firewall yönetir"
      }
    ],
    "answer": "B"
  },
  {
    "id": "22",
    "text": "Nmap’te -Pn parametresi ne işe yarar?",
    "options": [
      {
        "key": "A",
        "text": "Ping atar"
      },
      {
        "key": "B",
        "text": "Host discovery kapatır"
      },
      {
        "key": "C",
        "text": "UDP tarar"
      },
      {
        "key": "D",
        "text": "DNS çözer"
      }
    ],
    "answer": "B"
  },
  {
    "id": "23",
    "text": "Banner grabbing aşağıdakilerden hangisi için kullanılır?",
    "options": [
      {
        "key": "A",
        "text": "Şifre kırma"
      },
      {
        "key": "B",
        "text": "Servis ve versiyon bilgisi alma"
      },
      {
        "key": "C",
        "text": "DoS"
      },
      {
        "key": "D",
        "text": "Packet sniffing"
      }
    ],
    "answer": "B"
  },
  {
    "id": "24",
    "text": "Linux’ta capabilities mekanizmasının temel amacı nedir?",
    "options": [
      {
        "key": "A",
        "text": "Root yetkisini tamamen kaldırmak"
      },
      {
        "key": "B",
        "text": "Yetkileri parçalı hale getirmek"
      },
      {
        "key": "C",
        "text": "Dosya şifrelemek"
      },
      {
        "key": "D",
        "text": "Log yönetmek"
      }
    ],
    "answer": "B"
  },
  {
    "id": "25",
    "text": "Bir servisin default credential kullanması hangi risk sınıfına girer?",
    "options": [
      {
        "key": "A",
        "text": "Bilgi sızıntısı"
      },
      {
        "key": "B",
        "text": "Zayıf kimlik doğrulama"
      },
      {
        "key": "C",
        "text": "DoS"
      },
      {
        "key": "D",
        "text": "Misconfiguration"
      }
    ],
    "answer": "B"
  },
  {
    "id": "26",
    "text": "Nmap çıktısında 'filtered' port görülmesi genellikle neyi gösterir?",
    "options": [
      {
        "key": "A",
        "text": "Port kapalı"
      },
      {
        "key": "B",
        "text": "Servis çalışıyor"
      },
      {
        "key": "C",
        "text": "Firewall/ACL müdahalesi"
      },
      {
        "key": "D",
        "text": "Kernel hatası"
      }
    ],
    "answer": "C"
  },
  {
    "id": "27",
    "text": "Linux’ta PATH hijacking saldırısı hangi varsayıma dayanır?",
    "options": [
      {
        "key": "A",
        "text": "Kernel exploit"
      },
      {
        "key": "B",
        "text": "Yanlış environment değişkeni"
      },
      {
        "key": "C",
        "text": "Zayıf parola"
      },
      {
        "key": "D",
        "text": "Açık port"
      }
    ],
    "answer": "B"
  },
  {
    "id": "28",
    "text": "Web  servislerinde  enumeration  sırasında  ilk  bakılması  gereken dosyalardan biri hangisidir?",
    "options": [
      {
        "key": "A",
        "text": "robots.txt"
      },
      {
        "key": "B",
        "text": "passwd"
      },
      {
        "key": "C",
        "text": "shadow"
      },
      {
        "key": "D",
        "text": "fstab"
      }
    ],
    "answer": "A"
  },
  {
    "id": "29",
    "text": "Bir   pentest   raporunda teknik  detaylardan  sonra  en  kritik  bölüm hangisidir?",
    "options": [
      {
        "key": "A",
        "text": "Komut çıktıları"
      },
      {
        "key": "B",
        "text": "Risk ve etki analizi"
      },
      {
        "key": "C",
        "text": "Payload listesi"
      },
      {
        "key": "D",
        "text": "Loglar"
      }
    ],
    "answer": "B"
  },
  {
    "id": "30",
    "text": "Nmap’te tüm TCP portlarını taramak için hangi ifade doğrudur?",
    "options": [
      {
        "key": "A",
        "text": "-p 1-1024"
      },
      {
        "key": "B",
        "text": "-p-"
      },
      {
        "key": "C",
        "text": "-F"
      },
      {
        "key": "D",
        "text": "--top-ports"
      }
    ],
    "answer": "B"
  },
  {
    "id": "31",
    "text": "Linux’ta  SUID  +  misconfigured  PATH  kombinasyonu  aşağıdakilerden hangisine yol açabilir?",
    "options": [
      {
        "key": "A",
        "text": "Dosya silme"
      },
      {
        "key": "B",
        "text": "Local privilege escalation"
      },
      {
        "key": "C",
        "text": "Remote code execution"
      },
      {
        "key": "D",
        "text": "DoS"
      }
    ],
    "answer": "B"
  },
  {
    "id": "32",
    "text": "Nmap -sA taramasında tüm portlar 'unfiltered' görünüyorsa en doğru yorum hangisidir?",
    "options": [
      {
        "key": "A",
        "text": "Tüm portlar açık"
      },
      {
        "key": "B",
        "text": "Firewall yok veya stateful değil"
      },
      {
        "key": "C",
        "text": "Servisler kapalı"
      },
      {
        "key": "D",
        "text": "UDP engelli"
      }
    ],
    "answer": "B"
  },
  {
    "id": "33",
    "text": "LD_PRELOAD  tekniği  aşağıdakilerden  hangisini  istismar  etmeye yöneliktir?",
    "options": [
      {
        "key": "A",
        "text": "Kernel modülleri"
      },
      {
        "key": "B",
        "text": "Dinamik kütüphane yükleme sırası"
      },
      {
        "key": "C",
        "text": "Ağ yığını"
      },
      {
        "key": "D",
        "text": "Dosya izinleri"
      }
    ],
    "answer": "CIKMAZ"
  },
  {
    "id": "34",
    "text": "Bir  sistemde  cron  job  üzerinden  root  shell  elde  edilmesi  hangi kategoriye girer?",
    "options": [
      {
        "key": "A",
        "text": "Remote exploit"
      },
      {
        "key": "B",
        "text": "Misconfiguration kaynaklı privilege escalation"
      },
      {
        "key": "C",
        "text": "Kernel exploit"
      },
      {
        "key": "D",
        "text": "Brute force"
      }
    ],
    "answer": "B"
  },
  {
    "id": "35",
    "text": "Blind SQL Injection’ın tespiti neden zordur?",
    "options": [
      {
        "key": "A",
        "text": "Firewall engeller"
      },
      {
        "key": "B",
        "text": "Doğrudan çıktı vermez"
      },
      {
        "key": "C",
        "text": "Payload yoktur"
      },
      {
        "key": "D",
        "text": "GET çalışmaz"
      }
    ],
    "answer": "B"
  },
  {
    "id": "36",
    "text": "Nmap timing template T5 kullanımı hangi riski doğurur?",
    "options": [
      {
        "key": "A",
        "text": "Yanlış port sonucu"
      },
      {
        "key": "B",
        "text": "IDS/IPS tetiklenmesi"
      },
      {
        "key": "C",
        "text": "UDP atlanması"
      },
      {
        "key": "D",
        "text": "DNS çözümleme"
      }
    ],
    "answer": "B"
  },
  {
    "id": "37",
    "text": "Linux’ta  /proc/self/environ  dosyasının  okunabilmesi  neye  işaret edebilir?",
    "options": [
      {
        "key": "A",
        "text": "Bilgi sızıntısı"
      },
      {
        "key": "B",
        "text": "Yetki yükseltme vektörü"
      },
      {
        "key": "C",
        "text": "Ağ hatası"
      },
      {
        "key": "D",
        "text": "Disk doluluğu"
      }
    ],
    "answer": "B"
  },
  {
    "id": "38",
    "text": "Bir pentestte 'living off the land' yaklaşımı neyi ifade eder?",
    "options": [
      {
        "key": "A",
        "text": "Exploit kullanmamak"
      },
      {
        "key": "B",
        "text": "Mevcut sistem araçlarını kullanmak"
      },
      {
        "key": "C",
        "text": "Kernel exploit"
      },
      {
        "key": "D",
        "text": "Brute force"
      }
    ],
    "answer": "B"
  },
  {
    "id": "39",
    "text": "Nmap  ile  yapılan  taramaların  SIEM tarafında  tespiti  genellikle  hangi metrikle yapılır?",
    "options": [
      {
        "key": "A",
        "text": "CPU kullanımı"
      },
      {
        "key": "B",
        "text": "Anormal bağlantı sayısı ve port sekansı"
      },
      {
        "key": "C",
        "text": "Disk I/O"
      },
      {
        "key": "D",
        "text": "DNS kayıtları"
      }
    ],
    "answer": "B"
  },
  {
    "id": "40",
    "text": "Gerçek dünya pentestlerinde neden exploit çalıştırmadan önce manuel doğrulama yapılır?",
    "options": [
      {
        "key": "A",
        "text": "Zaman kazanmak"
      },
      {
        "key": "B",
        "text": "Yanlış pozitif ve sistem çökmesini önlemek"
      },
      {
        "key": "C",
        "text": "Exploit çalışmaz"
      },
      {
        "key": "D",
        "text": "Firewall kapatmak"
      }
    ],
    "answer": "B"
  }
],
    walkthrough: [
  {
    "id": "1",
    "text": "Infiltration makinesinde ilk aşamada yapılan Nmap taramasında kaç adet açık servis tespit edilmiştir?",
    "options": [
      {
        "key": "A",
        "text": "1"
      },
      {
        "key": "B",
        "text": "2"
      },
      {
        "key": "C",
        "text": "3"
      },
      {
        "key": "D",
        "text": "4"
      }
    ],
    "answer": "B"
  },
  {
    "id": "2",
    "text": "Nmap taramasında açık bulunan servislerden biri hangisidir?",
    "options": [
      {
        "key": "A",
        "text": "FTP"
      },
      {
        "key": "B",
        "text": "SSH"
      },
      {
        "key": "C",
        "text": "Telnet"
      },
      {
        "key": "D",
        "text": "SMB"
      }
    ],
    "answer": "B"
  },
  {
    "id": "3",
    "text": "Web servisi üzerinde dizin keşfi için walkthrough’da tercih edilen araç hangisidir?",
    "options": [
      {
        "key": "A",
        "text": "dirb"
      },
      {
        "key": "B",
        "text": "ffuf"
      },
      {
        "key": "C",
        "text": "gobuster"
      },
      {
        "key": "D",
        "text": "nikto"
      }
    ],
    "answer": "D"
  },
  {
    "id": "4",
    "text": "Fuzzing sonucunda keşfedilen kritik dizin ve yazılım versiyonu hangisidir?",
    "options": [
      {
        "key": "A",
        "text": "/admin – Apache 2.4"
      },
      {
        "key": "B",
        "text": "/websvn – WebSVN 2.6.0"
      },
      {
        "key": "C",
        "text": "/phpmyadmin – 5.2"
      },
      {
        "key": "D",
        "text": "/dav – WebDAV"
      }
    ],
    "answer": "B"
  },
  {
    "id": "5",
    "text": "WebSVN 2.6.0 için searchsploit ile bulunan exploit’in türü nedir?",
    "options": [
      {
        "key": "A",
        "text": "SQL Injection"
      },
      {
        "key": "B",
        "text": "Remote Code Execution (Unauthenticated)"
      },
      {
        "key": "C",
        "text": "XSS"
      },
      {
        "key": "D",
        "text": "Directory Traversal"
      }
    ],
    "answer": "B"
  },
  {
    "id": "6",
    "text": "WebSVN exploit kodunda payload’un düzeltilmesi gereken kritik kısım nedir?",
    "options": [
      {
        "key": "A",
        "text": "Kullanıcı adı"
      },
      {
        "key": "B",
        "text": "Hedef IP adresi"
      },
      {
        "key": "C",
        "text": "Port numarası"
      },
      {
        "key": "D",
        "text": "User-Agent"
      }
    ],
    "answer": "B"
  },
  {
    "id": "7",
    "text": "İlk erişim sağlandıktan sonra elde edilen shell kullanıcısı hangisidir?",
    "options": [
      {
        "key": "A",
        "text": "root"
      },
      {
        "key": "B",
        "text": "svn"
      },
      {
        "key": "C",
        "text": "www-data"
      },
      {
        "key": "D",
        "text": "john"
      }
    ],
    "answer": "C"
  },
  {
    "id": "8",
    "text": "Makinede yatay yetki yükseltme için home dizini altında tespit edilen kullanıcı hangisidir?",
    "options": [
      {
        "key": "A",
        "text": "alice"
      },
      {
        "key": "B",
        "text": "svn"
      },
      {
        "key": "C",
        "text": "plone"
      },
      {
        "key": "D",
        "text": "admin"
      }
    ],
    "answer": "B"
  },
  {
    "id": "9",
    "text": "SUID biti olan binary’yi bulmak için kullanılan komut aşağıdakilerden hangisidir?",
    "options": [
      {
        "key": "A",
        "text": "find / -perm -u=s"
      },
      {
        "key": "B",
        "text": "ls -la /usr/bin"
      },
      {
        "key": "C",
        "text": "ps aux | grep root"
      },
      {
        "key": "D",
        "text": "cat /etc/passwd"
      }
    ],
    "answer": "A"
  },
  {
    "id": "10",
    "text": "Walkthrough’da SUID biti ile yetki yükseltmede kullanılan binary hangisidir?",
    "options": [
      {
        "key": "A",
        "text": "/usr/bin/passwd"
      },
      {
        "key": "B",
        "text": "/usr/bin/time"
      },
      {
        "key": "C",
        "text": "/bin/su"
      },
      {
        "key": "D",
        "text": "/usr/bin/find"
      }
    ],
    "answer": "B"
  },
  {
    "id": "11",
    "text": "/usr/bin/time binary’sinin yetkileri incelendiğinde owner ve group olarak ne görülür?",
    "options": [
      {
        "key": "A",
        "text": "root:root"
      },
      {
        "key": "B",
        "text": "svn:www-data"
      },
      {
        "key": "C",
        "text": "www-data:svn"
      },
      {
        "key": "D",
        "text": "root:svn"
      }
    ],
    "answer": "B"
  },
  {
    "id": "12",
    "text": "GTFOBins kullanılarak /usr/bin/time ile yetki yükseltme komutu çalıştırıldığında hangi kullanıcıya geçilir?",
    "options": [
      {
        "key": "A",
        "text": "root"
      },
      {
        "key": "B",
        "text": "www-data"
      },
      {
        "key": "C",
        "text": "svn"
      },
      {
        "key": "D",
        "text": "john"
      }
    ],
    "answer": "C"
  },
  {
    "id": "13",
    "text": "SVN kullanıcısı olduktan sonra SSH anahtarını almak için bakılan dosya yolu hangisidir?",
    "options": [
      {
        "key": "A",
        "text": "~/.ssh/id_rsa"
      },
      {
        "key": "B",
        "text": "/etc/ssh/ssh_host_rsa_key"
      },
      {
        "key": "C",
        "text": "/home/svn/.ssh/authorized_keys"
      },
      {
        "key": "D",
        "text": "/root/.ssh/id_rsa"
      }
    ],
    "answer": "A"
  },
  {
    "id": "14",
    "text": "İndirilen id_rsa dosyasının durumu nedir?",
    "options": [
      {
        "key": "A",
        "text": "Şifresiz"
      },
      {
        "key": "B",
        "text": "Encrypted (passphrase korumalı)"
      },
      {
        "key": "C",
        "text": "Public key"
      },
      {
        "key": "D",
        "text": "Corrupt"
      }
    ],
    "answer": "B"
  },
  {
    "id": "15",
    "text": "SSH anahtarının passphrase’ini kırmak için kullanılan araç zinciri hangisidir?",
    "options": [
      {
        "key": "A",
        "text": "ssh2john → john"
      },
      {
        "key": "B",
        "text": "john → hashcat"
      },
      {
        "key": "C",
        "text": "hydra → ssh2john"
      },
      {
        "key": "D",
        "text": "crunch → john"
      }
    ],
    "answer": "A"
  },
  {
    "id": "16",
    "text": "SSH anahtarının passphrase’i nedir?",
    "options": [
      {
        "key": "A",
        "text": "50cent"
      },
      {
        "key": "B",
        "text": "iamtheking"
      },
      {
        "key": "C",
        "text": "password123"
      },
      {
        "key": "D",
        "text": "root"
      }
    ],
    "answer": "B"
  },
  {
    "id": "17",
    "text": "SSH ile svn kullanıcısı olarak bağlandıktan sonra lokal servisleri görmek için kullanılan komut hangisidir?",
    "options": [
      {
        "key": "A",
        "text": "netstat -tuln"
      },
      {
        "key": "B",
        "text": "ss -tupln"
      },
      {
        "key": "C",
        "text": "lsof -i"
      },
      {
        "key": "D",
        "text": "ps aux"
      }
    ],
    "answer": "B"
  },
  {
    "id": "18",
    "text": "Lokal olarak çalışan ve dışarıdan erişilemeyen web servisinin portu nedir?",
    "options": [
      {
        "key": "A",
        "text": "80"
      },
      {
        "key": "B",
        "text": "8080"
      },
      {
        "key": "C",
        "text": "1234"
      },
      {
        "key": "D",
        "text": "443"
      }
    ],
    "answer": "B"
  },
  {
    "id": "19",
    "text": "SSH tunneling komutunda lokal port forward için kullanılan örnek port nedir?",
    "options": [
      {
        "key": "A",
        "text": "8080"
      },
      {
        "key": "B",
        "text": "1234"
      },
      {
        "key": "C",
        "text": "2222"
      },
      {
        "key": "D",
        "text": "4444"
      }
    ],
    "answer": "D"
  },
  {
    "id": "20",
    "text": "Tünelleme sonrası Kali browser’dan hangi adrese erişilir?",
    "options": [
      {
        "key": "A",
        "text": "http://192.168.1.124:8080"
      },
      {
        "key": "B",
        "text": "http://127.0.0.1:1234"
      },
      {
        "key": "C",
        "text": "http://localhost:8080"
      },
      {
        "key": "D",
        "text": "http://svn:8080"
      }
    ],
    "answer": "B"
  },
  {
    "id": "21",
    "text": "Plone web uygulamasında brute-force saldırısı için kullanılan araç hangisidir?",
    "options": [
      {
        "key": "A",
        "text": "Hydra"
      },
      {
        "key": "B",
        "text": "Burp Suite Intruder"
      },
      {
        "key": "C",
        "text": "ffuf"
      },
      {
        "key": "D",
        "text": "Medusa"
      }
    ],
    "answer": "B"
  },
  {
    "id": "22",
    "text": "Brute-force sırasında payload position olarak işaretlenen alanlar hangileridir?",
    "options": [
      {
        "key": "A",
        "text": "__ac_username ve __ac_password"
      },
      {
        "key": "B",
        "text": "username ve password"
      },
      {
        "key": "C",
        "text": "login ve pass"
      },
      {
        "key": "D",
        "text": "user ve pass"
      }
    ],
    "answer": "A"
  },
  {
    "id": "23",
    "text": "Kullanılan wordlist dosyası hangisidir?",
    "options": [
      {
        "key": "A",
        "text": "/usr/share/wordlists/rockyou.txt"
      },
      {
        "key": "B",
        "text": "/usr/share/wordlists/dirb/common.txt"
      },
      {
        "key": "C",
        "text": "/usr/share/wordlists/fasttrack.txt"
      },
      {
        "key": "D",
        "text": "/usr/share/seclists/Passwords/Common-Credentials"
      }
    ],
    "answer": "A"
  },
  {
    "id": "24",
    "text": "Burp Intruder’da “Redirections” ayarı ne olarak seçilmiştir?",
    "options": [
      {
        "key": "A",
        "text": "Never"
      },
      {
        "key": "B",
        "text": "On-site only"
      },
      {
        "key": "C",
        "text": "Always"
      },
      {
        "key": "D",
        "text": "In-scope only"
      }
    ],
    "answer": "C"
  },
  {
    "id": "25",
    "text": "Başarılı brute-force sonucu john kullanıcısının şifresi nedir?",
    "options": [
      {
        "key": "A",
        "text": "iamtheking"
      },
      {
        "key": "B",
        "text": "50cent"
      },
      {
        "key": "C",
        "text": "password"
      },
      {
        "key": "D",
        "text": "root"
      }
    ],
    "answer": "B"
  },
  {
    "id": "26",
    "text": "Plone uygulamasında authenticated RCE exploit’i aramak için kullanılan yöntem nedir?",
    "options": [
      {
        "key": "A",
        "text": "searchsploit Plone"
      },
      {
        "key": "B",
        "text": "Google “Plone authenticated RCE”"
      },
      {
        "key": "C",
        "text": "Metasploit"
      },
      {
        "key": "D",
        "text": "Burp"
      }
    ],
    "answer": "B"
  },
  {
    "id": "27",
    "text": "Kullanılan Plone exploit’in CVE numarası nedir?",
    "options": [
      {
        "key": "A",
        "text": "CVE-2021-38633"
      },
      {
        "key": "B",
        "text": "CVE-2023-22633"
      },
      {
        "key": "C",
        "text": "CVE-2021-32633"
      },
      {
        "key": "D",
        "text": "CVE-2022-1254"
      }
    ],
    "answer": "C"
  },
  {
    "id": "28",
    "text": "Exploit kodunda kullanılan parametreler arasında -H neyi ifade eder?",
    "options": [
      {
        "key": "A",
        "text": "Hedef IP"
      },
      {
        "key": "B",
        "text": "Kali IP adresi"
      },
      {
        "key": "C",
        "text": "Kullanıcı adı"
      },
      {
        "key": "D",
        "text": "Port"
      }
    ],
    "answer": "B"
  },
  {
    "id": "29",
    "text": "Exploit çalıştırıldıktan sonra elde edilen yetki seviyesi nedir?",
    "options": [
      {
        "key": "A",
        "text": "www-data"
      },
      {
        "key": "B",
        "text": "svn"
      },
      {
        "key": "C",
        "text": "root"
      },
      {
        "key": "D",
        "text": "john"
      }
    ],
    "answer": "C"
  },
  {
    "id": "30",
    "text": "Root shell alındıktan sonra flag dosyasını okumak için kullanılan komut hangisidir?",
    "options": [
      {
        "key": "A",
        "text": "cat /root/flag.txt"
      },
      {
        "key": "B",
        "text": "cat root.txt"
      },
      {
        "key": "C",
        "text": "cat /root/root.txt"
      },
      {
        "key": "D",
        "text": "ls /root"
      }
    ],
    "answer": "C"
  },
  {
    "id": "31",
    "text": "Walkthrough’da “living off the land” yaklaşımına örnek olan teknik hangisidir?",
    "options": [
      {
        "key": "A",
        "text": "Hazır exploit kullanmak"
      },
      {
        "key": "B",
        "text": "SUID binary’sini (time) istismar etmek"
      },
      {
        "key": "C",
        "text": "Metasploit kullanmak"
      },
      {
        "key": "D",
        "text": "Kernel exploit"
      }
    ],
    "answer": "B"
  },
  {
    "id": "32",
    "text": "SSH tunneling tekniği hangi amaçla kullanılmıştır?",
    "options": [
      {
        "key": "A",
        "text": "Dışarıdan lokal servise erişim"
      },
      {
        "key": "B",
        "text": "Root shell almak"
      },
      {
        "key": "C",
        "text": "Parola kırmak"
      },
      {
        "key": "D",
        "text": "Dosya indirmek"
      }
    ],
    "answer": "A"
  },
  {
    "id": "33",
    "text": "False positive önlemek için manuel doğrulama yapılması gereken aşama hangisidir?",
    "options": [
      {
        "key": "A",
        "text": "Reconnaissance"
      },
      {
        "key": "B",
        "text": "Exploitation"
      },
      {
        "key": "C",
        "text": "Post-exploitation"
      },
      {
        "key": "D",
        "text": "Reporting"
      }
    ],
    "answer": "B"
  },
  {
    "id": "34",
    "text": "/etc/shadow dosyasının okunabilmesi neye işaret eder?",
    "options": [
      {
        "key": "A",
        "text": "Yetki yükseltme vektörü"
      },
      {
        "key": "B",
        "text": "Normal kullanıcı yetkisi"
      },
      {
        "key": "C",
        "text": "Servis hatası"
      },
      {
        "key": "D",
        "text": "Ağ erişimi"
      }
    ],
    "answer": "A"
  },
  {
    "id": "35",
    "text": "Nmap -sS taramasının avantajı nedir?",
    "options": [
      {
        "key": "A",
        "text": "Tam TCP 3-way handshake yapmaz"
      },
      {
        "key": "B",
        "text": "UDP tarar"
      },
      {
        "key": "C",
        "text": "Daha yavaş çalışır"
      },
      {
        "key": "D",
        "text": "Firewall’u geçemez"
      }
    ],
    "answer": "A"
  },
  {
    "id": "36",
    "text": "SUID + misconfigured PATH kombinasyonu hangi saldırıya yol açar?",
    "options": [
      {
        "key": "A",
        "text": "Local privilege escalation"
      },
      {
        "key": "B",
        "text": "Remote code execution"
      },
      {
        "key": "C",
        "text": "DoS"
      },
      {
        "key": "D",
        "text": "Bilgi sızıntısı"
      }
    ],
    "answer": "A"
  },
  {
    "id": "37",
    "text": "LD_PRELOAD tekniği neyi istismar eder?",
    "options": [
      {
        "key": "A",
        "text": "Dinamik kütüphane yükleme sırasını"
      },
      {
        "key": "B",
        "text": "Kernel modüllerini"
      },
      {
        "key": "C",
        "text": "Dosya izinlerini"
      },
      {
        "key": "D",
        "text": "Ağ yığınını"
      }
    ],
    "answer": "A"
  },
  {
    "id": "38",
    "text": "Plone’da login formunda brute-force yapılmasının nedeni nedir?",
    "options": [
      {
        "key": "A",
        "text": "rockyou wordlist’inde parola olması"
      },
      {
        "key": "B",
        "text": "Default credential"
      },
      {
        "key": "C",
        "text": "CAPTCHA yok"
      },
      {
        "key": "D",
        "text": "Rate-limit yok"
      }
    ],
    "answer": "D"
  },
  {
    "id": "39",
    "text": "Pentest raporunda en kritik bölüm hangisidir?",
    "options": [
      {
        "key": "A",
        "text": "Risk ve etki analizi"
      },
      {
        "key": "B",
        "text": "Komut çıktıları"
      },
      {
        "key": "C",
        "text": "Payload listesi"
      },
      {
        "key": "D",
        "text": "Loglar"
      }
    ],
    "answer": "A"
  },
  {
    "id": "40",
    "text": "Infiltration makinesinde root yetkisine ulaşıldıktan sonra en son yapılan işlem nedir?",
    "options": [
      {
        "key": "A",
        "text": "Flag okumak"
      },
      {
        "key": "B",
        "text": "Backdoor bırakmak"
      },
      {
        "key": "C",
        "text": "Log temizlemek"
      },
      {
        "key": "D",
        "text": "Sistem kapatma"
      }
    ],
    "answer": "C"
  }
]
};