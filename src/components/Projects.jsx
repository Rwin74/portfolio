import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, ExternalLink, Code2, Activity, Workflow, Globe, Map, Sparkles, Terminal } from 'lucide-react';

const projectsData = [
    {
        id: "resq",
        title: "ResQ-72",
        status: "Araştırma / Prototip",
        shortDescription: "Afet sonrası ilk 72 saat içinde GSM ve internet altyapısı çalışmasa bile temel mesajlaşma ve konum paylaşımı sağlamayı hedefleyen mesh tabanlı acil iletişim sistemi.",
        problem: "Deprem ve afetlerde baz istasyonları, internet ve elektrik altyapısı devre dışı kalabiliyor. İlk 72 saatte vatandaşların konum ve durum bilgisi iletememesi arama-kurtarma süreçlerini zorlaştırıyor.",
        solution: "Düşük bant genişlikli mesajlaşma, LoRa/mesh haberleşme mantığı, kısa veri paketleri, önceliklendirilmiş acil durum mesajları ve ekip-vatandaş iletişimi.",
        techStack: ["LoRa", "Mesh Network", "IoT", "PWA", "Simulation"],
        devProcess: "Sistem mimarisi tasarlandı. Haberleşme protokolü üzerine araştırmalar ve temel ağ simülasyonları gerçekleştiriliyor.",
        futurePlans: "Prototipin saha koşullarında menzil ve paket iletim testlerinin yapılması.",
        image: "/project-4.webp"
    },
    {
        id: "erp",
        title: "Industrial ERP & Warehouse System",
        status: "Geliştirmede",
        shortDescription: "Üretim yapan işletmeler için depo, stok, ürün, malzeme, sipariş ve üretim takibini dijitalleştiren ERP sistemi.",
        problem: "Depo düzeni, stok takibi, malzeme giriş-çıkışı, ölçü farklılıkları ve üretim süreçleri manuel takip edildiğinde hata riski artıyor.",
        solution: "QR kodlu ürün ve raf takibi, stok hareketleri, depo haritası, ürün reçetesi, malzeme geçmişi, kullanıcı rolleri ve raporlama sistemi.",
        techStack: ["Next.js", "Supabase", "PostgreSQL", "QR Code", "Tailwind CSS"],
        devProcess: "Temel modüller (stok, QR eşleştirme, kullanıcı yetkileri) kodlandı. MVP sürümü oluşturuluyor.",
        futurePlans: "Canlı üretim ortamında testlere başlanması ve IoT entegrasyonu.",
        image: "/project-5.webp"
    },
    {
        id: "petigo",
        title: "Petigo",
        status: "Geliştirmede",
        shortDescription: "Hayvan sahiplerini, veterinerleri, köpek gezdiricilerini ve hayvanseverleri bir araya getirmeyi hedefleyen pet teknolojisi platformu.",
        problem: "Hayvan sahipleri güvenilir veteriner, gezdirici, sahiplendirme ve topluluk alanlarına tek platformdan ulaşmakta zorlanıyor.",
        solution: "Profil sistemi, ilanlar, veteriner tanıtımları, köpek gezdirme, değerlendirme, forum ve güvenlik odaklı kullanıcı yapısı.",
        techStack: ["Flutter", "Firebase", "Maps API", "Stripe"],
        devProcess: "Kullanıcı rolleri, harita tabanlı ilan sistemi ve gerçek zamanlı mesajlaşma altyapısı oluşturuldu.",
        futurePlans: "Uygulamanın kapalı beta testlerinin başlatılması ve pazaryeri modülünün eklenmesi.",
        image: "/project-3.webp"
    },
    {
        id: "kampus",
        title: "KampüsOdak",
        status: "Yayında",
        shortDescription: "Öğrenciler için online kütüphane, odaklanma ve çalışma partneri bulma özellikleri sunan web uygulaması.",
        problem: "Öğrenciler evde veya yurtta çalışırken motivasyon, odak ve çalışma arkadaşı bulma konusunda zorlanabiliyor.",
        solution: "Tekli odak modu, hızlı eşleştirme, sanal çalışma odaları, zamanlayıcı ve dijital çalışma deneyimi.",
        techStack: ["React", "Node.js", "MongoDB", "Socket.io"],
        devProcess: "Aktif olarak binlerce öğrenci tarafından kullanılıyor. Sistem kararlılığı ve sunucu maliyet optimizasyonu sağlandı.",
        futurePlans: "Mobil uygulamanın geliştirilmesi ve yapay zeka destekli çalışma analizleri.",
        image: "/project-2.webp"
    },
    {
        id: "qrpet",
        title: "QR Smart Pet Tag",
        status: "Prototip / Geliştirmede",
        shortDescription: "Kaybolan hayvanların QR kodlu tasma etiketi ile hızlıca sahibine ulaştırılmasını hedefleyen sistem.",
        problem: "Kaybolan hayvanların sahibine ulaşması zaman alıyor ve çoğu zaman konum bilgisi net iletilemiyor.",
        solution: "QR kod okutulduğunda hayvan bilgileri görüntülenir, sahibine konumlu bildirim gönderilir ve iletişim başlatılır.",
        techStack: ["React", "Firebase", "Geolocation API", "NFC"],
        devProcess: "Yazılım altyapısı ve konum tespit bildirim sistemi tamamlandı. Fiziksel donanım testleri yapılıyor.",
        futurePlans: "Fiziksel prototiplerin üretilmesi ve Petigo ekosistemine entegrasyonu.",
        image: "/project-1.webp"
    },
    {
        id: "omni",
        title: "Omni-Vital",
        status: "Araştırma / Prototip",
        shortDescription: "Kamera üzerinden yüz ve cilt rengi değişimlerini analiz ederek nabız gibi temel vital verileri tahmin etmeyi hedefleyen bilgisayarlı görü projesi.",
        problem: "Bazı durumlarda hızlı ön değerlendirme için ekstra cihaz olmadan temel sağlık sinyallerini gözlemlemek gerekebilir.",
        solution: "Kamera görüntüsünden yüz algılama, rPPG (remote photoplethysmography) sinyal çıkarımı, BPM tahmini.",
        techStack: ["Python", "OpenCV", "MediaPipe", "Signal Processing"],
        devProcess: "Kamera tabanlı ilk rPPG algoritması test edildi, gürültü filtreleme üzerine optimizasyonlar yapılıyor.",
        futurePlans: "Aydınlatma değişimlerine karşı algoritmanın iyileştirilmesi ve mobil uyumluluk.",
        image: "/project-2.webp"
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
                <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={onClose} />
                
                <motion.div 
                    initial={{ opacity: 0, y: 20, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.98 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-full max-w-4xl max-h-[90vh] bg-[#0A0A0A] border border-white/10 rounded-2xl overflow-y-auto overflow-x-hidden shadow-2xl"
                >
                    <button 
                        onClick={onClose}
                        className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 text-white/70 hover:text-white hover:bg-black/80 transition-all backdrop-blur-md"
                    >
                        <X className="w-5 h-5" />
                    </button>

                    {/* Kapak görseli */}
                    <div className="w-full h-64 sm:h-80 relative">
                        <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />
                        
                        <div className="absolute top-6 left-6 z-10">
                            <span className="px-4 py-1.5 text-xs font-semibold bg-white text-black rounded-full shadow-sm">
                                {project.status}
                            </span>
                        </div>
                    </div>

                    <div className="p-6 sm:p-10 space-y-10 relative z-10 -mt-10">
                        <div>
                            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">{project.title}</h3>
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

                        <div className="grid sm:grid-cols-3 gap-6 bg-white/5 p-6 rounded-2xl border border-white/5">
                            <div className="space-y-3">
                                <div className="text-white text-sm font-semibold flex items-center gap-2"><Globe className="w-4 h-4 text-gray-400"/> Durum</div>
                                <p className="text-gray-400 text-sm">{project.status}</p>
                            </div>
                            <div className="space-y-3">
                                <div className="text-white text-sm font-semibold flex items-center gap-2"><Terminal className="w-4 h-4 text-gray-400"/> Geliştirme Süreci</div>
                                <p className="text-gray-400 text-sm leading-relaxed">{project.devProcess}</p>
                            </div>
                            <div className="space-y-3">
                                <div className="text-white text-sm font-semibold flex items-center gap-2"><Map className="w-4 h-4 text-gray-400"/> Gelecek Planları</div>
                                <p className="text-gray-400 text-sm leading-relaxed">{project.futurePlans}</p>
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

    return (
        <section id="projects" className="py-24 relative overflow-hidden">
            <div className="container mx-auto max-w-7xl px-6 relative z-10">
                <div className="mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                            Projeler
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl font-light">
                            Pratik sorunları çözen teknoloji ürünleri, endüstriyel sistemler ve araştırma konseptleri.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative flex flex-col bg-[#0A0A0A] rounded-2xl border border-white/10 overflow-hidden hover:border-white/20 transition-colors"
                        >
                            <div className="relative h-48 w-full overflow-hidden bg-white/5">
                                <img 
                                    src={project.image} 
                                    alt={project.title}
                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                                    loading="lazy"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 text-[10px] uppercase tracking-wider font-semibold bg-white text-black rounded-full shadow-sm">
                                        {project.status}
                                    </span>
                                </div>
                            </div>
                            
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow font-light">
                                    {project.shortDescription}
                                </p>
                                
                                <div className="mb-6 flex flex-wrap gap-2">
                                    {project.techStack.slice(0, 3).map((tech, i) => (
                                        <span key={i} className="px-2 py-1 text-[10px] font-medium bg-white/5 border border-white/10 rounded text-gray-300">
                                            {tech}
                                        </span>
                                    ))}
                                    {project.techStack.length > 3 && (
                                        <span className="px-2 py-1 text-[10px] font-medium bg-white/5 border border-white/10 rounded text-gray-400">
                                            +{project.techStack.length - 3}
                                        </span>
                                    )}
                                </div>
                                
                                <button 
                                    onClick={() => setSelectedProject(project)}
                                    className="w-full py-3 px-4 rounded-xl bg-white/5 text-white text-sm font-medium hover:bg-white/10 transition-colors flex items-center justify-center gap-2 border border-white/10"
                                >
                                    Detayları İncele
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </motion.div>
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
