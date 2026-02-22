import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Video, Music, Youtube,
    Bot, Image as ImageIcon, Cpu,
    TrendingUp, Users, Heart,
    Box, PenTool, LayoutTemplate,
    ShoppingCart
} from 'lucide-react';

const products = [
    // Eğlence
    { id: 1, category: 'Eğlence', name: 'Netflix Premium', duration: '1 Yıl', price: 1250, oldPrice: 4200, color: '#E50914', icon: Video, shopierLink: '' },
    { id: 2, category: 'Eğlence', name: 'Spotify Premium', duration: '1 Yıl', price: 700, oldPrice: 1400, color: '#1DB954', icon: Music, shopierLink: '' },
    { id: 3, category: 'Eğlence', name: 'YouTube Premium', duration: '1 Yıl', price: 700, oldPrice: 1500, color: '#FF0000', icon: Youtube, shopierLink: '' },
    // Yapay Zeka
    { id: 4, category: 'Yapay Zeka', name: 'Pro', duration: '1 Aylık', price: 100, oldPrice: 250, color: '#10A37F', icon: Bot, shopierLink: '' },
    { id: 5, category: 'Yapay Zeka', name: 'Midjourney Pro', duration: '1 Ay', price: 600, oldPrice: 1500, color: '#9A86FD', icon: ImageIcon, shopierLink: '' },
    { id: 6, category: 'Yapay Zeka', name: 'Gemini Pro', duration: '1 Ay', price: 300, oldPrice: 850, color: '#4285F4', icon: Cpu, shopierLink: '' },
    // Yazılım
    { id: 7, category: 'Yazılım', name: 'AutoCAD 2024', duration: '1 Yıl', price: 999, oldPrice: 3500, color: '#D7282C', icon: Box, shopierLink: '' },
    { id: 8, category: 'Yazılım', name: 'Adobe C. Cloud', duration: '1 Yıl', price: 1000, oldPrice: 2800, color: '#FF0400', icon: PenTool, shopierLink: '' },
    { id: 9, category: 'Yazılım', name: 'Canva Pro', duration: '1 Yıl', price: 25, oldPrice: 150, color: '#00C4CC', icon: LayoutTemplate, shopierLink: '' },
    // Sosyal Büyüme
    { id: 10, category: 'Sosyal Büyüme', name: '10K IG Takipçi', duration: 'Ömür Boyu', price: 600, oldPrice: 1200, color: '#E1306C', icon: Users, shopierLink: '' },
    { id: 11, category: 'Sosyal Büyüme', name: '5K TikTok Beğeni', duration: 'Ömür Boyu', price: 150, oldPrice: 400, color: '#FE2C55', icon: Heart, shopierLink: '' },
    { id: 12, category: 'Sosyal Büyüme', name: 'Organik Yorum', duration: 'Özel', price: 200, oldPrice: 500, color: '#3B5998', icon: TrendingUp, shopierLink: '' },
];

const categories = ['Tümü', 'Eğlence', 'Yapay Zeka', 'Yazılım', 'Sosyal Büyüme'];

const TiltCard = ({ product }) => {
    const cardRef = useRef(null);
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Tilt intensity
        const rotateXValue = ((y - centerY) / centerY) * -15;
        const rotateYValue = ((x - centerX) / centerX) * 15;

        setRotateX(rotateXValue);
        setRotateY(rotateYValue);
    };

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
        setIsHovered(false);
    };

    const handleBuy = () => {
        if (product.shopierLink) {
            const w = 500;
            const h = 700;
            const windowWidth = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : window.screen.width;
            const windowHeight = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : window.screen.height;

            const left = (windowWidth / 2) - (w / 2) + window.screenLeft;
            const top = (windowHeight / 2) - (h / 2) + window.screenTop;

            window.open(product.shopierLink, 'ShopierCheckout', `scrollbars=yes, width=${w}, height=${h}, top=${top}, left=${left}`);
        } else {
            console.log("No shopier link configured yet.");
        }
    };

    const Icon = product.icon;

    // Convert hex to rgb string for rgba usage
    const hexToRgb = (hex) => {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : '255, 255, 255';
    };

    const rgbColor = hexToRgb(product.color);

    return (
        <motion.div
            ref={cardRef}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: 1000 }}
            className="w-full relative group"
        >
            <motion.div
                animate={{
                    rotateX: isHovered ? rotateX : 0,
                    rotateY: isHovered ? rotateY : 0,
                    scale: isHovered ? 1.02 : 1
                }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                style={{
                    boxShadow: isHovered ? `0 20px 40px rgba(${rgbColor}, 0.3), inset 0 0 20px rgba(${rgbColor}, 0.1)` : '0 10px 30px rgba(0,0,0,0.5)',
                    borderColor: isHovered ? `rgba(${rgbColor}, 0.5)` : 'rgba(255,255,255,0.1)',
                    transformStyle: "preserve-3d"
                }}
                className="h-full bg-black/60 backdrop-blur-2xl border rounded-3xl p-6 md:p-8 flex flex-col relative overflow-hidden transition-all duration-300 z-10"
            >
                {/* Background ambient glow matching accent color */}
                <div
                    className="absolute inset-0 opacity-20 pointer-events-none transition-opacity duration-500"
                    style={{
                        background: `radial-gradient(circle at 50% 0%, rgba(${rgbColor}, 0.4), transparent 70%)`,
                        opacity: isHovered ? 0.6 : 0.1
                    }}
                />

                <div className="relative z-10 flex flex-col h-full" style={{ transform: "translateZ(30px)" }}>
                    {/* Animated Sınırlı Stok Badge */}
                    <motion.div
                        animate={{ opacity: [0.7, 1, 0.7], scale: [0.98, 1.02, 0.98] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-3 -right-3 z-20 px-3 py-1 bg-red-500 text-white text-[10px] font-black tracking-widest uppercase rounded-full shadow-[0_0_15px_rgba(239,68,68,0.6)] border border-red-400"
                    >
                        Sınırlı Stok
                    </motion.div>

                    {/* Header */}
                    <div className="flex justify-between items-start mb-8">
                        <div
                            className="p-3.5 rounded-2xl bg-white/5 border border-white/10 transition-all duration-300"
                            style={{
                                boxShadow: isHovered ? `0 0 25px rgba(${rgbColor}, 0.5)` : 'none',
                                color: product.color
                            }}
                        >
                            <Icon className="w-7 h-7" />
                        </div>
                        <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-gray-300 backdrop-blur-md">
                            {product.duration}
                        </span>
                    </div>

                    {/* Title & Category */}
                    <div className="mb-8 flex-grow">
                        <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">{product.name}</h3>
                        <p className="text-sm font-medium text-gray-400 uppercase tracking-wider">{product.category}</p>
                    </div>

                    {/* Pricing */}
                    <div className="mb-8">
                        <div className="flex items-center gap-3 mb-2">
                            <span className="text-base text-gray-500 line-through decoration-red-500/50">{product.oldPrice} ₺</span>
                            <span className="text-xs font-bold px-2.5 py-1 rounded bg-red-500/10 text-red-400 border border-red-500/20">Fırsat</span>
                        </div>
                        <div className="text-4xl font-black text-white tracking-tight flex items-baseline gap-1">
                            {product.price} <span className="text-xl text-gray-400 font-bold">₺</span>
                        </div>
                    </div>

                    {/* Action Button */}
                    <button
                        onClick={handleBuy}
                        className="w-full py-4 rounded-xl font-bold text-white relative overflow-hidden group/btn flex items-center justify-center gap-2 transition-all duration-300 shadow-lg"
                        style={{
                            background: isHovered ? `rgba(${rgbColor}, 0.2)` : 'rgba(255,255,255,0.03)',
                            border: `1px solid ${isHovered ? `rgba(${rgbColor}, 0.5)` : 'rgba(255,255,255,0.1)'}`,
                            boxShadow: isHovered ? `0 0 20px rgba(${rgbColor}, 0.2)` : 'none'
                        }}
                    >
                        <div
                            className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"
                            style={{ background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)` }}
                        />
                        <ShoppingCart className={`w-5 h-5 relative z-10 transition-colors duration-300 ${isHovered ? 'text-white' : 'text-gray-400'}`} />
                        <span className="relative z-10">Hemen Eriş</span>
                    </button>
                </div>
            </motion.div>
        </motion.div>
    );
};

const Marketplace = () => {
    const [activeTab, setActiveTab] = useState('Tümü');

    const filtered = activeTab === 'Tümü'
        ? products
        : products.filter(p => p.category === activeTab);

    return (
        <section id="marketplace" className="py-24 px-4 bg-[#050505] relative overflow-hidden">
            {/* Dark Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

            {/* Subtle Top Glow */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-full max-w-2xl h-80 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header Sequence */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 font-medium text-sm mb-8 backdrop-blur-md"
                    >
                        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                        Premium Lisanslar ve Otomasyonlar
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tight mb-6"
                    >
                        Dijital <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-600">Mağaza</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl"
                    >
                        Dijital varlığınızı zirveye taşıyın. Dünyanın standart araçlarına, eğlence ve büyüme hizmetlerine premium indirimlerle anında erişim sağlayın.
                    </motion.p>
                </div>

                {/* Tabs Filter */}
                <div className="flex flex-wrap justify-center gap-3 mb-16">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveTab(cat)}
                            className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 border ${activeTab === cat
                                ? 'bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.3)] scale-105'
                                : 'bg-black/40 text-gray-400 border-white/10 hover:bg-white/10 hover:text-white backdrop-blur-md hover:border-white/30'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Product Grid Layout */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence>
                        {filtered.map(product => (
                            <TiltCard key={product.id} product={product} />
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Marketplace;
