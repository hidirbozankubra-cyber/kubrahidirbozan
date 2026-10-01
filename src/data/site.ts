// Tüm site bu dosyadan beslenir. Domain'i aldığında url alanını güncelle.
export const site = {
  name: "Kübra Hıdırbozan",
  role: "Büyük Veri Analistliği Öğrencisi",
  url: "https://kubrahidirbozan-ruby.vercel.app",
  school: "Manisa Celal Bayar Üniversitesi",
  program: "Büyük Veri Analistliği Programı, 2. sınıf",
  description:
    "Manisa Celal Bayar Üniversitesi Büyük Veri Analistliği öğrencisi. Yazılım, veri analizi ve veri görselleştirme projeleri.",
  intro:
    "Yazılım, veri analizi ve veri görselleştirme alanlarında çalışan bir Büyük Veri Analistliği öğrencisiyim.",
  about: [
    "Manisa Celal Bayar Üniversitesi Büyük Veri Analistliği Programı'nda 2. sınıf öğrencisiyim. Verinin temizlenmesinden yorumlanmasına ve görselleştirilmesine kadar tüm süreci kapsayan çalışmalar yürütüyorum.",
    "Derslerimin yanında kendimi farklı alanlarda geliştirmeye önem veriyorum. Siber Vatan eğitimine, Lion Akademi'nin SQL eğitimine ve MCBU XRLab'ın Unity Temelleri ve Sanal Gerçeklik atölyesine katılarak yazılım, veri tabanı ve siber güvenlik alanlarındaki bakış açımı genişlettim.",
    "Akademik projelerimde Wine Quality (Vinho Verde) ve EPİAŞ + Open-Meteo gibi gerçek veri setleriyle çalışıyor, bulguları anlaşılır grafiklerle ve istatistiksel yöntemlerle raporluyorum. İngilizce ve Almanca bilgim sayesinde kaynakları ve dokümantasyonu takip edebiliyorum.",
  ],
  tags: ["Yazılım", "Veri Analizi", "Veri Görselleştirme", "İstatistik", "Büyük Veri", "Siber Güvenlik"],
  skills: {
    "İleri düzey": ["C#", "SQL", "Excel"],
    "Orta düzey": ["Python", "Java","HTML"],
  } as Record<string, string[]>,
  certificates: [
    { title: "Siber Vatan Eğitimi", org: "Siber Vatan", text: "Siber güvenlik alanında eğitim programı.", date: "" },
    { title: "SQL Eğitimi", org: "Lion Akademi", text: "Veri tabanı ve SQL üzerine eğitim.", date: "" },
    { title: "Unity Temelleri ve Sanal Gerçeklik Atölyesi", org: "MCBU XRLab, XRLab Community Talks 2026", text: "Manisa Teknik Bilimler MYO Genişletilmiş Gerçeklik Laboratuvarı tarafından düzenlenen atölyeye katılım belgesi.", date: "27 Mart 2026" },
  ],
  spoken: ["İngilizce", "Almanca"],
  projects: [
    {
      title: "Wine Quality (Vinho Verde) Analizi",
      status: "İleri Veri Analistliği dersi",
      text: "Vinho Verde şaraplarının fizikokimyasal özellikleri ile kalite puanları arasındaki ilişkiyi inceleyen veri analizi çalışması.",
      tags: ["Veri Analizi", "Görselleştirme"],
      href: "https://github.com/hidirbozankubra-cyber",
    },
    {
      title: "Türkiye Elektrik Piyasası ve Hava Durumu",
      status: "Uygulamalı Veri Analizi dersi, devam ediyor",
      text: "EPİAŞ Şeffaflık Platformu saatlik piyasa verileri ile Open-Meteo hava verilerini birleştirerek elektrik piyasası ile hava koşulları arasındaki ilişkiyi inceleyen proje.",
      tags: ["EPİAŞ", "Open-Meteo", "Zaman Serisi", "Regresyon"],
      href: "https://github.com/hidirbozankubra-cyber",
    },
  ],
  email: "hidirbozankubra@gmail.com",
  github: "https://github.com/hidirbozankubra-cyber",
  instagram: "https://www.instagram.com/kubraahd/",
  linkedin: "https://www.linkedin.com/in/k%C3%BCbra-h%C4%B1d%C4%B1rbozan-b69545390/"
};
