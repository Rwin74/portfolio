import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, Sparkles, Rocket, Moon, Star } from 'lucide-react';

const Campaign = () => {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    // Ramazan Kampanyası Bitiş Tarihi
    const endDateStr = "2026-03-22T23:59:59";
    const endDate = new Date(endDateStr);

    useEffect(() => {
        const interval = setInterval(() => {
            const distance = endDate.getTime() - new Date().getTime();

            if (distance < 0) {
                clearInterval(interval);
                return;
            }

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000),
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const timeBlocks = [
        { label: 'GÜN', value: timeLeft.days },
        { label: 'SAAT', value: timeLeft.hours },
        { label: 'DAKİKA', value: timeLeft.minutes },
        { label: 'SANİYE', value: timeLeft.seconds },
    ];

    const campaigns = [
        {
            id: 1,
            tag: "Ramazan'a Özel",
            title: "Kapsamlı SEO Eğitim Seti",
            description: "Dijital dünyada rakiplerinizi geride bırakın! İlk sayfaya çıkmanın sırlarını anlattığım detaylı eğitim setine bu aya özel indirimle sahip olun.",
            oldPrice: "10.000 TL",
            newPrice: "4.999",
            discount: "%50 İNDİRİM!",
            badgeColor: "from-green-500 to-emerald-700",
            glowColor: "rgba(16,185,129,0.5)"
        },
        {
            id: 2,
            tag: "Ramazan'a Özel",
            title: "AI Otomasyon & Prompt Mühendisliği",
            description: "Yapay zekanın gücünü işinize entegre edin! Profesyonel seviye prompt teknikleri ve iş akışı otomasyonlarıyla geleceğe bugünden hazırlanın.",
            oldPrice: "15.000 TL",
            newPrice: "7.999",
            discount: "%46 İNDİRİM!",
            badgeColor: "from-amber-500 to-orange-700",
            glowColor: "rgba(245,158,11,0.5)"
        }
    ];

    return (
        <section id="campaigns" className="w-full relative py-16">
            {/* Ramazan Concept Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#1e1b4b] to-[#0f172a] -z-20 mix-blend-multiply" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-600/10 via-transparent to-transparent -z-10 blur-3xl" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent -z-10 blur-3xl" />

            {/* Decorative Moon & Stars */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
                className="absolute top-10 right-10 md:top-20 md:right-20 opacity-20 text-amber-500 -z-10"
            >
                <Moon className="w-32 h-32 md:w-64 md:h-64" fill="currentColor" />
            </motion.div>
            <div className="absolute top-1/4 left-10 opacity-30 text-amber-300 -z-10 animate-pulse"><Star className="w-8 h-8" fill="currentColor" /></div>
            <div className="absolute bottom-1/4 right-1/4 opacity-20 text-amber-200 -z-10 animate-pulse delay-700"><Star className="w-6 h-6" fill="currentColor" /></div>

            <div className="text-center mb-16 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30 font-bold mb-6 backdrop-blur-md"
                >
                    <Moon className="w-5 h-5" fill="currentColor" />
                    <span>Hayırlı Ramazanlar</span>
                    <Moon className="w-5 h-5 scale-x-[-1]" fill="currentColor" />
                </motion.div>
                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
                    Bereketli <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">Ramazan Fırsatları</span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                    Kendinize yatırım yapmanın tam zamanı. Kariyerinizi hızlandıracak eğitim setlerinde Ramazan ayına özel kaçırılmayacak indirimler!
                </p>
            </div>

            <div className="flex flex-col gap-12 relative z-10 w-full max-w-6xl mx-auto">
                {campaigns.map((camp, index) => (
                    <motion.div
                        key={camp.id}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className={`relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 backdrop-blur-2xl p-8 md:p-12 group`}
                    >
                        {/* Animated Moving Border Glow */}
                        <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />
                        <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />

                        {/* Core Card Layout */}
                        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>

                            {/* Left/Right Text Section */}
                            <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 text-amber-400 border border-amber-400/30 font-semibold text-sm backdrop-blur-md shadow-[0_0_15px_rgba(251,191,36,0.2)]"
                                >
                                    <Sparkles className="w-4 h-4" />
                                    <span>{camp.tag}</span>
                                </motion.div>

                                <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
                                    {camp.title}
                                </h3>

                                <p className="text-gray-300 text-lg">
                                    {camp.description}
                                </p>

                                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4">
                                    <div className="flex flex-col">
                                        <span className="text-gray-500 line-through text-2xl font-medium">{camp.oldPrice}</span>
                                        <span className="text-5xl font-extrabold text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">
                                            {camp.newPrice} <span className="text-3xl font-bold text-amber-400">TL</span>
                                        </span>
                                    </div>
                                    <motion.div
                                        animate={{ y: [0, -8, 0] }}
                                        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut", delay: index * 0.5 }}
                                        className={`bg-gradient-to-r ${camp.badgeColor} text-white font-bold text-xl px-6 py-3 rounded-xl rotate-3 shadow-[0_0_30px_${camp.glowColor}] border border-white/20`}
                                    >
                                        {camp.discount}
                                    </motion.div>
                                </div>
                            </div>

                            {/* Right/Left Timer Section */}
                            <div className={`flex flex-col items-center justify-center space-y-8 w-full ${index % 2 === 1 ? 'lg:order-1 lg:items-start' : 'lg:order-2 lg:items-end'}`}>
                                <div className="w-full max-w-md p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/10 shadow-2xl backdrop-blur-md flex flex-col items-center text-center relative overflow-hidden">

                                    <div className="flex items-center gap-3 text-amber-200 mb-6 font-medium text-lg">
                                        <Clock className="w-6 h-6 text-amber-400" />
                                        <span>Kampanya Bitiş Tarihi:</span>
                                    </div>

                                    <div className="grid grid-cols-4 gap-2 sm:gap-4 w-full">
                                        {timeBlocks.map((block, idx) => (
                                            <div key={idx} className="flex flex-col items-center">
                                                <div className="w-full aspect-square bg-black/60 rounded-xl flex items-center justify-center border border-amber-900/50 shadow-inner overflow-hidden relative">
                                                    {/* Subtle golden reflection */}
                                                    <div className="absolute inset-0 bg-gradient-to-b from-amber-500/10 to-transparent opacity-50 h-1/2" />
                                                    <span className="text-2xl sm:text-3xl md:text-4xl font-mono font-bold text-white relative z-10 drop-shadow-md">
                                                        {block.value.toString().padStart(2, '0')}
                                                    </span>
                                                </div>
                                                <span className="text-[9px] sm:text-[10px] md:text-xs font-bold text-amber-500/80 mt-2 tracking-wider">
                                                    {block.label}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-8 w-full text-center text-sm text-gray-400 bg-black/30 py-2 rounded-lg border border-white/5">
                                        Son Gün: <span className="font-semibold text-amber-400">22 Mart 2026</span>
                                    </div>

                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`mt-6 w-full py-4 rounded-xl bg-gradient-to-r ${camp.badgeColor} font-bold text-white text-lg shadow-[0_0_20px_${camp.glowColor}] flex items-center justify-center gap-2 hover:brightness-110 transition-all`}
                                    >
                                        <Rocket className="w-5 h-5" />
                                        Hemen Fırsatı Yakala
                                    </motion.button>
                                </div>
                            </div>

                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Campaign;
