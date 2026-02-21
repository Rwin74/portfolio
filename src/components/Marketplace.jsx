import React, { useState, useEffect } from 'react';
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
        icon: Tv,
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
        icon: Tv,
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

    useEffect(() => {
        console.log("Marketplace mounted and active products:", products.length);
    }, []);

    const filteredProducts = activeTab === "All"
        ? products
        : products.filter(p => p.category === activeTab);

    return (
        <section id="marketplace" className="py-24 px-4 relative overflow-hidden bg-background">
            {/* Background Effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-primary/10 rounded-full blur-[150px] -z-10" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-medium tracking-wider uppercase mb-6 backdrop-blur-md"
                    >
                        <Sparkles className="w-4 h-4" />
                        <span>Dijital Mağaza</span>
                    </motion.div>

                    <h2 className="text-4xl md:text-6xl font-black mb-6 text-white tracking-tighter">
                        LEVEL UP YOUR <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-pink-500">DIGITAL ASSETS</span>
                    </h2>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-16 px-4 py-2 bg-white/5 border border-white/10 rounded-full w-fit mx-auto backdrop-blur-xl">
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
                                    layoutId="marketTab"
                                    className="absolute inset-0 border border-white/20 rounded-full"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                        </button>
                    ))}
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredProducts.map((product) => {
                            const IconCmp = product.icon;
                            return (
                                <motion.div
                                    key={product.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                    className="relative group h-full"
                                >
                                    <div className="relative h-full bg-white/[0.03] border border-white/10 rounded-[2.5rem] p-8 backdrop-blur-md overflow-hidden transition-all duration-500 group-hover:bg-white/[0.08] group-hover:border-white/20 group-hover:-translate-y-2 flex flex-col justify-between">

                                        <div
                                            className="absolute top-0 right-0 w-32 h-32 blur-[60px] opacity-0 group-hover:opacity-40 transition-opacity duration-500"
                                            style={{ backgroundColor: product.color }}
                                        />

                                        <div>
                                            <div className="flex justify-between items-start mb-12">
                                                <div
                                                    className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg border border-white/10 bg-white/5"
                                                    style={{ color: product.color }}
                                                >
                                                    <IconCmp className="w-8 h-8" />
                                                </div>
                                                <div className="flex flex-col items-end">
                                                    <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1 opacity-50">Duration</span>
                                                    <span className="text-xs font-mono text-white bg-white/10 px-3 py-1 rounded-full border border-white/10">{product.duration}</span>
                                                </div>
                                            </div>

                                            <div className="mb-8">
                                                <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-primary transition-colors">{product.name}</h3>
                                                <p className="text-gray-400 text-sm font-medium">{product.category}</p>
                                            </div>
                                        </div>

                                        <div>
                                            <div className="flex items-end gap-3 mb-8">
                                                <div className="flex flex-col">
                                                    <span className="text-xs text-red-400/70 line-through font-mono">{product.oldPrice} ₺</span>
                                                    <span className="text-3xl font-black text-white tracking-tighter">
                                                        {product.price}<span className="text-lg ml-1 font-bold text-gray-400 font-sans">₺</span>
                                                    </span>
                                                </div>
                                                <div className="mb-1 text-[10px] bg-red-500/20 text-red-400 px-2 py-1 rounded-md font-black uppercase tracking-tighter">
                                                    -{Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
                                                </div>
                                            </div>

                                            <button
                                                onClick={() => window.open(product.shopierLink, '_blank')}
                                                className="w-full py-4 bg-white text-black rounded-2xl font-black text-sm uppercase tracking-widest flex items-center justify-center gap-2 group/btn transition-all duration-300 hover:bg-primary hover:text-white"
                                            >
                                                Get Access
                                                <CreditCard className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Marketplace;
