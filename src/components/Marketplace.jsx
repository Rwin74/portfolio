import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Marketplace = () => {
    const [activeTab, setActiveTab] = useState("All");

    const simpleProducts = [
        { id: 1, category: "Entertainment", name: "Netflix", price: 499 },
        { id: 2, category: "Intelligence", name: "ChatGPT", price: 450 }
    ];

    const filtered = activeTab === "All"
        ? simpleProducts
        : simpleProducts.filter(p => p.category === activeTab);

    return (
        <section id="marketplace" className="py-24 px-4 bg-background">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-4xl font-bold text-white text-center mb-12"
                >
                    MOTION TEST
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <AnimatePresence>
                        {filtered.map(p => (
                            <motion.div
                                key={p.id}
                                layout
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="p-6 bg-white/5 border border-white/10 rounded-xl text-white"
                            >
                                {p.name} - {p.price} TL
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Marketplace;
