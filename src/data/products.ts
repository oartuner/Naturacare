export interface Product {
    id: string;
    name: string;
    benefit: string;
    price: string;
    category: string;
    slug: string;
    image: string;
    description: string;
    usage?: string;
    ingredients?: string;
    features?: string[];
}

export const PRODUCTS: Product[] = [
    {
        id: "1",
        name: "BEFORE SLEEP HYDRA TONIC MIST",
        benefit: "Uykudan önce ruhunuza ve cildinize bir iyilik yapın. Derin nemlendirme ve aromaterapik etki.",
        price: "450.00",
        category: "Cilt Bakımı",
        slug: "before-sleep-mist",
        image: "/images/products/before_sleep_mist.png",
        description: "Günün tüm yorgunluğunu, stresini ve zihinsel karmaşasını geride bırakmaya hazır mısınız? Sade’ce Before Sleep Hydra Tonic Mist, doğanın en sakinleştirici bitkilerini bir şişede buluşturarak sizi derin ve huzurlu bir uykuya hazırlıyor. \n\nBu özel sprey, sıradan bir tonik değil; içeriğindeki değerli hidrolatlar ve saf uçucu yağlar sayesinde hem cildinizi nemlendiren hem de aromaterapik etkisiyle zihninizi dinginleştiren bütünsel bir bakım ürünüdür.",
        usage: "Cilt İçin: Akşam temizlenmiş cildinize 15-20 cm mesafeden püskürtün. Parmak uçlarınızla hafif tampon hareketlerle cildinize yedirin.\n\nRitüel İçin: Yastığınıza veya uyuduğunuz odaya bir miktar sıkarak bitkilerin rahatlatıcı kokusunun odaya yayılmasına izin verin.",
        ingredients: "Melisa Uçucu Yağı & Hidrolatı, Lavanta Uçucu Yağı & Hidrolatı, Papatya Uçucu Yağı & Hidrolatı, Ihlamur Hidrolatı, Mercanköşk Uçucu Yağı, Neroli Uçucu Yağı.",
        features: ["Derin Nemlendirme", "Aromaterapik Etki", "Uyku Desteği", "Tüm Cilt Tipleri"]
    },
    {
        id: "2",
        name: "İconix 24k Serum",
        benefit: "Cildinize altın dokunuş. Aydınlatıcı ve canlandırıcı lüks bakım.",
        price: "850.00",
        category: "Cilt Bakımı",
        slug: "iconix-24k-serum",
        image: "/images/products/iconix_24k_serum.png",
        description: "Saf 24 ayar altın parçacıkları ile zenginleştirilmiş bu lüks serum, cildinize ışıltı ve canlılık kazandırır. Altının anti-aging özellikleri, cildin elastikiyetini artırmaya yardımcı olurken, ince çizgi ve kırışıklıkların görünümünü azaltır.",
        usage: "Temiz cilde sabah ve akşam 3-4 damla uygulayın. Emilimi artırmak için nazikçe masaj yapın.",
        ingredients: "24K Altın Parçacıkları, Hyaluronik Asit, C Vitamini, Kolajen Peptitleri.",
        features: ["Aydınlatıcı", "Anti-Aging", "Canlandırıcı", "Lüks Bakım"]
    },
    {
        id: "3",
        name: "İconix Brightening Serum",
        benefit: "Leke karşıtı ve cilt tonu eşitleyici özel formül.",
        price: "750.00",
        category: "Cilt Bakımı",
        slug: "iconix-brightening",
        image: "/images/products/iconix_brightening_serum.png",
        description: "Güçlü bir leke karşıtı formül olan Iconix Brightening Serum, koyu lekelerin görünümünü azaltmaya ve cilt tonunu eşitlemeye yardımcı olur. Cildin daha aydınlık, pürüzsüz ve canlı görünmesini sağlar.",
        usage: "Sadece akşamları temiz cilde uygulayın. Gündüzleri mutlaka güneş koruyucu kullanın.",
        ingredients: "Alpha Arbutin, Niacinamide, Meyan Kökü Özü, C Vitamini.",
        features: ["Leke Karşıtı", "Ton Eşitleyici", "Aydınlatıcı", "Pürüzsüzleştirici"]
    },
    {
        id: "4",
        name: "Bergamot Uçucu Yağı",
        benefit: "Narenciye ferahlığı, aromaterapide sakinleştirici etki.",
        price: "365.00",
        category: "Uçucu Yağlar",
        slug: "bergamot-yagi",
        image: "/images/products/bergamot_yagi.png",
        description: "Akdeniz'in ferahlığını evinize getiren Bergamot Uçucu Yağı, hem zihinsel hem de duygusal dengeyi destekler. Taze, narenciye ve hafif baharatlı notalarıyla stresi azaltmaya ve ruh halini yükseltmeye yardımcı olur.",
        usage: "Buhurdanlık veya difüzörünüze 3-4 damla damlatarak ortamın havasını tazeleyebilirsiniz. Taşıyıcı bir yağ ile seyrelterek cilde masaj yapabilirsiniz (Güneşe çıkmadan önce kullanmayınız).",
        ingredients: "%100 Saf Bergamot (Citrus bergamia) Kabuk Yağı.",
        features: ["Sakinleştirici", "Mod Yükseltici", "Hoş Koku", "Aromaterapik"]
    },
    {
        id: "5",
        name: "AKUT Homeopati 2026",
        benefit: "Profesyonel homeopati eğitimi ve başlangıç seti.",
        price: "1250.00",
        category: "Homeopati",
        slug: "akut-homeopati-2026",
        image: "https://www.naturacare.com.tr/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-09-at-15.28.50.jpeg",
        description: "Homeopatiye yeni başlayanlar veya profesyonel eğitim alanlar için özel olarak hazırlanmış kapsamlı bir set. En sık kullanılan remedileri ve temel kullanım kılavuzunu içerir. Acil durumlar ve günlük rahatsızlıklar için elinizin altında olması gereken bir ilk yardım kitidir.",
        features: ["Kapsamlı İçerik", "Eğitim Materyali", "Başlangıç İçin İdeal", "Profesyonel"]
    },
    {
        id: "6",
        name: "%100 Bakır Dil Kazıyıcı",
        benefit: "Ağız hijyeni için ayurvedik dil temizleme aparatı.",
        price: "150.00",
        category: "Aksesuar",
        slug: "bakir-dil-kaziyici",
        image: "https://www.naturacare.com.tr/wp-content/uploads/2024/02/bakir-dil-kaziyici.jpg",
        description: "%100 saf bakırdan üretilen bu ergonomik Dil Kazıyıcı, bakırın doğal antibakteriyel gücünü ağız bakım rutininize taşır. Düzenli kullanıldığında dil üzerindeki bakteri plağını, toksinleri ve yiyecek artıklarını nazikçe uzaklaştırarak ağız kokusunu azaltır, taze nefes sağlar ve tat alma duyusunu belirgin biçimde iyileştirir.",
        usage: "Sabahları uyanır uyanmaz, dişlerinizi fırçalamadan önce kullanın. Dilin arka kısmından öne doğru hafifçe çekerek dilinizi temizleyin. Her kullanımdan sonra su ile durulayın.",
        features: ["%100 Saf Bakır", "Antibakteriyel", "Ağız Kokusu Önleyici", "Ergonomik Tasarım"]
    },
    {
        id: "7",
        name: "Alüminyum Destekli Baloncuklu Kese",
        benefit: "Hassas ürünlerinizi korumak için özel tasarım kese.",
        price: "45.00",
        category: "Aksesuar",
        slug: "baloncuklu-kese",
        image: "https://www.naturacare.com.tr/wp-content/uploads/2024/05/bbfc51f9-e827-4c37-8422-4e0d863ed4c0.jpeg",
        description: "Dışı remedilerinizi elektromanyetik alandan korumak amaçlı alüminyum folyo, içi remedilerinizi darbelere ve kırılma riskine karşı korumak için baloncuklu dizayn edilmiş kese. Homeopatik ilaçlarınızı seyahatlerde veya günlük taşımada güvenle saklamanızı sağlar.",
        features: ["Elektromanyetik Koruma", "Darbe Emici", "Hafif ve Pratik", "Güvenli Taşıma"]
    },
    {
        id: "8",
        name: "Vial Globül",
        benefit: "Homeopatik remediler için steril flakon.",
        price: "25.00",
        category: "Homeopati",
        slug: "vial-globul",
        image: "/images/products/vial_globul.png",
        description: "Homeopatik remedilerinizi hazırlamak ve saklamak için kullanılan, yüksek kaliteli camdan üretilmiş steril flakon. Globül formundaki remediler için ideal hacimdedir.",
        features: ["Steril", "Yüksek Kalite Cam", "Sızdırmaz Kapak", "Pratik Boyut"]
    },
    {
        id: "9",
        name: "Cam Vial 1 cc",
        benefit: "Dozajlamayı kolaylaştıran hassas cam tüp.",
        price: "15.00",
        category: "Homeopati",
        slug: "cam-vial-1cc",
        image: "/images/products/cam_vial_1cc.png",
        description: "Hassas dozajlama gerektiren sıvı remediler veya numuneler için 1 cc hacminde mini cam tüp. Şeffaf yapısı sayesinde içeriği kolayca görmenizi sağlar.",
        features: ["1cc Hacim", "Hassas Dozaj", "Dayanıklı Cam", "Çok Amaçlı"]
    },
    {
        id: "10",
        name: "Iconix 3'lü Set",
        benefit: "Çam Terebentin, Kabak Çekirdeği ve Hint Yağı ile saç ve cilt bakımı.",
        price: "650.00",
        category: "Sabit Yağlar",
        slug: "iconix-set",
        image: "/images/products/iconix_set.png",
        description: "Saç ve cilt bakımınız için doğanın mucizevi üçlüsü bir arada! \n1. Çam Terebentin: Saç köklerini besler, hızlı uzamaya yardımcı olur.\n2. Kabak Çekirdeği Yağı: E vitamini açısından zengindir, cildi nemlendirir ve yeniler.\n3. Hint Yağı: Kaş ve kirpik bakımında etkilidir, saça parlaklık verir.",
        usage: "Saç bakım maskesi olarak haftada 1-2 kez saç diplerine uygulayıp bekletin. Cilt için temiz cilde masaj yaparak uygulayın.",
        ingredients: "Çam Terebentin Esansı, Soğuk Sıkım Kabak Çekirdeği Yağı, Soğuk Sıkım Hint Yağı.",
        features: ["Komple Bakım", "Saç Güçlendirici", "Cilt Yenileyici", "Ekonomik Set"]
    },
    {
        id: "11",
        name: "PC Paketi",
        benefit: "Kişisel bakım komple set.",
        price: "950.00",
        category: "Cilt Bakımı",
        slug: "pc-paketi",
        image: "/images/products/pc_paketi.png",
        description: "Kendinize veya sevdiklerinize verebileceğiniz en güzel hediye. İçerisinde günlük cilt bakım rutininiz için gerekli olan temizleyici, tonik ve nemlendirici ürünleri barındıran, özenle hazırlanmış bir paket.",
        features: ["Hediyelik", "Tam Rutin", "Uyumlu Ürünler", "Özel Kutu"]
    },
    {
        id: "12",
        name: "18’lik Remedi Çantası",
        benefit: "Remedilerinizi güvenle taşımanız için özel bölmeli çanta.",
        price: "320.00",
        category: "Aksesuar",
        slug: "remedi-cantasi",
        image: "/images/products/remedi_cantasi.jpg",
        description: "18 adet remedi şişesini güvenle taşıyabileceğiniz, şık ve dayanıklı organizer çanta. İçerisindeki elastik bölmeler şişelerin birbirine çarpmasını engeller. Işık ve ısı değişimlerine karşı koruma sağlar.",
        features: ["18 Bölmeli", "Koruyucu Tasarım", "Şık Görünüm", "Seyahat Dostu"]
    },
    {
        id: "13",
        name: "30’lu Globül Seti 200",
        benefit: "Kapsamlı homeopati başlangıç seti (200 potans).",
        price: "1850.00",
        category: "Homeopati",
        slug: "globul-seti-200",
        image: "/images/products/globul_seti_200.png",
        description: "Homeopati uzmanları tarafından seçilmiş en temel 30 remediyi içeren, 200C potansında hazırlanmış set. Evde kullanım ve ilk yardım durumları için ideal bir koleksiyondur.",
        features: ["30 Farklı Remedi", "200C Potans", "Organize Kutu", "Uzun Ömürlü"]
    },
    {
        id: "14",
        name: "Makyaj Temizleme Mendili",
        benefit: "Doğal lifli, hassas ciltler için uygun temizleme mendili.",
        price: "85.00",
        category: "Cilt Bakımı",
        slug: "makyaj-temizleme",
        image: "/images/products/makyaj_temizleme.jpg",
        description: "Tek kullanımlık pamuklara çevre dostu bir alternatif! Doğal bambu ve pamuk liflerinden üretilen bu mendil, makyajınızı ve cildinizi tahriş etmeden temizler. Yıkanabilir ve tekrar kullanılabilir yapısıyla sürdürülebilir bir güzellik rutini sunar.",
        usage: "Mendili ılık suyla ıslatın veya üzerine makyaj temizleme ürününüzü dökün. Nazikçe yüzünüzü silin. Kullanım sonrası sabunla yıkayıp kurumaya bırakın.",
        features: ["Sürdürülebilir", "Yıkanabilir", "Hassas Doku", "Çevre Dostu"]
    },
    {
        id: "15",
        name: "Alkemist Hindistan Cevizi & Limon",
        benefit: "Egzotik kokulu nemlendirici vücut yağı.",
        price: "420.00",
        category: "Sabit Yağlar",
        slug: "alkemist-yag",
        image: "/images/products/alkemist_oil.png",
        description: "Hindistan cevizinin derinlemesine nemlendirici etkisi ve limonun canlandırıcı kokusuyla tropikal bir bakım deneyimi. Duş sonrası nemi cilde hapseder, yumuşak ve pürüzsüz bir his bırakır.",
        usage: "Duştan sonra hafif nemli cilde tüm vücuda masaj yaparak uygulayın.",
        ingredients: "Soğuk Sıkım Hindistan Cevizi Yağı, Limon Uçucu Yağı, E Vitamini.",
        features: ["Derin Nemlendirme", "Tropikal Koku", "Hızlı Emilim", "Işıltılı Cilt"]
    },
    {
        id: "16",
        name: "DEVİTALE SPLUS",
        benefit: "L-Karnitin ve Vitamin C içeren sıvı takviye edici gıda.",
        price: "890.00",
        category: "Gıda Takviyesi",
        slug: "devitale-splus",
        image: "/images/products/devitale_splus.jpg",
        description: "Metabolizmayı destekleyen L-Karnitin ve bağışıklık sistemini güçlendiren C Vitamini ile zenginleştirilmiş sıvı takviye. Enerji seviyenizi artırmaya ve yağ yakımını desteklemeye yardımcı olur.",
        usage: "Günde 1 kez, tercihen sabahları veya spordan önce 1 ölçek içiniz.",
        ingredients: "L-Karnitin, C Vitamini, Deiyonize Su, Doğal Aroma Vericiler.",
        features: ["Metabolizma Desteği", "Enerji Verici", "Sıvı Form", "Hızlı Emilim"]
    },
    {
        id: "17",
        name: "Palo Santo Ağaç Tütsü",
        benefit: "Güney Amerika'nın 'Kutsal Ağacı' ile negatif enerjiden arınma.",
        price: "435.00",
        category: "Ritüel",
        slug: "palo-santo",
        image: "/images/products/palo_santo.png",
        description: "Güney Amerika yerlileri tarafından yüzyıllardır kullanılan Palo Santo (Kutsal Ağaç), mekanların enerjisini temizlemek, meditasyona odaklanmak ve sivrisinekleri uzaklaştırmak için kullanılır. Eşsiz odunsu ve turunçgil kokusuyla zihni sakinleştirir.",
        usage: "Çubuğun ucunu yakın, küçük bir alev oluşana kadar bekleyin ve üfleyerek söndürün. Çıkan dumanı bedeninizin veya odanızın etrafında gezdirin.",
        features: ["Enerji Temizliği", "Doğal Tütsü", "Meditasyon", "Kutsal Ağaç"]
    },
    {
        id: "18",
        name: "Argan Yağı",
        benefit: "Sıvı altın; saç, cilt ve tırnaklar için mucizevi onarıcı.",
        price: "480.00",
        category: "Sabit Yağlar",
        slug: "argan-yagi",
        image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=800",
        description: "Fas'ın derinliklerinden gelen bu 'Sıvı Altın', yüksek E vitamini ve yağ asitleri içeriğiyle cildinizi derinlemesine besler, saçlarınıza ipeksi bir yumuşaklık kazandırır.",
        usage: "Temizlenmiş cilde veya saç uçlarına birkaç damla masaj yaparak uygulayın.",
        ingredients: "%100 Saf Soğuk Sıkım Argan Yağı.",
        features: ["%100 Organik", "Besleyici", "Onarıcı", "Hızlı Emilim"]
    },
    {
        id: "19",
        name: "Amla Yağı",
        benefit: "Ayurvedik saç ve cilt mucizesi, C vitamini deposu.",
        price: "420.00",
        category: "Sabit Yağlar",
        slug: "amla-yagi",
        image: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&q=80&w=800",
        description: "Geleneksel Hint tıbbının en değerli meyvelerinden biri olan Amla'dan elde edilen bu yağ, saç köklerini güçlendirir ve cildi serbest radikallere karşı korur.",
        usage: "Saç diplerine haftalık bakım olarak veya cilde gece bakımı olarak uygulanabilir.",
        ingredients: "Amla Özü, Susam Yağı.",
        features: ["Ayurvedik", "Güçlendirici", "Antioksidan", "Saf İçerik"]
    },
    {
        id: "20",
        name: "Biberiye Uçucu Yağı",
        benefit: "Zihinsel netlik ve odaklanma için canlandırıcı taze koku.",
        price: "375.00",
        category: "Uçucu Yağlar",
        slug: "biberiye-yagi",
        image: "https://images.unsplash.com/photo-1594411132049-7cb19be55d64?auto=format&fit=crop&q=80&w=800",
        description: "Sabah saatlerinde zihni uyandırmak ve odaklanmayı artırmak için idealdir. Hafıza ve konsantrasyon üzerinde olumlu etkileriyle bilinir.",
        usage: "Buhurdanlıkta veya difüzörde 3-5 damla kullanın.",
        ingredients: "%100 Saf Biberiye Uçucu Yağı.",
        features: ["Odaklanma", "Canlandırıcı", "Taze Koku", "Terapötik"]
    },
    {
        id: "21",
        name: "Nane Uçucu Yağı",
        benefit: "Ferahlatıcı, serinletici ve enerji verici keskin aroma.",
        price: "340.00",
        category: "Uçucu Yağlar",
        slug: "nane-yagi",
        image: "https://images.unsplash.com/photo-1602928321679-560bb453f190?auto=format&fit=crop&q=80&w=800",
        description: "Nefes açıcı ve zihin tazeleyici etkisiyle anlık ferahlık sağlar. Baş ağrısı ve yorgunluk anlarında en büyük yardımcınızdır.",
        usage: "Difüzör ile ortama verilebilir veya seyreltilerek şakaklara uygulanabilir.",
        ingredients: "%100 Saf Tıbbi Nane Uçucu Yağı.",
        features: ["Ferahlatıcı", "Serinletici", "Nefes Açıcı", "Enerji Verici"]
    },
    {
        id: "22",
        name: "İnatolian Quard4 Şurup",
        benefit: "Bağışıklık ve hücresel enerji desteği sağlayan takviye.",
        price: "980.00",
        category: "Gıda Takviyesi",
        slug: "inatalian-quad4",
        image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=800",
        description: "Doğanın en güçlü dört bileşenini bir araya getiren bu özel formül, gün boyu zindelik sağlar ve vücudun savunma mekanizmasını destekler.",
        usage: "Yetişkinler için günde 1 ölçek (10ml) aç karnına tavsiye edilir.",
        ingredients: "Propolis, Ekinezya, Mürver, C Vitamini.",
        features: ["Bağışıklık", "Zindelik", "Doğal İçerik", "Yüksek Emilim"]
    }
];
