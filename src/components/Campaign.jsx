import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, Tag, Sparkles, Rocket } from 'lucide-react';

const Campaign = () => {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const targetDate = new Date();
    // Set date to 30 days from now (or fixed 20 March if it's currently 20 Feb)
    targetDate.setDate(targetDate.getDate() + 30);

    // We actually need a fixed end date string so it doesn't reset on refresh
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

    return (
        <section id="campaign" className="w-full relative py-12">
            {/* Background Animated Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-primary/20 to-blue-600/20 blur-3xl opacity-50 rounded-[3rem] -z-10 mix-blend-screen" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 backdrop-blur-2xl p-8 md:p-12 shadow-[0_0_50px_rgba(var(--primary),0.3)] group"
            >
                {/* Animated Moving Border Glow (Optional simulation) */}
                <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-1000" />
                <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-1000" />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
                    {/* Left Text and Offer Section */}
                    <div className="space-y-6">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary border border-primary/30 font-semibold text-sm backdrop-blur-md"
                        >
                            <Sparkles className="w-4 h-4" />
                            <span>Sınırlı Süreli Teklif</span>
                        </motion.div>

                        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white via-gray-200 to-gray-500 tracking-tight leading-tight">
                            Kapsamlı SEO Eğitim Seti
                        </h2>

                        <p className="text-gray-400 text-lg md:text-xl">
                            Dijital dünyada rakiplerinizi geride bırakın! İlk sayfaya çıkmanın sırlarını anlattığım detaylı eğitim setine sadece bu aya özel indirimle sahip olun.
                        </p>

                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4">
                            <div className="flex flex-col">
                                <span className="text-gray-500 line-through text-2xl font-medium">10.000 TL</span>
                                <span className="text-5xl font-extrabold text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">
                                    4.999 <span className="text-3xl font-bold text-primary">TL</span>
                                </span>
                            </div>
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                                className="bg-red-500 text-white font-bold text-2xl px-6 py-3 rounded-xl rotate-3 shadow-[0_0_30px_rgba(239,68,68,0.5)] border border-red-400/50"
                            >
                                %50 İNDİRİM!
                            </motion.div>
                        </div>
                    </div>

                    {/* Right Timer Section */}
                    <div className="flex flex-col items-center lg:items-end justify-center space-y-8 w-full">
                        <div className="w-full max-w-md p-8 rounded-3xl bg-white/5 border border-white/10 shadow-2xl backdrop-blur-md flex flex-col items-center text-center relative overflow-hidden">
                            {/* Pulse effect behind timer */}
                            <motion.div
                                animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
                                transition={{ repeat: Infinity, duration: 3 }}
                                className="absolute bg-primary/30 w-full h-full rounded-full blur-[80px] -z-10"
                            />

                            <div className="flex items-center gap-3 text-gray-300 mb-6 font-medium text-lg">
                                <Clock className="w-6 h-6 text-primary" />
                                <span>Kampanyanın Bitmesine Son:</span>
                            </div>

                            <div className="grid grid-cols-4 gap-3 md:gap-4 w-full">
                                {timeBlocks.map((block, idx) => (
                                    <div key={idx} className="flex flex-col items-center">
                                        <div className="w-full aspect-square bg-black/50 rounded-xl flex items-center justify-center border border-white/10 shadow-inner overflow-hidden relative">
                                            {/* Subtle reflection */}
                                            <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-50 h-1/2" />

                                            <span className="text-3xl md:text-4xl font-mono font-bold text-white relative z-10">
                                                {block.value.toString().padStart(2, '0')}
                                            </span>
                                        </div>
                                        <span className="text-[10px] md:text-xs font-bold text-gray-400 mt-2 tracking-wider">
                                            {block.label}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 w-full text-center text-sm text-gray-400 bg-white/5 py-2 rounded-lg border border-white/10 border-dashed">
                                Bitiş Tarihi: <span className="font-semibold text-gray-200">22 Mart 2026</span>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="mt-8 w-full py-4 rounded-xl bg-gradient-to-r from-primary to-purple-600 font-bold text-white text-lg shadow-[0_0_20px_rgba(var(--primary),0.5)] flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(var(--primary),0.8)] transition-all"
                            >
                                <Rocket className="w-5 h-5" />
                                Hemen Fırsatı Yakala
                            </motion.button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Campaign;
