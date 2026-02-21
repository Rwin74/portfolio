import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tv, Bot, ArrowTrendingUp, PenTool, Sparkles, CreditCard } from 'lucide-react';

const products = [
    {
        id: 1,
        category: "Entertainment",
        name: "Netflix Premium",
        duration: "1 Year",
        oldPrice: 1200,
        price: 499,
        color: "#E50914",
        icon: Tv,
        shopierLink: "https://shopier.com"
    },
    {
        id: 2,
        category: "Entertainment",
        name: "Spotify Premium",
        duration: "1 Year",
        oldPrice: 800,
        price: 299,
        color: "#1DB954",
        icon: Tv, // Fallback icon if you prefer Music icon, we can use Music instead
        shopierLink: "https://shopier.com"
    },
    {
        id: 3,
        category: "Entertainment",
        name: "YouTube Premium",
        duration: "1 Year",
        oldPrice: 900,
        price: 349,
        color: "#FF0000",
        icon: Tv, // Fallback
        shopierLink: "https://shopier.com"
    },
    {
        id: 4,
        category: "Intelligence",
        name: "ChatGPT Plus",
        duration: "1 Month",
        oldPrice: 800,
        price: 450,
        color: "#10A37F",
        icon: Bot,
        shopierLink: "https://shopier.com"
    },
    {
        id: 5,
        category: "Intelligence",
        name: "Midjourney Pro",
        duration: "1 Month",
        oldPrice: 1200,
        price: 599,
        color: "#FFFFFF",
        icon: Bot,
        shopierLink: "https://shopier.com"
    },
    {
        id: 6,
        category: "Intelligence",
        name: "Gemini Advanced",
        duration: "1 Month",
        oldPrice: 750,
        price: 399,
        color: "#4285F4",
        icon: Bot,
        shopierLink: "https://shopier.com"
    },
    {
        id: 7,
        category: "Growth",
        name: "10K Instagram Follower",
        duration: "Lifetime",
        oldPrice: 500,
        price: 199,
        color: "#E1306C",
        icon: ArrowTrendingUp,
        shopierLink: "https://shopier.com"
    },
    {
        id: 8,
        category: "Pro Tools",
        name: "AutoCAD 2024",
        duration: "1 Year",
        oldPrice: 5000,
        price: 999,
        color: "#D22129",
        icon: PenTool,
        shopierLink: "https://shopier.com"
    },
    {
        id: 9,
        category: "Pro Tools",
        name: "Adobe CC All Apps",
        duration: "1 Year",
        oldPrice: 8500,
        price: 1499,
        color: "#FF0000",
        icon: PenTool,
        shopierLink: "https://shopier.com"
    },
    {
        id: 10,
        category: "Pro Tools",
        name: "Canva Pro",
        duration: "Lifetime",
        oldPrice: 1500,
        price: 299,
        color: "#00C4CC",
        icon: PenTool,
        shopierLink: "https://shopier.com"
    }
];

const categories = ["All", "Entertainment", "Intelligence", "Growth", "Pro Tools"];

const Marketplace = () => {
    const [activeTab, setActiveTab] = useState("All");

    const filteredProducts = activeTab === "All"
        ? products
        : products.filter(p => p.category === activeTab);

    return (
        <section id="marketplace" className="py-24 px-4 relative">
            {/* Dark cyberpunk background base */}
            <div className="absolute inset-0 bg-[#050505] -z-20 border-y border-white/5" />

            {/* Subtle Grid Pattern Overlay */}
            <div className="absolute inset-0 -z-10"
                style={{
                    backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                    maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
                    WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
                }}
            />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-medium tracking-wider mb-6 backdrop-blur-md uppercase"
                    >
                        <Sparkles className="w-4 h-4" />
                        <span>The Marketplace</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 text-white"
                        style={{ textShadow: '0 0 40px rgba(255, 255, 255, 0.1)' }}
                    >
                        Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white">Assets</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-lg max-w-2xl mx-auto"
                    >
                        Premium lisanslar, AI araçları ve profesyonel yazılımlar. İhtiyacınız olan dijital güce anında erişin.
                    </motion.p>
                </div>

                {/* Categories Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16"
                >
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveTab(cat)}
                            className={`relative px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${activeTab === cat
                                    ? 'text-white bg-white/10 shadow-[0_0_20px_rgba(255,255,255,0.1)]'
                                    : 'text-gray-500 hover:text-white hover:bg-white/5'
                                }`}
                        >
                            {cat}
                            {activeTab === cat && (
                                <motion.div
                                    layoutId="marketplace-tab-indicator"
                                    className="absolute inset-0 rounded-full border border-white/20 pointer-events-none"
                                />
                            )}
                        </button>
                    ))}
                </motion.div>

                {/* Product Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                >
                    <AnimatePresence mode='popLayout'>
                        {filteredProducts.map((product) => {
                            const IconCmp = product.icon;

                            return (
                                <motion.div
                                    key={product.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.3, type: "spring", stiffness: 200, damping: 20 }}
                                    className="relative group perspective-1000"
                                >
                                    {/* Neon Glow Behind Card */}
                                    <div
                                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 blur-2xl"
                                        style={{ backgroundColor: product.color }}
                                    />

                                    {/* Glassmorphism Card */}
                                    <motion.div
                                        whileHover={{ scale: 1.02, rotateX: 5, rotateY: -5 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                        className="relative h-full bg-[#111111]/80 backdrop-blur-xl border border-white/5 hover:border-white/20 rounded-2xl p-6 flex flex-col items-start overflow-hidden shadow-2xl transition-colors duration-300"
                                        style={{ transformStyle: 'preserve-3d' }}
                                    >
                                        {/* Accent line top */}
                                        <div
                                            className="absolute top-0 left-0 w-full h-1 opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                                            style={{ backgroundColor: product.color, boxShadow: `0 0 10px ${product.color}` }}
                                        />

                                        {/* Icon & Category */}
                                        <div className="flex justify-between items-start w-full mb-6 relative" style={{ transform: 'translateZ(20px)' }}>
                                            <div
                                                className="p-3 rounded-xl bg-white/5 border border-white/10"
                                                style={{ color: product.color }}
                                            >
                                                <IconCmp className="w-6 h-6" />
                                            </div>
                                            <span className="text-xs font-mono uppercase tracking-wider text-gray-500 bg-black/50 px-3 py-1 rounded-full border border-white/5">
                                                {product.category}
                                            </span>
                                        </div>

                                        {/* Title area */}
                                        <div className="mb-6 relative w-full" style={{ transform: 'translateZ(30px)' }}>
                                            <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                                            <div className="flex items-center gap-2">
                                                <span className="text-xs font-medium px-2 py-1 rounded-md bg-white/10 text-gray-300">
                                                    {product.duration}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Pricing & CTA */}
                                        <div className="mt-auto pt-6 border-t border-white/10 w-full flex items-end justify-between relative" style={{ transform: 'translateZ(40px)' }}>
                                            <div>
                                                <div className="text-sm text-gray-500 line-through mb-1">
                                                    {product.oldPrice} ₺
                                                </div>
                                                <div className="text-3xl font-black text-white flex items-end gap-1">
                                                    {product.price} <span className="text-lg font-bold text-gray-400 mb-1">₺</span>
                                                </div>
                                            </div>

                                            <button
                                                onClick={() => window.open(product.shopierLink, '_blank')}
                                                className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200 transition-colors group/btn shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:shadow-[0_0_25px_rgba(255,255,255,0.5)]"
                                                aria-label="Get Access"
                                            >
                                                <CreditCard className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                                            </button>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Marketplace;
