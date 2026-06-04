import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import { useLanguage } from '../context/LanguageContext';

const LoopDetail = () => {
    const { t } = useLanguage();

    useEffect(() => {
        document.title = "Loop Technology | Independent Technology Venture";
    }, []);

    return (
        <article className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
            <Navbar />
            
            <header className="mb-12 flex flex-col items-center text-center">
                <img src="/images/loop-logo.webp" alt="Loop Technology Logo" className="w-24 h-24 object-contain mb-6" />
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Loop Technology</h1>
                <p className="text-xl text-gray-400 font-light leading-relaxed max-w-2xl">
                    An independent technology venture focused on emergency technologies, health technologies, industrial software, AI systems, and digital products.
                </p>
            </header>

            <section className="space-y-12 text-gray-300 leading-relaxed text-lg mt-16">
                <div>
                    <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">Mission</h2>
                    <p>
                        To develop robust, scalable, and impactful technological solutions that address real-world problems. 
                        We believe technology should transcend basic software creation and focus on human resilience, 
                        automation, and deep tech research.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">Vision</h2>
                    <p>
                        Building a comprehensive technology ecosystem that pioneers advancements in crisis management, 
                        medical research via edge AI, and industrial efficiency.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">Founder</h2>
                    <p>
                        Loop Technology was founded and is led by <a href="/about-atakan-yagli" className="text-primary hover:underline font-semibold">Atakan Yağlı</a>, 
                        a software developer and technology builder.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">Focus Areas & Projects</h2>
                    <div className="space-y-6">
                        <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                            <h3 className="text-xl font-bold text-white mb-2">Emergency Technologies</h3>
                            <p className="text-sm text-gray-400 mb-4">Post-disaster communication and resilience systems.</p>
                            <a href="/project/resq-72" className="inline-block px-3 py-1 bg-primary/20 text-primary text-sm rounded-full">ResQ-72</a>
                        </div>
                        <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                            <h3 className="text-xl font-bold text-white mb-2">Health Technologies</h3>
                            <p className="text-sm text-gray-400 mb-4">Computer vision, biomarker analysis, and health technology research.</p>
                            <div className="flex gap-2">
                                <a href="/project/omni-vital" className="inline-block px-3 py-1 bg-primary/20 text-primary text-sm rounded-full">Omni-Vital</a>
                                <a href="/project/biyo-mercek" className="inline-block px-3 py-1 bg-primary/20 text-primary text-sm rounded-full">Biyo-Mercek</a>
                                <a href="/project/nefes-ag" className="inline-block px-3 py-1 bg-primary/20 text-primary text-sm rounded-full">Nefes-Ağ</a>
                            </div>
                        </div>
                        <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                            <h3 className="text-xl font-bold text-white mb-2">Industrial Systems</h3>
                            <p className="text-sm text-gray-400 mb-4">Systems digitalizing production, inventory, and operational processes.</p>
                            <a href="/project/industrial-erp" className="inline-block px-3 py-1 bg-primary/20 text-primary text-sm rounded-full">Industrial ERP & Warehouse System</a>
                        </div>
                        <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                            <h3 className="text-xl font-bold text-white mb-2">Pet Technologies</h3>
                            <p className="text-sm text-gray-400 mb-4">Pet safety and digital identity systems.</p>
                            <a href="/project/qr-smart-pet-tag" className="inline-block px-3 py-1 bg-primary/20 text-primary text-sm rounded-full">QR Smart Pet Tag</a>
                        </div>
                        <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                            <h3 className="text-xl font-bold text-white mb-2">Digital Products</h3>
                            <p className="text-sm text-gray-400 mb-4">Community and productivity-focused digital platforms.</p>
                            <a href="/project/kampusodak" className="inline-block px-3 py-1 bg-primary/20 text-primary text-sm rounded-full">KampüsOdak</a>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">Technology Roadmap</h2>
                    <p>
                        The roadmap includes deepening research into Edge AI for resource-constrained environments and 
                        expanding the capabilities of our current IoT and ERP systems to support larger industrial networks.
                    </p>
                </div>
            </section>
        </article>
    );
};

export default LoopDetail;
