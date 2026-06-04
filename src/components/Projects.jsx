import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Activity, Cpu, Stethoscope, PawPrint, Sparkles, X, ExternalLink, Code2, Monitor, Globe, Network, Map, Workflow, Settings2 } from 'lucide-react';

const labs = [
    {
        id: "emergency",
        title: "Emergency Lab",
        description: "Afet sonrası iletişim, kriz yönetimi ve dayanıklılık teknolojileri.",
        icon: Activity,
        status: "Aktif",
        statusColor: "bg-red-500",
        projectCount: 2,
        color: "from-red-500/20 to-orange-500/5",
        border: "group-hover:border-red-500/50",
        projects: [
            {
                title: "ResQ-72",
                status: "Araştırma / Prototip",
                shortDescription: "Afet sonrası ilk 72 saat içinde GSM ve internet altyapısı çalışmasa bile temel mesajlaşma ve konum paylaşımı sağlamayı hedefleyen mesh tabanlı acil iletişim sistemi.",
                problem: "Deprem ve afetlerde baz istasyonları, internet ve elektrik altyapısı devre dışı kalabiliyor. İlk 72 saatte vatandaşların konum ve durum bilgisi iletememesi arama-kurtarma süreçlerini zorlaştırıyor.",
                solution: "Düşük bant genişlikli mesajlaşma, LoRa/mesh haberleşme mantığı, kısa veri paketleri, önceliklendirilmiş acil durum mesajları ve ekip-vatandaş iletişimi.",
                techStack: ["LoRa", "Mesh Network", "IoT", "PWA", "Simulation", "Emergency Communication", "Data Packet Design"],
                nextGoal: "Prototipin saha koşullarında menzil ve paket iletim testlerinin yapılması.",
                impact: "Afet sonrası altyapıdan bağımsız iletişim modeli üzerine araştırma ve prototip çalışması.",
                image: "/project-4.webp"
            },
            {
                title: "Disaster Communication Simulator",
                status: "Araştırma",
                shortDescription: "Afet senaryolarında kullanıcı yoğunluğu, paket kaybı, mesaj iletim süresi ve ağ dayanıklılığını test etmek için simülasyon altyapısı.",
                problem: "Gerçek bir afet ortamını fiziksel olarak test etmek çok zor ve maliyetli.",
                solution: "Düğüm (node) sayısına, mesafeye ve ağ trafiğine göre mesaj iletim başarı oranlarını görselleştiren dijital simülasyon aracı.",
                techStack: ["JavaScript", "Python", "Network Simulation", "Data Visualization"],
                nextGoal: "Büyük ölçekli simülasyon senaryolarının entegrasyonu.",
                impact: "ResQ-72 mimarisinin test edilebilir hale getirilmesi.",
                image: "/project-4.webp"
            }
        ]
    },
    {
        id: "industrial",
        title: "Industrial Lab",
        description: "Üretim, depo, stok, QR iş akışları ve endüstriyel otomasyon sistemleri.",
        icon: Cpu,
        status: "Geliştirmede",
        statusColor: "bg-blue-500",
        projectCount: 3,
        color: "from-blue-500/20 to-cyan-500/5",
        border: "group-hover:border-blue-500/50",
        projects: [
            {
                title: "Industrial ERP & Warehouse System",
                status: "Geliştirmede",
                shortDescription: "Üretim yapan işletmeler için depo, stok, ürün, malzeme, sipariş ve üretim takibini dijitalleştiren ERP sistemi.",
                problem: "Depo düzeni, stok takibi, malzeme giriş-çıkışı, ölçü farklılıkları ve üretim süreçleri manuel takip edildiğinde hata riski artıyor.",
                solution: "QR kodlu ürün ve raf takibi, stok hareketleri, depo haritası, ürün reçetesi, malzeme geçmişi, kullanıcı rolleri ve raporlama sistemi.",
                techStack: ["Next.js", "Supabase", "PostgreSQL", "QR Code", "Inventory Management", "Dashboard", "Role Based Access"],
                nextGoal: "Canlı üretim ortamında testlere başlanması.",
                impact: "Üretim ve depo süreçlerinde görünürlük, hız ve hata azaltma hedefi.",
                image: "/project-5.webp"
            },
            {
                title: "QR Warehouse Tracking",
                status: "Geliştirmede",
                shortDescription: "Depodaki raf, ürün, malzeme ve yarı mamullerin QR kod ile hızlıca bulunmasını ve takip edilmesini sağlayan sistem.",
                problem: "Geleneksel depolarda malzemelerin yerini bulmak veya sayım yapmak vakit alıyor.",
                solution: "Mobil web üzerinden çalışan barkod/QR okuyucu arayüzü ile anlık ürün ve raf eşleştirmesi.",
                techStack: ["QR Code", "Mobile Web", "Database", "Stock Movement Tracking"],
                nextGoal: "ERP sistemi ile entegrasyonun tamamlanması.",
                impact: "Depo içi yönlendirme ve arama süreçlerinin hızlandırılması.",
                image: "/project-5.webp"
            },
            {
                title: "Smart Shelf / Stock Automation Concept",
                status: "Konsept",
                shortDescription: "Raflardaki ürün miktarını, stok durumunu ve eksilen malzemeleri otomatik takip etmeye yönelik akıllı raf sistemi fikri.",
                problem: "İnsan faktörü kaynaklı stok sayım hataları.",
                solution: "Sensörler ve RFID ile rafların kendi ağırlığını/içeriğini anlık ölçerek merkezi sisteme aktarması.",
                techStack: ["RFID", "IoT", "Sensors", "Dashboard", "Inventory Automation"],
                nextGoal: "Donanım prototipleme aşaması.",
                impact: "Manuel sayımı ortadan kaldıracak otomasyon vizyonu.",
                image: "/project-5.webp"
            }
        ]
    },
    {
        id: "health",
        title: "Health Lab",
        description: "Bilgisayarlı görü, sağlık teknolojileri, vital takip ve biyometrik analiz konseptleri.",
        icon: Stethoscope,
        status: "Araştırma",
        statusColor: "bg-emerald-500",
        projectCount: 2,
        color: "from-green-500/20 to-emerald-500/5",
        border: "group-hover:border-emerald-500/50",
        projects: [
            {
                title: "Omni-Vital",
                status: "Araştırma / Prototip",
                shortDescription: "Kamera üzerinden yüz ve cilt rengi değişimlerini analiz ederek nabız gibi temel vital verileri tahmin etmeyi hedefleyen bilgisayarlı görü projesi.",
                problem: "Bazı durumlarda hızlı ön değerlendirme için ekstra cihaz olmadan temel sağlık sinyallerini gözlemlemek gerekebilir.",
                solution: "Kamera görüntüsünden yüz algılama, sinyal çıkarımı, BPM tahmini ve görsel yönlendirme ekranı.",
                techStack: ["Python", "OpenCV", "Computer Vision", "Signal Processing", "Face Detection"],
                nextGoal: "Aydınlatma değişimlerine karşı algoritmanın iyileştirilmesi.",
                impact: "Cihazsız temel vital analiz üzerine deneysel çalışma.",
                image: "/project-2.webp"
            },
            {
                title: "Voice-Based Illness Analysis",
                status: "Konsept",
                shortDescription: "Ses ve nefes verilerinden grip, viral durumlar veya solunum belirtileri hakkında ön analiz yapmayı hedefleyen konsept.",
                problem: "Solunum yolu hastalıklarının erken fark edilmesinin zorluğu.",
                solution: "Mikrofondan alınan öksürük ve ses dalgalarının yapay zeka ile mevcut hastalık veri setiyle karşılaştırılması.",
                techStack: ["Audio Analysis", "AI", "Signal Processing", "Health Tech"],
                nextGoal: "Veri seti araştırması.",
                impact: "Erken uyarı sağlayabilecek dijital sağlık konsepti.",
                image: "/project-2.webp"
            }
        ]
    },
    {
        id: "pet",
        title: "Pet Tech Lab",
        description: "Evcil hayvan sahipleri, veterinerler, gezdiriciler ve kayıp hayvan güvenliği için geliştirilen dijital ürünler.",
        icon: PawPrint,
        status: "Aktif",
        statusColor: "bg-purple-500",
        projectCount: 2,
        color: "from-purple-500/20 to-fuchsia-500/5",
        border: "group-hover:border-purple-500/50",
        projects: [
            {
                title: "Petigo",
                status: "Geliştirmede",
                shortDescription: "Hayvan sahiplerini, veterinerleri, köpek gezdiricilerini ve hayvanseverleri bir araya getirmeyi hedefleyen pet teknolojisi platformu.",
                problem: "Hayvan sahipleri güvenilir veteriner, gezdirici, sahiplendirme ve topluluk alanlarına tek platformdan ulaşmakta zorlanıyor.",
                solution: "Profil sistemi, ilanlar, veteriner tanıtımları, köpek gezdirme, değerlendirme, forum ve güvenlik odaklı kullanıcı yapısı.",
                techStack: ["Flutter", "Firebase", "Mobile App", "Maps", "Messaging", "Reviews"],
                nextGoal: "Uygulamanın kapalı beta testlerinin başlatılması.",
                impact: "Hayvanseverler için güvenli ve topluluk odaklı dijital ekosistem.",
                image: "/project-3.webp"
            },
            {
                title: "QR Smart Pet Tag",
                status: "Prototip / Geliştirmede",
                shortDescription: "Kaybolan hayvanların QR kodlu tasma etiketi ile hızlıca sahibine ulaştırılmasını hedefleyen sistem.",
                problem: "Kaybolan hayvanların sahibine ulaşması zaman alıyor ve çoğu zaman konum bilgisi net iletilemiyor.",
                solution: "QR kod okutulduğunda hayvan bilgileri görüntülenir, sahibine konumlu bildirim gönderilir ve iletişim başlatılır.",
                techStack: ["Firebase", "QR Code", "Location Sharing", "Email Notification", "Web App"],
                nextGoal: "Fiziksel prototiplerin üretilmesi.",
                impact: "Kayıp hayvanların daha hızlı bulunmasını sağlayabilecek düşük maliyetli sistem.",
                image: "/project-1.webp"
            }
        ]
    },
    {
        id: "digital",
        title: "Digital Products Lab",
        description: "Web uygulamaları, SaaS denemeleri, öğrenci platformları ve dijital ürün geliştirme projeleri.",
        icon: Monitor,
        status: "Yayında",
        statusColor: "bg-indigo-500",
        projectCount: 3,
        color: "from-indigo-500/20 to-blue-500/5",
        border: "group-hover:border-indigo-500/50",
        projects: [
            {
                title: "KampüsOdak",
                status: "Yayında",
                shortDescription: "Öğrenciler için online kütüphane, odaklanma ve çalışma partneri bulma özellikleri sunan web uygulaması.",
                problem: "Öğrenciler evde veya yurtta çalışırken motivasyon, odak ve çalışma arkadaşı bulma konusunda zorlanabiliyor.",
                solution: "Tekli odak modu, hızlı eşleştirme, sanal çalışma odaları, zamanlayıcı ve dijital çalışma deneyimi.",
                techStack: ["React", "Node.js", "MongoDB", "Web App", "Real-Time Features"],
                nextGoal: "Mobil uygulamanın geliştirilmesi.",
                impact: "Öğrenciler için dijital çalışma ve odaklanma deneyimi.",
                image: "/project-2.webp"
            },
            {
                title: "QR Menu / Mini ERP System",
                status: "Konsept / Geliştirmede",
                shortDescription: "Kafeler ve restoranlar için QR menü, kampanya yönetimi, stok takibi, masadan sipariş ve öneri sistemi içeren dijital işletme paneli.",
                problem: "Küçük işletmelerin dijitalleşme maliyetlerinin yüksek olması.",
                solution: "Bulut tabanlı, modüler ve kolay entegre edilebilir restoran yönetim asistanı.",
                techStack: ["Next.js", "Supabase", "QR Menu", "Admin Panel", "Stock Tracking"],
                nextGoal: "MVP sürümünün ilk işletmede denenmesi.",
                impact: "İşletmeler için erişilebilir dijital yönetim.",
                image: "/project-5.webp"
            },
            {
                title: "Smart Voice Calendar Assistant",
                status: "Konsept",
                shortDescription: "Sesli komutlarla takvim, görev ve günlük plan yönetimi yapmayı hedefleyen voice-first asistan konsepti.",
                problem: "Hareket halindeyken manuel olarak takvim girişi yapmanın zorluğu.",
                solution: "Sesli dil işleme modelleri kullanılarak doğal dilde söylenen planların doğru saat/tarih aralıklarına atanması.",
                techStack: ["AI", "Voice Interface", "Calendar API", "Timeline UI"],
                nextGoal: "Model entegrasyonu testleri.",
                impact: "Zaman yönetiminde sürtünmesiz kullanıcı deneyimi.",
                image: "/project-4.webp"
            }
        ]
    },
    {
        id: "future",
        title: "Future Concepts Lab",
        description: "Uzun vadeli, deneysel ve araştırma aşamasındaki teknoloji fikirleri.",
        icon: Sparkles,
        status: "Araştırma",
        statusColor: "bg-yellow-500",
        projectCount: 4,
        color: "from-amber-500/20 to-yellow-500/5",
        border: "group-hover:border-yellow-500/50",
        projects: [
            {
                title: "Wildfire Prediction System",
                status: "Konsept",
                shortDescription: "Rüzgar, hava durumu, arazi ve yangın yönü verileriyle orman yangını yayılımını tahmin etmeyi hedefleyen sistem.",
                problem: "Orman yangınlarının sıklıkla yön değiştirmesi ve müdahale ekiplerinin rotalamasında yaşanan zorluklar.",
                solution: "Bölgesel rüzgar verisi, bitki örtüsü tipi ve topoğrafya katmanlarını kullanarak muhtemel riskli alanları belirleyen model.",
                techStack: ["Weather Data", "Simulation", "Maps", "AI", "Risk Analysis"],
                nextGoal: "Veri kümelerinin toplanması.",
                impact: "Erken müdahale için öngörü yeteneği konsepti.",
                image: "/project-4.webp"
            },
            {
                title: "Satellite Soil Analysis",
                status: "Konsept",
                shortDescription: "Uydu görüntüleri ve veri analiziyle tarımsal toprak durumu hakkında kullanıcı dostu analiz sunmayı hedefleyen fikir.",
                problem: "Geniş arazilerde fiziksel toprak analizinin maliyeti ve yavaşlığı.",
                solution: "Açık kaynaklı uydu verilerini işleyerek nem ve bitki örtüsü endekslerini görselleştirmek.",
                techStack: ["Satellite Data", "GIS", "AI", "Agriculture Tech"],
                nextGoal: "Açık uydu API'lerinin taranması.",
                impact: "Makro düzeyde tarımsal gözlem.",
                image: "/project-5.webp"
            },
            {
                title: "Bio-Lens / Stabilized Vision Concept",
                status: "Konsept",
                shortDescription: "Kamera sistemlerinde sıvı mercek, titreşim kontrolü ve gelişmiş görüntüleme üzerine deneysel teknoloji fikri.",
                problem: "Fiziksel donanımlarda sarsıntı ve odak kayıpları.",
                solution: "Yapay zeka ve sıvı optik teknolojilerini harmanlayarak mekanik olmayan sabitleme denemeleri.",
                techStack: ["Optics", "Camera Systems", "Stabilization", "Hardware Concept"],
                nextGoal: "Fiziksel uygulanabilirlik araştırması.",
                impact: "Donanım sınırlarını zorlayan deneysel inovasyon.",
                image: "/project-1.webp"
            },
            {
                title: "Trail Safety Mesh Tag",
                status: "Konsept",
                shortDescription: "Doğa yürüyüşleri ve turlarda kişilerin birbirinden kopmasını önlemek için düşük maliyetli mesh tabanlı güvenlik etiketi konsepti.",
                problem: "Sinyalin çekmediği doğa ortamlarında kaybolma vakaları.",
                solution: "Kısa mesafe sinyal yayan ve ağdaki diğer etiketlerle konum doğrulayan giyilebilir cihaz.",
                techStack: ["BLE Mesh", "LoRa", "Mobile App", "Outdoor Safety"],
                nextGoal: "Güç tüketimi analizi.",
                impact: "Doğa sporlarında güvenlik katmanı.",
                image: "/project-2.webp"
            }
        ]
    }
];

const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <AnimatePresence>
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
            >
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
                
                <motion.div 
                    initial={{ opacity: 0, y: 40, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.95 }}
                    transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                    className="relative w-full max-w-4xl max-h-[90vh] bg-[#0A0A0A] border border-white/10 rounded-3xl overflow-y-auto overflow-x-hidden shadow-2xl"
                >
                    <button 
                        onClick={onClose}
                        className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 text-white/70 hover:text-white hover:bg-black/80 transition-all backdrop-blur-md"
                    >
                        <X className="w-5 h-5" />
                    </button>

                    {/* 1. Üstte proje görseli */}
                    <div className="w-full h-64 sm:h-80 relative">
                        <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />
                        
                        {/* 2. Sol üstte durum etiketi */}
                        <div className="absolute top-6 left-6 z-10">
                            <span className="px-4 py-1.5 text-xs font-semibold bg-white text-black rounded-full shadow-lg">
                                {project.status}
                            </span>
                        </div>
                    </div>

                    <div className="p-6 sm:p-10 space-y-10 relative z-10 -mt-10">
                        <div>
                            {/* 3. Proje adı */}
                            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight drop-shadow-lg">{project.title}</h3>
                            {/* 4. Tek cümlelik güçlü açıklama */}
                            <p className="text-gray-300 text-lg leading-relaxed font-light">{project.shortDescription}</p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <div className="flex items-center gap-2 text-white font-semibold border-b border-white/10 pb-2">
                                    <Activity className="w-5 h-5 text-gray-400" /> Problem
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed bg-white/5 p-4 rounded-xl border border-white/5">
                                    {project.problem}
                                </p>
                            </div>
                            
                            <div className="space-y-4">
                                <div className="flex items-center gap-2 text-white font-semibold border-b border-white/10 pb-2">
                                    <Workflow className="w-5 h-5 text-gray-400" /> Çözüm
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed bg-white/5 p-4 rounded-xl border border-white/5">
                                    {project.solution}
                                </p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center gap-2 text-white font-semibold border-b border-white/10 pb-2">
                                <Code2 className="w-5 h-5 text-gray-400" /> Teknoloji Yığını
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map(tech => (
                                    <span key={tech} className="px-3 py-1.5 text-xs font-medium bg-white/5 border border-white/10 rounded-md text-gray-300">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-3 gap-6">
                            <div className="space-y-3">
                                <div className="text-white text-sm font-semibold flex items-center gap-2"><Globe className="w-4 h-4 text-gray-400"/> Durum</div>
                                <p className="text-gray-400 text-sm">{project.status}</p>
                            </div>
                            <div className="space-y-3">
                                <div className="text-white text-sm font-semibold flex items-center gap-2"><Map className="w-4 h-4 text-gray-400"/> Sonraki Hedef</div>
                                <p className="text-gray-400 text-sm">{project.nextGoal}</p>
                            </div>
                            <div className="space-y-3">
                                <div className="text-white text-sm font-semibold flex items-center gap-2"><Sparkles className="w-4 h-4 text-gray-400"/> Etki</div>
                                <p className="text-gray-400 text-sm">{project.impact}</p>
                            </div>
                        </div>

                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [activeLab, setActiveLab] = useState(null);

    return (
        <section id="labs" className="py-24 relative overflow-hidden">
            <div className="container mx-auto max-w-7xl px-6 relative z-10">
                {/* Header Section */}
                <div className="mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                            Laboratuvarlar
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl font-light">
                            Farklı sektörlerdeki pratik problemleri çözmek üzere tasarlanmış inovasyon odaklı araştırma ve geliştirme birimleri.
                        </p>
                    </motion.div>
                </div>

                {/* Labs Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {labs.map((lab, index) => (
                        <div key={lab.id} className="relative group">
                            {/* Card Body */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`relative p-6 sm:p-8 rounded-3xl bg-[#0A0A0A] border border-white/5 ${lab.border} transition-all duration-500 overflow-hidden cursor-pointer flex flex-col h-full`}
                                onClick={() => setActiveLab(activeLab === lab.id ? null : lab.id)}
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${lab.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                                
                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="flex justify-between items-start mb-8">
                                        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/80 group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-xl">
                                            <lab.icon className="w-6 h-6" />
                                        </div>
                                        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/70 backdrop-blur-md">
                                            <span className={`w-1.5 h-1.5 rounded-full ${lab.statusColor} animate-pulse`} />
                                            {lab.status}
                                        </div>
                                    </div>
                                    
                                    <div className="mt-auto">
                                        <div className="flex items-center gap-3 mb-3">
                                            <h3 className="text-2xl font-bold text-white tracking-tight">{lab.title}</h3>
                                            <span className="px-2 py-0.5 rounded text-xs font-medium bg-white/10 text-gray-300">
                                                {lab.projects.length} Proje
                                            </span>
                                        </div>
                                        <p className="text-gray-400 text-sm leading-relaxed font-light mb-6">
                                            {lab.description}
                                        </p>
                                        
                                        <div className="flex items-center text-sm font-medium text-white/60 group-hover:text-white transition-colors gap-2">
                                            Projeleri İncele <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${activeLab === lab.id ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                            
                            {/* Expandable Project List */}
                            <AnimatePresence>
                                {activeLab === lab.id && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="overflow-hidden mt-4 space-y-3"
                                    >
                                        {lab.projects.map((proj, pIdx) => (
                                            <div 
                                                key={pIdx} 
                                                onClick={() => setSelectedProject(proj)}
                                                className="bg-[#111] border border-white/10 p-4 rounded-2xl cursor-pointer hover:bg-[#1A1A1A] hover:border-white/20 transition-all flex items-center justify-between group"
                                            >
                                                <div>
                                                    <div className="flex items-center gap-3 mb-1">
                                                        <span className="text-white font-semibold">{proj.title}</span>
                                                        <span className="text-[10px] uppercase tracking-wider text-gray-400 bg-white/5 px-2 py-0.5 rounded">{proj.status}</span>
                                                    </div>
                                                    <p className="text-xs text-gray-500 line-clamp-1">{proj.shortDescription}</p>
                                                </div>
                                                <ExternalLink className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors ml-4 shrink-0" />
                                            </div>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>

            {selectedProject && (
                <ProjectModal 
                    project={selectedProject} 
                    onClose={() => setSelectedProject(null)} 
                />
            )}
        </section>
    );
};

export default Projects;
