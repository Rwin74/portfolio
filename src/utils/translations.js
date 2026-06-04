export const translations = {
    tr: {
        nav: {
            home: "Ana Sayfa",
            projects: "Projeler",
            about: "Hakkımda",
            contact: "İletişim"
        },
        hero: {
            badge: "Teknoloji Geliştirici & Ürün İnovatörü",
            titleLine1: "Gerçek dünya zorlukları için",
            titleLine2: "teknoloji inşa ediyorum.",
            description: "Pratik sorunları çözmek için tasarlanmış yazılım, yapay zeka sistemleri, endüstriyel otomasyon ve teknoloji odaklı ürünler.",
            btnProjects: "Projeleri İncele",
            btnContact: "İletişime Geç"
        },
        about: {
            badge: "Hakkımda",
            titleLine1: "İnovasyon & Mühendislik",
            titleLine2: "Odaklı Yaklaşım",
            description: "Pratik zorlukları yazılım, otomasyon ve yenilikçi ürün tasarımı aracılığıyla çözmeye odaklanan bir yazılım geliştirici ve teknoloji üreticisiyim. İleri düzey sistemler ve yapay zeka destekli çözümler geliştirerek gerçek dünya problemlerine ölçeklenebilir yanıtlar sunuyorum.",
            expYears: "Yıllık Deneyim",
            expProjects: "Başarılı Proje",
            expDedication: "Proje Adanmışlığı",
            skills: [
                { title: "Geliştirme", desc: "React, Node.js, Python" },
                { title: "Tasarım", desc: "UI/UX, Figma, 3D" },
                { title: "Strateji", desc: "SEO, Büyüme" },
                { title: "Mimari", desc: "Ölçeklenebilir Sistemler" }
            ],
            codename: "Kod Adı",
            role: "Teknoloji Üreticisi"
        },
        timeline: {
            title: "Evrim Süreci",
            description: "Basit web projelerinden, karmaşık endüstriyel sistemlere ve geleceğin teknolojilerine uzanan yolculuk.",
            items: [
                {
                    year: "2024",
                    title: "Erken Yazılım Projeleri",
                    bullets: [
                        "Web uygulamaları",
                        "İlk bağımsız ürün denemeleri",
                        "KampüsOdak"
                    ]
                },
                {
                    year: "2025",
                    title: "Ürün Geliştirme",
                    bullets: [
                        "Petigo",
                        "QR Smart Pet Tag",
                        "Dijital platform fikirleri"
                    ]
                },
                {
                    year: "2026",
                    title: "Araştırma ve Endüstriyel Sistemler",
                    bullets: [
                        "ResQ-72",
                        "Industrial ERP & Warehouse System",
                        "Omni-Vital",
                        "QR Warehouse Tracking"
                    ]
                },
                {
                    year: "2027+",
                    title: "Loop Ecosystem & Future Technologies",
                    bullets: [
                        "Emergency technologies",
                        "Industrial automation",
                        "Health tech",
                        "Pet tech",
                        "Future concepts"
                    ]
                }
            ]
        },
        projects: {
            title: "Projeler",
            description: "Pratik sorunları çözen teknoloji ürünleri, endüstriyel sistemler ve araştırma konseptleri.",
            btnDetails: "Detayları İncele",
            modal: {
                problem: "Problem",
                solution: "Çözüm",
                techStack: "Teknoloji Yığını",
                status: "Durum",
                devProcess: "Geliştirme Süreci",
                futurePlans: "Gelecek Planları"
            },
            items: [
                {
                    id: "resq",
                    title: "ResQ-72",
                    status: "Araştırma / Prototip",
                    shortDescription: "Afet sonrası ilk 72 saat içinde GSM ve internet altyapısı çalışmasa bile temel mesajlaşma ve konum paylaşımı sağlamayı hedefleyen mesh tabanlı acil iletişim sistemi.",
                    problem: "Deprem ve afetlerde baz istasyonları, internet ve elektrik altyapısı devre dışı kalabiliyor. İlk 72 saatte vatandaşların konum ve durum bilgisi iletememesi arama-kurtarma süreçlerini zorlaştırıyor.",
                    solution: "Düşük bant genişlikli mesajlaşma, LoRa/mesh haberleşme mantığı, kısa veri paketleri, önceliklendirilmiş acil durum mesajları ve ekip-vatandaş iletişimi.",
                    devProcess: "Sistem mimarisi tasarlandı. Haberleşme protokolü üzerine araştırmalar ve temel ağ simülasyonları gerçekleştiriliyor.",
                    futurePlans: "Prototipin saha koşullarında menzil ve paket iletim testlerinin yapılması.",
                    techStack: ["LoRa", "Mesh Network", "IoT", "PWA", "Simulation"],
                    image: "/project-4.webp"
                },
                {
                    id: "erp",
                    title: "Industrial ERP & Warehouse System",
                    status: "Geliştirmede",
                    shortDescription: "Üretim yapan işletmeler için depo, stok, ürün, malzeme, sipariş ve üretim takibini dijitalleştiren ERP sistemi.",
                    problem: "Depo düzeni, stok takibi, malzeme giriş-çıkışı, ölçü farklılıkları ve üretim süreçleri manuel takip edildiğinde hata riski artıyor.",
                    solution: "QR kodlu ürün ve raf takibi, stok hareketleri, depo haritası, ürün reçetesi, malzeme geçmişi, kullanıcı rolleri ve raporlama sistemi.",
                    devProcess: "Temel modüller (stok, QR eşleştirme, kullanıcı yetkileri) kodlandı. MVP sürümü oluşturuluyor.",
                    futurePlans: "Canlı üretim ortamında testlere başlanması ve IoT entegrasyonu.",
                    techStack: ["Next.js", "Supabase", "PostgreSQL", "QR Code", "Tailwind CSS"],
                    image: "/project-5.webp"
                },
                {
                    id: "petigo",
                    title: "Petigo",
                    status: "Geliştirmede",
                    shortDescription: "Hayvan sahiplerini, veterinerleri, köpek gezdiricilerini ve hayvanseverleri bir araya getirmeyi hedefleyen pet teknolojisi platformu.",
                    problem: "Hayvan sahipleri güvenilir veteriner, gezdirici, sahiplendirme ve topluluk alanlarına tek platformdan ulaşmakta zorlanıyor.",
                    solution: "Profil sistemi, ilanlar, veteriner tanıtımları, köpek gezdirme, değerlendirme, forum ve güvenlik odaklı kullanıcı yapısı.",
                    devProcess: "Kullanıcı rolleri, harita tabanlı ilan sistemi ve gerçek zamanlı mesajlaşma altyapısı oluşturuldu.",
                    futurePlans: "Uygulamanın kapalı beta testlerinin başlatılması ve pazaryeri modülünün eklenmesi.",
                    techStack: ["Flutter", "Firebase", "Maps API", "Stripe"],
                    image: "/project-3.webp"
                },
                {
                    id: "kampus",
                    title: "KampüsOdak",
                    status: "Yayında",
                    shortDescription: "Öğrenciler için online kütüphane, odaklanma ve çalışma partneri bulma özellikleri sunan web uygulaması.",
                    problem: "Öğrenciler evde veya yurtta çalışırken motivasyon, odak ve çalışma arkadaşı bulma konusunda zorlanabiliyor.",
                    solution: "Tekli odak modu, hızlı eşleştirme, sanal çalışma odaları, zamanlayıcı ve dijital çalışma deneyimi.",
                    devProcess: "Aktif olarak binlerce öğrenci tarafından kullanılıyor. Sistem kararlılığı ve sunucu maliyet optimizasyonu sağlandı.",
                    futurePlans: "Mobil uygulamanın geliştirilmesi ve yapay zeka destekli çalışma analizleri.",
                    techStack: ["React", "Node.js", "MongoDB", "Socket.io"],
                    image: "/project-2.webp"
                },
                {
                    id: "qrpet",
                    title: "QR Smart Pet Tag",
                    status: "Prototip / Geliştirmede",
                    shortDescription: "Kaybolan hayvanların QR kodlu tasma etiketi ile hızlıca sahibine ulaştırılmasını hedefleyen sistem.",
                    problem: "Kaybolan hayvanların sahibine ulaşması zaman alıyor ve çoğu zaman konum bilgisi net iletilemiyor.",
                    solution: "QR kod okutulduğunda hayvan bilgileri görüntülenir, sahibine konumlu bildirim gönderilir ve iletişim başlatılır.",
                    devProcess: "Yazılım altyapısı ve konum tespit bildirim sistemi tamamlandı. Fiziksel donanım testleri yapılıyor.",
                    futurePlans: "Fiziksel prototiplerin üretilmesi ve Petigo ekosistemine entegrasyonu.",
                    techStack: ["React", "Firebase", "Geolocation API", "NFC"],
                    image: "/project-1.webp"
                },
                {
                    id: "omni",
                    title: "Omni-Vital",
                    status: "Araştırma / Prototip",
                    shortDescription: "Kamera üzerinden yüz ve cilt rengi değişimlerini analiz ederek nabız gibi temel vital verileri tahmin etmeyi hedefleyen bilgisayarlı görü projesi.",
                    problem: "Bazı durumlarda hızlı ön değerlendirme için ekstra cihaz olmadan temel sağlık sinyallerini gözlemlemek gerekebilir.",
                    solution: "Kamera görüntüsünden yüz algılama, rPPG (remote photoplethysmography) sinyal çıkarımı, BPM tahmini.",
                    devProcess: "Kamera tabanlı ilk rPPG algoritması test edildi, gürültü filtreleme üzerine optimizasyonlar yapılıyor.",
                    futurePlans: "Aydınlatma değişimlerine karşı algoritmanın iyileştirilmesi ve mobil uyumluluk.",
                    techStack: ["Python", "OpenCV", "MediaPipe", "Signal Processing"],
                    image: "/project-2.webp"
                }
            ]
        },
        contact: {
            badge: "İletişim & İşbirliği",
            titleLine1: "Yeni Projenize",
            titleLine2: "Başlamaya Hazır Mısınız?",
            description: "Vizyonunuzu nasıl hayata geçirebileceğimizi konuşalım. Şu anda yenilikçi projeler ve üst düzey danışmanlık için müsaitim.",
            fastContactTitle: "Hızlı İletişim",
            fastContactDesc: "Anında dönüş almak ve projenizi hızlandırmak için WhatsApp üzerinden direkt ulaşın.",
            btnWhatsapp: "Projeni Hayata Geçir",
            emailLabel: "E-posta",
            phoneLabel: "Telefon",
            locationLabel: "Konum",
            locationValue: "Türkiye",
            socialsLabel: "LinkedIn",
            copyright: "Atakan Yağlı. Tüm hakları saklıdır."
        }
    },
    en: {
        nav: {
            home: "Home",
            projects: "Projects",
            about: "About",
            contact: "Contact"
        },
        hero: {
            badge: "Tech Builder & Product Innovator",
            titleLine1: "Building technology for",
            titleLine2: "real-world challenges.",
            description: "Software, AI systems, industrial automation, and technology-driven products designed to solve practical problems.",
            btnProjects: "Explore Projects",
            btnContact: "Get in Touch"
        },
        about: {
            badge: "About Me",
            titleLine1: "Innovation & Engineering",
            titleLine2: "Driven Approach",
            description: "I am a software developer and tech builder focused on solving practical challenges through software, automation, and innovative product design. I provide scalable responses to real-world problems by developing advanced systems and AI-powered solutions.",
            expYears: "Years Exp.",
            expProjects: "Projects",
            expDedication: "Dedication",
            skills: [
                { title: "Development", desc: "React, Node.js, Python" },
                { title: "Design", desc: "UI/UX, Figma, 3D" },
                { title: "Strategy", desc: "SEO, Growth" },
                { title: "Architecture", desc: "Scalable Systems" }
            ],
            codename: "Codename",
            role: "Tech Builder"
        },
        timeline: {
            title: "Evolution",
            description: "The journey from simple web projects to complex industrial systems and future technologies.",
            items: [
                {
                    year: "2024",
                    title: "Early Software Projects",
                    bullets: [
                        "Web applications",
                        "First independent product trials",
                        "KampüsOdak"
                    ]
                },
                {
                    year: "2025",
                    title: "Product Development",
                    bullets: [
                        "Petigo",
                        "QR Smart Pet Tag",
                        "Digital platform concepts"
                    ]
                },
                {
                    year: "2026",
                    title: "Research & Industrial Systems",
                    bullets: [
                        "ResQ-72",
                        "Industrial ERP & Warehouse System",
                        "Omni-Vital",
                        "QR Warehouse Tracking"
                    ]
                },
                {
                    year: "2027+",
                    title: "Loop Ecosystem & Future Tech",
                    bullets: [
                        "Emergency technologies",
                        "Industrial automation",
                        "Health tech",
                        "Pet tech",
                        "Future concepts"
                    ]
                }
            ]
        },
        projects: {
            title: "Projects",
            description: "Technology products, industrial systems, and research concepts solving practical problems.",
            btnDetails: "View Details",
            modal: {
                problem: "Problem",
                solution: "Solution",
                techStack: "Tech Stack",
                status: "Status",
                devProcess: "Development Process",
                futurePlans: "Future Plans"
            },
            items: [
                {
                    id: "resq",
                    title: "ResQ-72",
                    status: "Research / Prototype",
                    shortDescription: "Mesh-based emergency communication system aiming to provide basic messaging and location sharing even if GSM and internet infrastructure fail in the first 72 hours post-disaster.",
                    problem: "During earthquakes and disasters, base stations, internet, and electricity can go down. Inability to transmit location and status in the first 72 hours hinders search and rescue.",
                    solution: "Low-bandwidth messaging, LoRa/mesh communication logic, short data packets, prioritized emergency messages, and team-citizen communication.",
                    devProcess: "System architecture designed. Research on communication protocols and basic network simulations are underway.",
                    futurePlans: "Testing range and packet transmission of the prototype under field conditions.",
                    techStack: ["LoRa", "Mesh Network", "IoT", "PWA", "Simulation"],
                    image: "/project-4.webp"
                },
                {
                    id: "erp",
                    title: "Industrial ERP & Warehouse System",
                    status: "In Development",
                    shortDescription: "ERP system that digitalizes warehouse, inventory, product, material, order, and production tracking for manufacturing companies.",
                    problem: "Manual tracking of warehouse layout, stock, material flow, dimension differences, and production processes increases the risk of errors.",
                    solution: "QR-coded product and shelf tracking, stock movements, warehouse map, product recipes, material history, user roles, and reporting.",
                    devProcess: "Core modules (stock, QR mapping, user roles) coded. MVP version is being created.",
                    futurePlans: "Initiating tests in a live production environment and IoT integration.",
                    techStack: ["Next.js", "Supabase", "PostgreSQL", "QR Code", "Tailwind CSS"],
                    image: "/project-5.webp"
                },
                {
                    id: "petigo",
                    title: "Petigo",
                    status: "In Development",
                    shortDescription: "A pet technology platform aiming to bring together pet owners, veterinarians, dog walkers, and animal lovers.",
                    problem: "Pet owners struggle to find reliable vets, walkers, adoption centers, and community spaces on a single platform.",
                    solution: "Profile system, listings, vet directories, dog walking, reviews, forums, and a safety-focused user structure.",
                    devProcess: "User roles, map-based listing system, and real-time messaging infrastructure established.",
                    futurePlans: "Launching closed beta tests and adding a marketplace module.",
                    techStack: ["Flutter", "Firebase", "Maps API", "Stripe"],
                    image: "/project-3.webp"
                },
                {
                    id: "kampus",
                    title: "KampüsOdak",
                    status: "Live",
                    shortDescription: "A web application offering online library, focus modes, and study partner matchmaking for students.",
                    problem: "Students studying at home or in dorms often struggle with motivation, focus, and finding study partners.",
                    solution: "Solo focus mode, quick matching, virtual study rooms, timers, and a digital study experience.",
                    devProcess: "Actively used by thousands of students. System stability and server cost optimization achieved.",
                    futurePlans: "Developing a mobile app and AI-powered study analytics.",
                    techStack: ["React", "Node.js", "MongoDB", "Socket.io"],
                    image: "/project-2.webp"
                },
                {
                    id: "qrpet",
                    title: "QR Smart Pet Tag",
                    status: "Prototype / In Development",
                    shortDescription: "A system aimed at quickly returning lost pets to their owners via a QR-coded collar tag.",
                    problem: "Reuniting lost pets with owners takes time, and location information is often not communicated clearly.",
                    solution: "When the QR code is scanned, pet info is displayed, a notification with location is sent to the owner, and contact is initiated.",
                    devProcess: "Software infrastructure and location tracking notification system completed. Physical hardware tests ongoing.",
                    futurePlans: "Producing physical prototypes and integrating into the Petigo ecosystem.",
                    techStack: ["React", "Firebase", "Geolocation API", "NFC"],
                    image: "/project-1.webp"
                },
                {
                    id: "omni",
                    title: "Omni-Vital",
                    status: "Research / Prototype",
                    shortDescription: "A computer vision project aiming to estimate basic vital signs like heart rate by analyzing facial and skin color changes via camera.",
                    problem: "In some scenarios, it's necessary to observe basic health signals for quick preliminary assessment without extra devices.",
                    solution: "Face detection from camera feed, rPPG (remote photoplethysmography) signal extraction, BPM estimation.",
                    devProcess: "Initial camera-based rPPG algorithm tested; optimizations on noise filtering are being made.",
                    futurePlans: "Improving the algorithm against lighting changes and adding mobile compatibility.",
                    techStack: ["Python", "OpenCV", "MediaPipe", "Signal Processing"],
                    image: "/project-2.webp"
                }
            ]
        },
        contact: {
            badge: "Contact & Collaboration",
            titleLine1: "Ready to Start",
            titleLine2: "Your New Project?",
            description: "Let's discuss how to bring your vision to life. Currently available for innovative projects and high-level consulting.",
            fastContactTitle: "Fast Contact",
            fastContactDesc: "Reach out directly via WhatsApp for an immediate response and to accelerate your project.",
            btnWhatsapp: "Bring Your Project to Life",
            emailLabel: "Email",
            phoneLabel: "Phone",
            locationLabel: "Location",
            locationValue: "Turkey",
            socialsLabel: "LinkedIn",
            copyright: "Atakan Yağlı. All rights reserved."
        }
    }
};
