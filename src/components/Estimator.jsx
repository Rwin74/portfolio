import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Smartphone, Monitor, Palette, Sparkles, LayoutTemplate, Layers, CheckCircle2, Circle } from 'lucide-react';

const Estimator = () => {
    // State
    const [platform, setPlatform] = useState('web'); // 'web' or 'mobile'
    const [design, setDesign] = useState('ready'); // 'ready' or 'custom'
    const [pages, setPages] = useState(1);
    const [addons, setAddons] = useState({ seo: false, admin: false });
    const [price, setPrice] = useState({ min: 0, max: 0 });

    // Constants
    const BASE_WEB = 20000;
    const BASE_MOBILE = 30000;
    const PAGE_PRICE = 1500;
    const SEO_PRICE = 4999;
    const ADMIN_PRICE = 4999;

    // Calculate Price
    useEffect(() => {
        let currentBase = platform === 'web' ? BASE_WEB : BASE_MOBILE;
        let designMultiplier = design === 'custom' ? 1.5 : 1.0;

        let subtotal = (currentBase * designMultiplier) + (pages * PAGE_PRICE);

        if (addons.seo) subtotal += SEO_PRICE;
        if (addons.admin) subtotal += ADMIN_PRICE;

        // Create range: -5% to +10% to make it feel organic, but requested was a range representing average.
        // Let's use a standard 15% variance for the range.
        const varyAmount = subtotal * 0.15;

        setPrice({
            min: Math.floor((subtotal - varyAmount) / 500) * 500, // Round to nearest 500
            max: Math.ceil((subtotal + varyAmount) / 500) * 500
        });
    }, [platform, design, pages, addons]);

    const formatCurrency = (val) => {
        return new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY', maximumFractionDigits: 0 }).format(val);
    };

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    return (
        <section id="estimator" className="py-24 px-4 relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />
            <div className="absolute top-1/2 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />

            <div className="max-w-5xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-medium tracking-wider uppercase mb-6 backdrop-blur-md"
                    >
                        <Calculator className="w-4 h-4" />
                        <span>Yatırım Planlama</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
                    >
                        Projeniz İçin <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-400 to-green-500">
                            Hızlı Maliyet Tahmini
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-lg max-w-2xl mx-auto"
                    >
                        Hayalinizdeki dijital ürünün özelliklerini seçin, saniyeler içinde anlık tahmini bütçe aralığını görüntüleyin.
                    </motion.p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid lg:grid-cols-12 gap-8"
                >
                    {/* Selectors Column */}
                    <div className="lg:col-span-7 space-y-8">

                        {/* Platform Selection */}
                        <motion.div variants={itemVariants} className="bg-card-bg/50 backdrop-blur-sm border border-white/10 p-6 rounded-3xl">
                            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                                <Layers className="text-primary w-5 h-5" /> 1. Platform
                            </h3>
                            <div className="grid grid-cols-2 gap-4">
                                <button
                                    onClick={() => setPlatform('web')}
                                    className={`relative p-4 rounded-2xl border transition-all duration-300 flex flex-col items-center gap-3 ${platform === 'web' ? 'border-primary bg-primary/10' : 'border-white/10 bg-white/5 hover:border-white/30'}`}
                                >
                                    <div className={`p-3 rounded-full ${platform === 'web' ? 'bg-primary text-white' : 'bg-white/10 text-gray-400'}`}>
                                        <Monitor className="w-6 h-6" />
                                    </div>
                                    <span className={`font-medium ${platform === 'web' ? 'text-white' : 'text-gray-400'}`}>Web Sitesi</span>
                                    {platform === 'web' && <div className="absolute top-3 right-3 text-primary"><Sparkles className="w-4 h-4" /></div>}
                                </button>

                                <button
                                    onClick={() => setPlatform('mobile')}
                                    className={`relative p-4 rounded-2xl border transition-all duration-300 flex flex-col items-center gap-3 ${platform === 'mobile' ? 'border-primary bg-primary/10' : 'border-white/10 bg-white/5 hover:border-white/30'}`}
                                >
                                    <div className={`p-3 rounded-full ${platform === 'mobile' ? 'bg-primary text-white' : 'bg-white/10 text-gray-400'}`}>
                                        <Smartphone className="w-6 h-6" />
                                    </div>
                                    <span className={`font-medium ${platform === 'mobile' ? 'text-white' : 'text-gray-400'}`}>Mobil Uygulama</span>
                                    {platform === 'mobile' && <div className="absolute top-3 right-3 text-primary"><Sparkles className="w-4 h-4" /></div>}
                                </button>
                            </div>
                        </motion.div>

                        {/* Design Selection */}
                        <motion.div variants={itemVariants} className="bg-card-bg/50 backdrop-blur-sm border border-white/10 p-6 rounded-3xl">
                            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                                <Palette className="text-primary w-5 h-5" /> 2. Tasarım Yaklaşımı
                            </h3>
                            <div className="space-y-3">
                                <button
                                    onClick={() => setDesign('ready')}
                                    className={`w-full flex items-center justify-between p-4 rounded-2xl border transition-all duration-300 ${design === 'ready' ? 'border-primary bg-primary/5' : 'border-white/10 bg-white/5 hover:border-white/30'}`}
                                >
                                    <div className="flex items-center gap-4">
                                        {design === 'ready' ? <CheckCircle2 className="text-primary w-6 h-6" /> : <Circle className="text-gray-500 w-6 h-6" />}
                                        <div className="text-left">
                                            <div className={`font-medium ${design === 'ready' ? 'text-white' : 'text-gray-300'}`}>Premium Hazır Şablonlar</div>
                                            <div className="text-sm text-gray-500 mt-1">Sektöre uygun modernize edilmiş yapılar</div>
                                        </div>
                                    </div>
                                </button>

                                <button
                                    onClick={() => setDesign('custom')}
                                    className={`w-full flex items-center justify-between p-4 rounded-2xl border transition-all duration-300 ${design === 'custom' ? 'border-primary bg-primary/5' : 'border-white/10 bg-white/5 hover:border-white/30'}`}
                                >
                                    <div className="flex items-center gap-4">
                                        {design === 'custom' ? <CheckCircle2 className="text-primary w-6 h-6" /> : <Circle className="text-gray-500 w-6 h-6" />}
                                        <div className="text-left">
                                            <div className={`font-medium ${design === 'custom' ? 'text-white' : 'text-gray-300'}`}>Özelleştirilmiş Eşsiz Tasarım</div>
                                            <div className="text-sm text-gray-500 mt-1">Sıfırdan UI/UX süreçleriyle tasarlanmış (+%50 Maliyet)</div>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </motion.div>

                        {/* Page Count */}
                        <motion.div variants={itemVariants} className="bg-card-bg/50 backdrop-blur-sm border border-white/10 p-6 rounded-3xl">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                                    <LayoutTemplate className="text-primary w-5 h-5" /> 3. Kapsam (Sayfa Sayısı)
                                </h3>
                                <div className="text-2xl font-bold font-mono text-primary bg-primary/10 px-4 py-1 rounded-lg">
                                    {pages}
                                </div>
                            </div>
                            <div className="relative pt-2 pb-6">
                                <input
                                    type="range"
                                    min="1"
                                    max="20"
                                    value={pages}
                                    onChange={(e) => setPages(parseInt(e.target.value))}
                                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary"
                                />
                                <div className="flex justify-between text-xs text-gray-500 mt-3 font-mono">
                                    <span>1 (Lading Page)</span>
                                    <span>10+ (Kapsamlı Portal)</span>
                                    <span>20 (Dev Portal)</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Addons */}
                        <motion.div variants={itemVariants} className="bg-card-bg/50 backdrop-blur-sm border border-white/10 p-6 rounded-3xl">
                            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                                <Sparkles className="text-primary w-5 h-5" /> 4. Ekstra Modüller
                            </h3>
                            <div className="grid sm:grid-cols-2 gap-4">
                                <button
                                    onClick={() => setAddons({ ...addons, seo: !addons.seo })}
                                    className={`flex flex-col items-start p-4 rounded-2xl border transition-all duration-300 ${addons.seo ? 'border-primary bg-primary/5' : 'border-white/10 bg-white/5 hover:border-white/30'}`}
                                >
                                    <div className="flex justify-between w-full items-center mb-2">
                                        <span className={`font-medium ${addons.seo ? 'text-white' : 'text-gray-300'}`}>Gelişmiş SEO Paketi</span>
                                        {addons.seo ? <CheckCircle2 className="text-primary w-5 h-5" /> : <div className="w-5 h-5 rounded-full border border-gray-500" />}
                                    </div>
                                    <span className="text-xs text-gray-500 text-left">Hız optimizasyonu, meta yapılandırması ve Schema markup. (+4.999 ₺)</span>
                                </button>

                                <button
                                    onClick={() => setAddons({ ...addons, admin: !addons.admin })}
                                    className={`flex flex-col items-start p-4 rounded-2xl border transition-all duration-300 ${addons.admin ? 'border-emerald-500 bg-emerald-500/5' : 'border-white/10 bg-white/5 hover:border-white/30'}`}
                                >
                                    <div className="flex justify-between w-full items-center mb-2">
                                        <span className={`font-medium ${addons.admin ? 'text-white' : 'text-gray-300'}`}>Admin / CMS Paneli</span>
                                        {addons.admin ? <CheckCircle2 className="text-emerald-500 w-5 h-5" /> : <div className="w-5 h-5 rounded-full border border-gray-500" />}
                                    </div>
                                    <span className="text-xs text-gray-500 text-left">İçerikleri kendiniz yönetebilmeniz için dinamik panel. (+4.999 ₺)</span>
                                </button>
                            </div>
                        </motion.div>

                    </div>

                    {/* Result Column Sticky */}
                    <motion.div variants={itemVariants} className="lg:col-span-5">
                        <div className="sticky top-32 p-[1px] rounded-[2rem] bg-gradient-to-b from-white/20 to-white/5 overflow-hidden group shadow-2xl">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-emerald-500/20 opacity-50 blur-xl" />

                            <div className="relative bg-background p-8 rounded-[31px] flex flex-col items-center justify-center text-center h-full min-h-[400px]">

                                <div className="mb-2 text-primary font-mono text-sm tracking-widest uppercase bg-primary/10 px-3 py-1 rounded-full">
                                    Tahmini Bütçe Aralığı
                                </div>

                                <motion.div
                                    key={`${price.min}-${price.max}`}
                                    initial={{ scale: 0.9, opacity: 0, filter: "blur(10px)" }}
                                    animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    className="my-8"
                                >
                                    <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                                        {formatCurrency(price.min)}
                                    </div>
                                    <div className="text-gray-500 font-medium text-xl italic mb-2">
                                        ile
                                    </div>
                                    <div className="text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400 drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                                        {formatCurrency(price.max)}
                                    </div>
                                </motion.div>

                                <div className="text-sm text-gray-400 mt-auto pt-6 border-t border-white/10 w-full px-4 leading-relaxed">
                                    <span className="text-white font-medium">Not:</span> Belirtilen sonuçlar ortalama fiyattır. Nihai maliyet projeye, eklenecek devasa özelliklere, sektöre ve içeriğin derinliğine göre değişiklik göstermektedir. Kesin fiyat teklifi için iletişime geçebilirsiniz.
                                </div>

                                <motion.a
                                    href="#contact"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="mt-8 w-full py-4 bg-white text-black rounded-xl font-bold flex justify-center items-center gap-2 hover:bg-gray-200 transition-colors"
                                >
                                    Detaylı Teklif Al
                                    <Sparkles className="w-4 h-4" />
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Estimator;
