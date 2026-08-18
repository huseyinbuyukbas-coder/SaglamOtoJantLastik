import { BusinessInfo, DiagnosticOption, ReviewItem, ServiceItem } from '../types';

export const BUSINESS_INFO: BusinessInfo = {
  name: 'SAĞLAM OTO JANT LASTİK',
  category: 'Oto Lastik Dükkanı / Jant & Lastik Servisi',
  phone: '0534 350 00 65',
  phoneFormatted: '+905343500065',
  whatsappNumber: '905343500065',
  address: 'Kavaklı, Orhangazi Cd No:4, 34520 Beylikdüzü / İstanbul',
  neighborhood: 'Kavaklı',
  district: 'Beylikdüzü',
  city: 'İstanbul',
  fullAddress: 'Kavaklı, Orhangazi Cd No:4, 34520 Beylikdüzü / İstanbul',
  googleRating: 4.6,
  googleReviewCount: 94,
  establishedYear: 2017,
  masters: [
    {
      name: 'Adem Usta',
      title: 'Jant & Lastik Uzman Usta',
      desc: 'Jant düzeltme, hassas balans ayarı ve lastik tamirinde deneyimli usta işi yaklaşım.'
    },
    {
      name: 'Ömer Usta',
      title: 'Servis & Müşteri Danışmanı',
      desc: 'Hızlı teşhis, doğru yönlendirme, güler yüzlü ve dürüst esnaflık ilkesiyle hizmetinizde.'
    }
  ],
  workingHours: 'Pazartesi - Cumartesi: 08:30 - 20:00'
};

export const WHATSAPP_BASE_URL = `https://wa.me/${BUSINESS_INFO.whatsappNumber}`;

export function getWhatsAppUrl(customMessage?: string): string {
  const defaultMsg = 'Merhaba, web siteniz üzerinden ulaşıyorum. Jant/lastik hizmeti hakkında bilgi almak istiyorum.';
  const msg = customMessage || defaultMsg;
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(msg)}`;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'lastik-satisi',
    title: 'LASTİK SATIŞI',
    shortDesc: 'Aracınıza uygun lastik seçenekleri konusunda doğru yönlendirme ve satış hizmeti.',
    fullDesc: 'Aracınızın tork, yük endeksi ve kullanım koşullarına en uygun sıfır ve garantili lastik seçeneklerini sunuyoruz.',
    iconName: 'Disc',
    category: 'lastik',
    badge: 'Popüler'
  },
  {
    id: 'jant-satisi',
    title: 'JANT SATIŞI',
    shortDesc: 'Aracınızın kullanımına ve ihtiyacına uygun jant seçenekleri.',
    fullDesc: 'Orijinal ebat, sporsu ve çelik jant modellerinde aracınızın estetiğini ve performansını tamamlayan seçenekler.',
    iconName: 'CircleDot',
    category: 'jant'
  },
  {
    id: 'lastik-degisimi',
    title: 'LASTİK DEĞİŞİMİ',
    shortDesc: 'Profesyonel ekipmanla hızlı ve güvenli lastik sökme-takma işlemi.',
    fullDesc: 'Jant çizmeyen son teknoloji lastik sökme-takma makinelerimizle hızlı ve güvenli değişim sağlıyoruz.',
    iconName: 'Repeat',
    category: 'lastik'
  },
  {
    id: 'lastik-tamiri',
    title: 'LASTİK TAMİRİ',
    shortDesc: 'Patlak ve hasarlı lastiklerde uygun onarım çözümleri.',
    fullDesc: 'Civata, çivi ve batma kaynaklı patlaklarda içten mantar yama ve güvenli fitil onarımı ile hızlı çözüm.',
    iconName: 'Wrench',
    category: 'lastik',
    badge: 'Hızlı Servis'
  },
  {
    id: 'jant-duzeltme',
    title: 'JANT DÜZELTME',
    shortDesc: 'Darbe veya kullanım kaynaklı eğilmiş jantlar için düzeltme hizmeti.',
    fullDesc: 'Çukur ve darbe sonucu eğrilen alüminyum ve çelik jantlarınızı presli jant düzeltme makinemizde ilk günkü formuna getiriyoruz.',
    iconName: 'ShieldAlert',
    category: 'jant',
    badge: 'Usta İşi'
  },
  {
    id: 'jant-kaynagi',
    title: 'JANT KAYNAĞI',
    shortDesc: 'Onarılabilir jant hasarları için profesyonel kaynak uygulaması.',
    fullDesc: 'Çatlamış veya kırılmış jantların özel argon kaynak yöntemi ve hassas taşlama ile dayanıklı onarımı.',
    iconName: 'Zap',
    category: 'jant'
  },
  {
    id: 'balans-ayari',
    title: 'BALANS AYARI',
    shortDesc: 'Sürüş konforu ve düzgün yol tutuş için balans kontrolü ve ayarı.',
    fullDesc: 'Yüksek süratlerde direksiyonda oluşan titreşimleri engellemek için dijital balans makinesi ile hassas ağırlık ayarı.',
    iconName: 'Gauge',
    category: 'bakim',
    badge: 'Tavsiye Edilen'
  },
  {
    id: 'lastik-oteli',
    title: 'LASTİK OTELİ',
    shortDesc: 'Mevsimsel lastik değişimlerinde lastiklerinizi güvenli şekilde saklama hizmeti.',
    fullDesc: 'Kışlık ve yazlık lastiklerinizi güneş almayan, ideal nem ve sıcaklık koşullarında kurallara uygun biçimde saklıyoruz.',
    iconName: 'Warehouse',
    category: 'diger'
  },
  {
    id: 'aku-satisi',
    title: 'AKÜ SATIŞI',
    shortDesc: 'Aracınız için uygun akü seçenekleri ve değişim desteği.',
    fullDesc: 'Aracınızın elektriksel altyapısına uygun akü ölçümü, satışı ve yerinde değişim desteği.',
    iconName: 'BatteryCharging',
    category: 'bakim'
  },
  {
    id: 'yol-yardim',
    title: 'YOL YARDIM',
    shortDesc: 'Yolda karşılaşılan lastik kaynaklı sorunlarda destek.',
    fullDesc: 'Beylikdüzü ve yakın çevresinde yolda kalan araçlar için mobil lastik tamiri ve değişim desteği.',
    iconName: 'Truck',
    category: 'diger'
  }
];

export const DIAGNOSTIC_OPTIONS: DiagnosticOption[] = [
  {
    id: 'titresim',
    symptom: 'Direksiyonda titreşim var',
    solution: 'Balans Ayarı Kontrolü',
    description: 'Belli bir hızın üzerinde direksiyonunuz titriyorsa jant ve lastiklerinizin balans dengesi bozulmuş olabilir.',
    actionText: 'Balans Kontrolü İçin Ulaşın',
    iconName: 'Activity',
    waMessage: 'Merhaba, aracımın direksiyonunda belli hızlarda titreşim var. Balans kontrolü için bilgi almak istiyorum.'
  },
  {
    id: 'jant-egri',
    symptom: 'Jantım eğildi / darbe aldı',
    solution: 'Jant Düzeltme & Kontrol',
    description: 'Çukura girme veya kaldırıma çarpma sonucu jant eğrilmiş ve hava kaçırıyor olabilir.',
    actionText: 'Jant Düzeltme Danış',
    iconName: 'CircleAlert',
    waMessage: 'Merhaba, aracımın jantında eğiklik/darbe var. Jant düzeltme işlemi için fiyat ve bilgi alabilir miyim?'
  },
  {
    id: 'lastik-patlak',
    symptom: 'Lastiğim patladı / hava kaçırıyor',
    solution: 'Lastik Tamiri & Kontrol',
    description: 'Lastiğinize çivi batmış olabilir veya subap yuvasından yavaş hava kaçırıyor olabilir.',
    actionText: 'Lastik Tamiri İçin Ara',
    iconName: 'PenTool',
    waMessage: 'Merhaba, lastiğim patladı/hava kaçırıyor. Tamir işlemi için yardımcı olabilir misiniz?'
  },
  {
    id: 'lastik-degisim',
    symptom: 'Mevsimlik lastik değiştirmem gerekiyor',
    solution: 'Lastik Değişimi & Sökme-Takma',
    description: 'Yazlık / kışlık lastik geçişi zamanı geldiğinde profesyonel makinede değişim zamanı.',
    actionText: 'Lastik Değişimi Randevusu Al',
    iconName: 'CalendarCheck',
    waMessage: 'Merhaba, yazlık/kışlık lastik değişimi yaptırmak istiyorum. Uygun zamanınız var mı?'
  },
  {
    id: 'yeni-lastik',
    symptom: 'Yeni lastik arıyorum',
    solution: 'Sıfır Lastik Satış & Danışmanlık',
    description: 'Aracınızın ebadına ve bütçenize en uygun kaliteli sıfır lastik seçenekleri.',
    actionText: 'Lastik Fiyatı Sor',
    iconName: 'ShoppingBag',
    waMessage: 'Merhaba, aracıma yeni lastik almak istiyorum. Ebat ve fiyat bilgisi alabilir miyim?'
  },
  {
    id: 'jant-almak',
    symptom: 'Jant almak / değiştirmek istiyorum',
    solution: 'Jant Satışı & Uyum Kontrolü',
    description: 'Aracınızın bijon aralığına uygun şık ve sağlam jant modelleri.',
    actionText: 'Jant Modellerini Sor',
    iconName: 'Sparkles',
    waMessage: 'Merhaba, aracıma jant almak istiyorum. Elinizdeki jant modellerini öğrenebilir miyim?'
  }
];

export const GOOGLE_REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Bekir Korkmaz',
    rating: 5,
    text: 'Güvenilir esnaflar yıllardır buraya geliriz 2 kardeş işini hakkıyla yapıyorlar tavsiye ederim.',
    date: '1 ay önce',
    badge: 'Doğrulanmış Google Yorumu'
  },
  {
    id: 'rev-2',
    author: 'Selim Arık',
    rating: 5,
    text: 'Çelik jant düzeltme yaptırdım memnun kaldım fiyatı da makuldü. 2 kardeş işletiyor, temiz güler yüzlü güvenilir ve en önemlisi dürüstler.',
    date: '2 ay önce',
    badge: 'Doğrulanmış Google Yorumu'
  },
  {
    id: 'rev-3',
    author: 'Kenan Işık',
    rating: 5,
    text: 'Arkadaş gayet güzel ilgilendi. Bugün Adem Usta dört jant düzeltip balans yaptı. Bir de patlak lastik onardı. Bence güzel iş yapıyor, baştan savmıyor.',
    date: '3 hafta önce',
    badge: 'Doğrulanmış Google Yorumu'
  },
  {
    id: 'rev-4',
    author: 'Mert AYHAN',
    rating: 5,
    text: 'İşini iyi yapan, dürüst işletme. Tavsiye ederim.',
    date: '3 ay önce',
    badge: 'Doğrulanmış Google Yorumu'
  },
  {
    id: 'rev-5',
    author: 'Yusuf Taş',
    rating: 5,
    text: 'Güleryüzlü hizmet, uygun fiyat, uzman ekip.',
    date: '1 ay önce',
    badge: 'Doğrulanmış Google Yorumu'
  },
  {
    id: 'rev-6',
    author: 'Yasin Nişancı',
    rating: 5,
    text: 'İşinin ehli güvenilir dürüst esnaf kesinlikle tavsiye edilir.',
    date: '4 ay önce',
    badge: 'Doğrulanmış Google Yorumu'
  },
  {
    id: 'rev-7',
    author: 'Erdal Uzunoglu',
    rating: 5,
    text: 'Tecrübeli işini bilen ustalar.',
    date: '5 ay önce',
    badge: 'Doğrulanmış Google Yorumu'
  },
  {
    id: 'rev-8',
    author: 'Erkan Kıyak',
    rating: 5,
    text: 'Güleryüzlü, bilgili',
    date: '6 ay önce',
    badge: 'Doğrulanmış Google Yorumu'
  }
];

export const SERVICE_PROCESS_STEPS = [
  {
    number: '01',
    title: 'İletişime Geçin',
    desc: 'Telefon veya WhatsApp üzerinden ihtiyacınızı veya aracınızdaki problemi bize iletin.'
  },
  {
    number: '02',
    title: 'Sorunu Anlatalım / Kontrol Edelim',
    desc: 'Servisimize ulaştığınızda Adem Usta ve Ömer Usta jant veya lastiğinizi detaylıca inceler.'
  },
  {
    number: '03',
    title: 'Uygun İşlemi Belirleyelim',
    desc: 'Dürüst esnaflık anlayışıyla gereksiz masraf çıkarmadan en doğru ve ekonomik çözümü sunarız.'
  },
  {
    number: '04',
    title: 'İşleminizi Tamamlayalım',
    desc: 'Hassas makinelerimizle balans, jant düzeltme veya değişim işlemini tamamlayıp güvenle teslim ederiz.'
  }
];
