import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';

const Research = () => {

    useEffect(() => {
        document.title = "Research & Insights | Loop Technology";
    }, []);

    const articles = [
        {
            title: "How ResQ-72 Works",
            desc: "An in-depth look at mesh networking and resilient communication systems designed for post-disaster scenarios."
        },
        {
            title: "Building an AI-Powered Mobile Microscope",
            desc: "The architecture behind Biyo-Mercek and how we utilize edge computing for rapid on-site analysis."
        },
        {
            title: "Acoustic Biomarkers and Respiratory Screening",
            desc: "Exploring the data science behind Nefes-Ağ and using CNNs to analyze cough spectrograms."
        },
        {
            title: "Designing Industrial ERP Systems",
            desc: "How we digitalized manufacturing and warehouse tracking, addressing the unique challenges of the shop floor."
        },
        {
            title: "Computer Vision in Health Technologies",
            desc: "A review of Omni-Vital's non-invasive vital sign estimation techniques via facial rPPG analysis."
        }
    ];

    return (
        <article className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
            <Navbar />
            
            <header className="mb-16 text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Research & Insights</h1>
                <p className="text-xl text-gray-400 font-light leading-relaxed max-w-2xl mx-auto">
                    Deep dives into the technical architecture, problem-solving approaches, and AI research behind Loop Technology's projects.
                </p>
            </header>

            <section className="space-y-6">
                {articles.map((article, idx) => (
                    <div key={idx} className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-primary/50 transition-colors group cursor-pointer">
                        <div className="flex justify-between items-start gap-4">
                            <div>
                                <h2 className="text-2xl font-bold text-white group-hover:text-primary transition-colors mb-2">
                                    {article.title}
                                </h2>
                                <p className="text-gray-400 leading-relaxed">
                                    {article.desc}
                                </p>
                            </div>
                            <span className="shrink-0 px-3 py-1 bg-white/10 text-white text-xs font-semibold rounded-full mt-1">
                                Upcoming
                            </span>
                        </div>
                    </div>
                ))}
            </section>
        </article>
    );
};

export default Research;
