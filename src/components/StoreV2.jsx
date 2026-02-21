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
        icon: "Tv",
        shopierLink: "https://shopier.com"
    },
    {
        id: 2,
        category: "Intelligence",
        name: "ChatGPT Plus",
        duration: "1 Month",
        oldPrice: 800,
        price: 450,
        color: "#10A37F",
        icon: "Bot",
        shopierLink: "https://shopier.com"
    }
];

const icons = {
    Tv: Tv,
    Bot: Bot,
    ArrowTrendingUp: ArrowTrendingUp,
    PenTool: PenTool
};

const Marketplace = () => {
    const [activeTab, setActiveTab] = useState("All");

    const categories = ["All", "Entertainment", "Intelligence", "Growth", "Pro Tools"];

    const filteredProducts = activeTab === "All"
        ? products
        : products.filter(p => p.category === activeTab);

    return (
        <section id="marketplace" className="py-24 px-4 bg-black">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white">DIJITAL MARKET</h2>
                </div>

                <div className="flex gap-4 justify-center mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveTab(cat)}
                            className={`px-4 py-2 rounded ${activeTab === cat ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-400'}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filteredProducts.map((product) => {
                        const IconCmp = icons[product.icon] || Tv;
                        return (
                            <div key={product.id} className="p-6 bg-gray-900 border border-gray-800 rounded-xl">
                                <IconCmp className="w-8 h-8 mb-4" style={{ color: product.color }} />
                                <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                                <p className="text-gray-400 mb-4">{product.price} TL</p>
                                <button
                                    onClick={() => window.open(product.shopierLink, '_blank')}
                                    className="w-full py-2 bg-white text-black font-bold rounded"
                                >
                                    GET ACCESS
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Marketplace;
