export const translations = {
    tr: {
        nav: {
            home: "Ana Sayfa",
            projects: "Projeler",
            loop: "Loop",
            about: "Hakkımda",
            contact: "İletişim"
        },
        hero: {
            badge: "Teknoloji Geliştirici & Ürün İnovatörü",
            subtitle: "Founder of Loop Technology",
            titleLine1: "Gerçek dünya zorlukları için",
            titleLine2: "teknoloji inşa ediyorum.",
            description: "Pratik sorunları çözmek için tasarlanmış yazılım, yapay zeka sistemleri, endüstriyel otomasyon ve teknoloji odaklı ürünler.",
            btnProjects: "Projeleri İncele",
            btnContact: "İletişime Geç",
            loopCard: {
                title: "Loop Technology",
                desc: "Afet teknolojileri, yapay zeka sistemleri, endüstriyel yazılımlar ve geleceğin dijital ürünleri üzerine odaklanan bağımsız teknoloji girişimi.",
                focusAreas: [
                    "Emergency Technologies",
                    "Industrial Systems",
                    "Health Technologies",
                    "Pet Technologies",
                    "Digital Products"
                ]
            }
        },
        about: {
            badge: "Founder",
            titleLine1: "İnovasyon & Mühendislik",
            titleLine2: "Odaklı Yaklaşım",
            description: "Bilgisayar Programcılığı öğrencisi olarak başladığım yolculukta, yazılım geliştirme, yapay zeka sistemleri, endüstriyel otomasyon ve teknoloji odaklı ürünler üzerine çalışıyorum. Amacım yalnızca uygulamalar geliştirmek değil; gerçek dünya problemlerine ölçeklenebilir teknolojik çözümler üretmek.",
            roleBadge1: "Software Developer",
            roleBadge2: "Product Builder",
            roleBadge3: "Founder of Loop Technology",
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
            role: "Founder of Loop Technology"
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
                impact: "Etki",
                nextStep: "Sonraki Hedef",
                partOfLoop: "Bu proje Loop Technology ekosisteminin bir parçasıdır."
            },
            items: [
                {
                    id: "resq-72",
                    title: "ResQ-72",
                    status: "Araştırma / Prototip",
                    shortDescription: "Afet sonrası ilk 72 saat içinde GSM ve internet altyapısı çalışmasa bile temel mesajlaşma ve konum paylaşımı sağlamayı hedefleyen mesh tabanlı acil iletişim sistemi.",
                    problem: "Deprem ve afetlerde baz istasyonları, internet ve elektrik altyapısı devre dışı kalabiliyor. İlk 72 saatte vatandaşların konum ve durum bilgisi iletememesi arama-kurtarma süreçlerini zorlaştırıyor.",
                    solution: "Düşük bant genişlikli mesajlaşma, mesh haberleşme mantığı, kısa veri paketleri, önceliklendirilmiş acil durum mesajları ve ekip-vatandaş iletişimi.",
                    techStack: ["LoRa", "Mesh Network", "IoT", "PWA", "Simulation", "Emergency Communication", "Data Packet Design"],
                    impact: "Afet sonrası altyapıdan bağımsız iletişim modeli üzerine araştırma ve prototip çalışması.",
                    nextStep: "Küçük ölçekli saha testi, teknik whitepaper ve yarışma başvurusu için sunum dosyası hazırlanması.",
                    image: "/images/project-1.webp",
                    extraSections: []
                },
                {
                    id: "industrial-erp",
                    title: "Industrial ERP & Warehouse System",
                    status: "Geliştirmede",
                    shortDescription: "Üretim yapan işletmeler için depo, stok, ürün, malzeme, sipariş ve üretim takibini dijitalleştiren ERP sistemi.",
                    problem: "Depo düzeni, stok takibi, malzeme giriş-çıkışı, ölçü farklılıkları ve üretim süreçleri manuel takip edildiğinde hata riski artıyor.",
                    solution: "QR kodlu ürün ve raf takibi, stok hareketleri, depo haritası, ürün reçetesi, malzeme geçmişi, kullanıcı rolleri ve raporlama sistemi.",
                    techStack: ["Next.js", "Supabase", "PostgreSQL", "QR Code", "Inventory Management", "Dashboard", "Role Based Access"],
                    impact: "Üretim ve depo süreçlerinde görünürlük, hız ve hata azaltma hedefi.",
                    nextStep: "Depo modülü, QR okutma akışı, stok hareket geçmişi ve yönetici panelinin tamamlanması.",
                    image: "/images/project-2.webp",
                    extraSections: []
                },
                {
                    id: "qr-smart-pet-tag",
                    title: "QR Smart Pet Tag",
                    status: "Prototip / Geliştirmede",
                    shortDescription: "Kaybolan hayvanların QR kodlu tasma etiketi ile hızlıca sahibine ulaştırılmasını hedefleyen düşük maliyetli akıllı kimlik sistemi.",
                    problem: "Kaybolan hayvanların sahibine ulaşması zaman alıyor ve çoğu zaman konum bilgisi net iletilemiyor.",
                    solution: "QR kod okutulduğunda hayvan bilgileri görüntülenir, sahibine konumlu bildirim gönderilir ve iletişim başlatılır.",
                    techStack: ["Firebase", "QR Code", "Location Sharing", "Email Notification", "Web App", "Pet Safety"],
                    impact: "Kayıp hayvanların daha hızlı bulunmasını sağlayabilecek düşük maliyetli sistem.",
                    nextStep: "Veteriner ve petshop iş ortakları için pilot dağıtım modeli hazırlanması.",
                    image: "/images/project-3.webp",
                    extraSections: []
                },
                {
                    id: "kampusodak",
                    title: "KampüsOdak",
                    status: "Yayında",
                    shortDescription: "Öğrenciler için online kütüphane, odaklanma ve çalışma partneri bulma özellikleri sunan web uygulaması.",
                    problem: "Öğrenciler evde veya yurtta çalışırken motivasyon, odak ve çalışma arkadaşı bulma konusunda zorlanabiliyor.",
                    solution: "Tekli odak modu, hızlı eşleştirme, sanal çalışma odaları, zamanlayıcı ve dijital çalışma deneyimi.",
                    techStack: ["React", "Node.js", "MongoDB", "Web App", "Real-Time Features"],
                    impact: "Öğrenciler için dijital çalışma ve odaklanma deneyimi sunan yayında bir web uygulaması.",
                    nextStep: "Kullanıcı deneyimini geliştirmek, SEO görünürlüğünü artırmak ve öğrenci topluluğu oluşturmak.",
                    image: "/images/project-4.webp",
                    extraSections: []
                },
                {
                    id: "omni-vital",
                    title: "Omni-Vital",
                    status: "Araştırma / Prototip",
                    shortDescription: "Kamera üzerinden yüz ve cilt rengi değişimlerini analiz ederek nabız gibi temel vital verileri tahmin etmeyi hedefleyen bilgisayarlı görü projesi.",
                    problem: "Bazı durumlarda hızlı ön değerlendirme için ekstra cihaz olmadan temel sağlık sinyallerini gözlemlemek gerekebilir.",
                    solution: "Kamera görüntüsünden yüz algılama, sinyal çıkarımı, BPM tahmini ve görsel yönlendirme ekranı.",
                    techStack: ["Python", "OpenCV", "Computer Vision", "Signal Processing", "Face Detection", "Health Tech"],
                    impact: "Cihazsız temel vital analiz üzerine deneysel çalışma.",
                    nextStep: "Daha kararlı ölçüm, gerçek zamanlı arayüz ve doğruluk testi yapılması.",
                    image: "/images/project-5.webp",
                    extraSections: []
                },
                {
                    id: "biyo-mercek",
                    title: "Biyo-Mercek",
                    status: "Konsept / Proof of Concept",
                    shortDescription: "Akıllı telefon kamerasını polimer damla mercek ve işlemsel fotoğrafçılık algoritmalarıyla yapay zeka destekli cep mikroskobuna dönüştürmeyi hedefleyen deeptech proje.",
                    problem: "Kırsal bölgelerde, tarım arazilerinde ve afet alanlarında kan tahlili, su analizi veya bitki patolojisi için donanımlı laboratuvarlara erişim zor olabilir.",
                    solution: "Telefon kamerasına takılan düşük maliyetli optik mercek ile mikroskobik görüntü alınır. Focus peaking, focus stacking ve cihaz içi yapay zeka ile görüntüler işlenerek analiz yapılır.",
                    techStack: ["OpenCV", "Computational Photography", "Focus Stacking", "Focus Peaking", "TensorFlow Lite", "CoreML", "Computer Vision", "Mobile AI", "PDMS Lens", "Microscopy"],
                    impact: "Laboratuvar erişiminin kısıtlı olduğu bölgelerde düşük maliyetli ve taşınabilir analiz yaklaşımı.",
                    nextStep: "Lazer merceği ile ilk mobil kamera büyütme testi, OpenCV tabanlı odak tespit demo uygulaması ve örnek görüntü analiz akışı hazırlanması.",
                    image: "/images/project-6.webp",
                    extraSections: [
                        { title: "Donanım Yaklaşımı", content: "PDMS veya benzeri şeffaf polimer damla mercek kullanımı hedeflenir. MVP aşamasında lazer işaretleyici içinden çıkan küçük odak merceği ile telefon kamerası üzerinde proof of concept testleri yapılabilir." },
                        { title: "Yazılım Yaklaşımı", content: "OpenCV ile gerçek zamanlı odak tespiti, Laplace operatörüyle keskinlik analizi, focus stacking ile farklı derinliklerden gelen net alanların birleştirilmesi ve TensorFlow Lite/CoreML ile cihaz içi analiz." },
                        { title: "Kullanım Alanları", content: "Su analizi, bitki hastalığı tespiti, saha mikroskobisi, eğitim, afet bölgelerinde hızlı ön analiz." }
                    ]
                },
                {
                    id: "nefes-ag",
                    title: "Nefes-Ağ",
                    status: "Konsept / Araştırma",
                    shortDescription: "Öksürük ve nefes seslerini akustik biyobelirteçlere dönüştürerek solunum yolu hastalıkları için yapay zeka destekli ön tarama yapmayı hedefleyen edge AI projesi.",
                    problem: "Birçok bölgede uzman doktora, röntgen cihazına veya gelişmiş solunum testlerine erişim sınırlıdır. Solunum yolu hastalıklarında erken uyarı mekanizmaları yetersiz kalabilir.",
                    solution: "Telefon mikrofonu ile alınan öksürük ve nefes sesleri spektrograma dönüştürülür. Bu görsel veri CNN tabanlı yapay zeka modeliyle analiz edilerek risk sınıflandırması yapılır.",
                    techStack: ["Python", "Librosa", "STFT", "MFCC", "Spectrogram", "CNN", "TensorFlow Lite", "ONNX", "Audio AI", "Edge AI", "Telemedicine"],
                    impact: "Telefon mikrofonunu düşük maliyetli bir akustik ön tarama aracına dönüştürmeyi hedefleyen araştırma projesi.",
                    nextStep: "Coughvid veya Coswara gibi açık veri setleriyle ilk spektrogram üretimi, basit CNN modeli eğitimi ve demo arayüz hazırlanması.",
                    image: "/images/project-7.webp",
                    extraSections: [
                        { title: "Matematiksel Yaklaşım", content: "Ham ses sinyali STFT ve MFCC gibi yöntemlerle zaman-frekans temsiline dönüştürülür. Böylece öksürük sesi 2 boyutlu spektrogram görseli haline gelir." },
                        { title: "Yapay Zeka Yaklaşımı", content: "Spektrogramlar MobileNetV2, ResNet veya benzeri CNN modelleri ile sınıflandırılır. Mobil cihazlarda TensorFlow Lite veya ONNX ile edge AI analizi hedeflenir." },
                        { title: "Telefoni Vizyonu", content: "Akıllı telefonu olmayan kullanıcılar için ileride IVR/GSM hattı üzerinden ses kaydı alıp bulut tabanlı analiz yapılabilecek yapı kurgulanabilir." },
                        { title: "Kullanım Alanları", content: "Evde erken uyarı, kırsal sağlık taraması, solunum yolu risk analizi, tele-tıp ön değerlendirme, epidemiyolojik erken uyarı konseptleri." }
                    ]
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
            loop: "Loop",
            about: "About",
            contact: "Contact"
        },
        hero: {
            badge: "Tech Builder & Product Innovator",
            subtitle: "Founder of Loop Technology",
            titleLine1: "Building technology for",
            titleLine2: "real-world challenges.",
            description: "Software, AI systems, industrial automation, and technology-driven products designed to solve practical problems.",
            btnProjects: "Explore Projects",
            btnContact: "Get in Touch",
            loopCard: {
                title: "Loop Technology",
                desc: "Independent technology venture focused on emergency technologies, AI systems, industrial software and digital products.",
                focusAreas: [
                    "Emergency Technologies",
                    "Industrial Systems",
                    "Health Technologies",
                    "Pet Technologies",
                    "Digital Products"
                ]
            }
        },
        about: {
            badge: "Founder",
            titleLine1: "Innovation & Engineering",
            titleLine2: "Driven Approach",
            description: "Starting my journey as a Computer Programming student, I work on software development, AI systems, industrial automation, and technology-driven products. My goal isn't just developing apps; it's creating scalable technological solutions to real-world problems.",
            roleBadge1: "Software Developer",
            roleBadge2: "Product Builder",
            roleBadge3: "Founder of Loop Technology",
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
            role: "Founder of Loop Technology"
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
                impact: "Impact",
                nextStep: "Next Steps",
                partOfLoop: "This project is part of the Loop Technology ecosystem."
            },
            items: [
                {
                    id: "resq-72",
                    title: "ResQ-72",
                    status: "Research / Prototype",
                    shortDescription: "Mesh-based emergency communication system aiming to provide basic messaging and location sharing even if GSM and internet infrastructure fail in the first 72 hours post-disaster.",
                    problem: "During earthquakes and disasters, base stations, internet, and electricity can go down. Inability to transmit location and status in the first 72 hours hinders search and rescue.",
                    solution: "Low-bandwidth messaging, mesh communication logic, short data packets, prioritized emergency messages, and team-citizen communication.",
                    techStack: ["LoRa", "Mesh Network", "IoT", "PWA", "Simulation", "Emergency Communication", "Data Packet Design"],
                    impact: "Research and prototype study on infrastructure-independent communication models post-disaster.",
                    nextStep: "Small-scale field testing, technical whitepaper preparation, and pitch deck creation for competition applications.",
                    image: "/images/project-1.webp",
                    extraSections: []
                },
                {
                    id: "industrial-erp",
                    title: "Industrial ERP & Warehouse System",
                    status: "In Development",
                    shortDescription: "ERP system that digitalizes warehouse, inventory, product, material, order, and production tracking for manufacturing companies.",
                    problem: "Manual tracking of warehouse layout, stock, material flow, dimension differences, and production processes increases the risk of errors.",
                    solution: "QR-coded product and shelf tracking, stock movements, warehouse map, product recipes, material history, user roles, and reporting.",
                    techStack: ["Next.js", "Supabase", "PostgreSQL", "QR Code", "Inventory Management", "Dashboard", "Role Based Access"],
                    impact: "Aiming to increase visibility, speed, and reduce errors in production and warehouse processes.",
                    nextStep: "Completing the warehouse module, QR scanning flow, stock movement history, and admin panel.",
                    image: "/images/project-2.webp",
                    extraSections: []
                },
                {
                    id: "qr-smart-pet-tag",
                    title: "QR Smart Pet Tag",
                    status: "Prototype / In Development",
                    shortDescription: "A low-cost smart ID system aimed at quickly returning lost pets to their owners via a QR-coded collar tag.",
                    problem: "Reuniting lost pets with owners takes time, and location information is often not communicated clearly.",
                    solution: "When the QR code is scanned, pet info is displayed, a notification with location is sent to the owner, and contact is initiated.",
                    techStack: ["Firebase", "QR Code", "Location Sharing", "Email Notification", "Web App", "Pet Safety"],
                    impact: "A low-cost system that enables faster recovery of lost animals.",
                    nextStep: "Preparing a pilot distribution model for veterinary and petshop partners.",
                    image: "/images/project-3.webp",
                    extraSections: []
                },
                {
                    id: "kampusodak",
                    title: "KampüsOdak",
                    status: "Live",
                    shortDescription: "A web application offering online library, focus modes, and study partner matchmaking for students.",
                    problem: "Students studying at home or in dorms often struggle with motivation, focus, and finding study partners.",
                    solution: "Solo focus mode, quick matching, virtual study rooms, timers, and a digital study experience.",
                    techStack: ["React", "Node.js", "MongoDB", "Web App", "Real-Time Features"],
                    impact: "A live web application providing a digital study and focus experience for students.",
                    nextStep: "Improving user experience, increasing SEO visibility, and building a student community.",
                    image: "/images/project-4.webp",
                    extraSections: []
                },
                {
                    id: "omni-vital",
                    title: "Omni-Vital",
                    status: "Research / Prototype",
                    shortDescription: "A computer vision project aiming to estimate basic vital signs like heart rate by analyzing facial and skin color changes via camera.",
                    problem: "In some scenarios, it's necessary to observe basic health signals for quick preliminary assessment without extra devices.",
                    solution: "Face detection from camera feed, signal extraction, BPM estimation, and a visual guidance interface.",
                    techStack: ["Python", "OpenCV", "Computer Vision", "Signal Processing", "Face Detection", "Health Tech"],
                    impact: "Experimental study on device-free basic vital analysis.",
                    nextStep: "Achieving more stable measurements, building a real-time interface, and conducting accuracy tests.",
                    image: "/images/project-5.webp",
                    extraSections: []
                },
                {
                    id: "biyo-mercek",
                    title: "Biyo-Mercek",
                    status: "Concept / Proof of Concept",
                    shortDescription: "A deeptech project aiming to transform a smartphone camera into an AI-powered pocket microscope using a polymer drop lens and computational photography algorithms.",
                    problem: "In rural areas, farmlands, and disaster zones, access to equipped laboratories for blood tests, water analysis, or plant pathology can be difficult.",
                    solution: "A microscopic image is captured via a low-cost optical lens attached to the phone camera. Images are analyzed using focus peaking, focus stacking, and on-device AI.",
                    techStack: ["OpenCV", "Computational Photography", "Focus Stacking", "Focus Peaking", "TensorFlow Lite", "CoreML", "Computer Vision", "Mobile AI", "PDMS Lens", "Microscopy"],
                    impact: "A low-cost and portable analysis approach for regions with limited access to laboratories.",
                    nextStep: "Initial mobile camera magnification tests with a laser lens, developing an OpenCV-based focus detection demo, and preparing a sample image analysis flow.",
                    image: "/images/project-6.webp",
                    extraSections: [
                        { title: "Hardware Approach", content: "Aiming to use a PDMS or similar transparent polymer drop lens. In the MVP phase, proof of concept tests can be conducted on the phone camera using a small focus lens extracted from a laser pointer." },
                        { title: "Software Approach", content: "Real-time focus detection with OpenCV, sharpness analysis via the Laplace operator, combining in-focus areas from different depths with focus stacking, and on-device analysis with TensorFlow Lite/CoreML." },
                        { title: "Use Cases", content: "Water analysis, plant disease detection, field microscopy, education, rapid preliminary analysis in disaster zones." }
                    ]
                },
                {
                    id: "nefes-ag",
                    title: "Nefes-Ağ",
                    status: "Concept / Research",
                    shortDescription: "An edge AI project aiming to conduct AI-supported pre-screening for respiratory diseases by converting cough and breath sounds into acoustic biomarkers.",
                    problem: "In many regions, access to specialized doctors, X-ray machines, or advanced respiratory tests is limited. Early warning mechanisms for respiratory diseases can be inadequate.",
                    solution: "Cough and breath sounds captured by the phone microphone are converted into spectrograms. This visual data is analyzed by a CNN-based AI model for risk classification.",
                    techStack: ["Python", "Librosa", "STFT", "MFCC", "Spectrogram", "CNN", "TensorFlow Lite", "ONNX", "Audio AI", "Edge AI", "Telemedicine"],
                    impact: "A research project aiming to transform the phone microphone into a low-cost acoustic pre-screening tool.",
                    nextStep: "Initial spectrogram generation using open datasets like Coughvid or Coswara, training a basic CNN model, and preparing a demo interface.",
                    image: "/images/project-7.webp",
                    extraSections: [
                        { title: "Mathematical Approach", content: "The raw audio signal is converted into a time-frequency representation using methods like STFT and MFCC. Thus, the cough sound becomes a 2D spectrogram image." },
                        { title: "AI Approach", content: "Spectrograms are classified using CNN models like MobileNetV2, ResNet, etc. Edge AI analysis is targeted on mobile devices using TensorFlow Lite or ONNX." },
                        { title: "Telephony Vision", content: "For users without smartphones, a future structure can be designed to record audio over an IVR/GSM line for cloud-based analysis." },
                        { title: "Use Cases", content: "In-home early warning, rural health screening, respiratory risk analysis, telemedicine pre-assessment, epidemiological early warning concepts." }
                    ]
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
