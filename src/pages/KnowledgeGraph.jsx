import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import { useLanguage } from '../context/LanguageContext';

const KnowledgeGraph = () => {
    const { t } = useLanguage();

    useEffect(() => {
        document.title = "Who is Atakan Yağlı? | Knowledge Graph";
    }, []);

    return (
        <article className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
            <Navbar />
            
            <header className="mb-12">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Who is Atakan Yağlı?</h1>
                <p className="text-xl text-gray-400 font-light leading-relaxed">
                    Atakan Yağlı is a software developer, technology builder, and the founder of Loop Technology. 
                    He develops projects across emergency technologies, AI systems, health tech, industrial software, and digital products.
                </p>
            </header>

            <section className="space-y-12 text-gray-300 leading-relaxed text-lg">
                <div>
                    <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">Founder of Loop Technology</h2>
                    <p>
                        As the founder of Loop Technology, Atakan focuses on building long-term technological infrastructure 
                        that aims to solve real-world problems. Loop Technology serves as the parent entity for various 
                        ventures ranging from post-disaster communication systems to AI-powered medical research tools.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">Areas of Work & Expertise</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Software Development:</strong> Full-stack web applications, edge computing, and backend infrastructure.</li>
                        <li><strong>Artificial Intelligence:</strong> Computer vision, deep learning models, and edge AI implementations.</li>
                        <li><strong>Emergency Technologies:</strong> Mesh networking and resilient communication systems.</li>
                        <li><strong>Industrial Systems:</strong> ERP software and warehouse digitalization.</li>
                        <li><strong>Health Technologies:</strong> Non-invasive vital sign estimation and AI diagnostics.</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">Projects Developed</h2>
                    <p className="mb-4">Atakan Yağlı has created and developed several notable projects:</p>
                    <div className="grid sm:grid-cols-2 gap-4">
                        <a href="/project/resq-72" className="p-4 bg-white/5 rounded-xl border border-white/10 hover:border-primary/50 transition-colors">
                            <h3 className="text-primary font-bold">ResQ-72</h3>
                            <p className="text-sm text-gray-400">Emergency communication system.</p>
                        </a>
                        <a href="/project/omni-vital" className="p-4 bg-white/5 rounded-xl border border-white/10 hover:border-primary/50 transition-colors">
                            <h3 className="text-primary font-bold">Omni-Vital</h3>
                            <p className="text-sm text-gray-400">Computer vision vital sign estimation.</p>
                        </a>
                        <a href="/project/biyo-mercek" className="p-4 bg-white/5 rounded-xl border border-white/10 hover:border-primary/50 transition-colors">
                            <h3 className="text-primary font-bold">Biyo-Mercek</h3>
                            <p className="text-sm text-gray-400">AI-powered smartphone microscope.</p>
                        </a>
                        <a href="/project/nefes-ag" className="p-4 bg-white/5 rounded-xl border border-white/10 hover:border-primary/50 transition-colors">
                            <h3 className="text-primary font-bold">Nefes-Ağ</h3>
                            <p className="text-sm text-gray-400">Edge AI respiratory disease screening.</p>
                        </a>
                        <a href="/project/kampusodak" className="p-4 bg-white/5 rounded-xl border border-white/10 hover:border-primary/50 transition-colors">
                            <h3 className="text-primary font-bold">KampüsOdak</h3>
                            <p className="text-sm text-gray-400">Digital education platform.</p>
                        </a>
                        <a href="/project/qr-smart-pet-tag" className="p-4 bg-white/5 rounded-xl border border-white/10 hover:border-primary/50 transition-colors">
                            <h3 className="text-primary font-bold">QR Smart Pet Tag</h3>
                            <p className="text-sm text-gray-400">Digital pet identity system.</p>
                        </a>
                        <a href="/project/industrial-erp" className="p-4 bg-white/5 rounded-xl border border-white/10 hover:border-primary/50 transition-colors">
                            <h3 className="text-primary font-bold">Industrial ERP</h3>
                            <p className="text-sm text-gray-400">Manufacturing and warehouse digitalization.</p>
                        </a>
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">Current Research Topics</h2>
                    <p>
                        Currently, his research is heavily focused on edge AI processing, utilizing constrained devices 
                        for complex computing tasks (like acoustic biomarkers), and designing resilient mesh network 
                        topologies for emergency zones.
                    </p>
                </div>
            </section>
        </article>
    );
};

export default KnowledgeGraph;
