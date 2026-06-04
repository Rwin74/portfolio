import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useLanguage } from '../context/LanguageContext';
import { Activity, Workflow, Code2, Globe, Terminal, Map, Sparkles, ArrowLeft } from 'lucide-react';

const ProjectDetail = () => {
    const { slug } = useParams();
    const { t } = useLanguage();

    const project = t.projects.items.find(p => p.id === slug);

    useEffect(() => {
        if (project) {
            document.title = `${project.title} | Loop Technology`;
        }
    }, [project]);

    if (!project) {
        return <Navigate to="/" />;
    }

    return (
        <article className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
            <Navbar />
            
            <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8">
                <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>

            <header className="mb-12 relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 p-6 md:p-12">
                <div className="flex flex-col md:flex-row gap-8 items-start md:items-center relative z-10">
                    <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full md:w-1/3 aspect-[4/3] object-cover rounded-xl shadow-lg border border-white/10" 
                    />
                    <div className="flex-1 space-y-4">
                        <div className="flex items-center gap-3">
                            <span className="px-3 py-1 bg-white text-black text-xs font-bold rounded-full uppercase tracking-wide">
                                {project.status}
                            </span>
                            <Link to="/loop-technology" className="px-3 py-1 bg-primary/20 text-primary border border-primary/30 text-xs font-semibold rounded-full flex items-center gap-2 hover:bg-primary/30 transition-colors">
                                <img src="/images/loop-logo.webp" alt="Loop" className="w-3 h-3" />
                                {t.projects.modal.partOfLoop}
                            </Link>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">{project.title}</h1>
                        <p className="text-xl text-gray-400 font-light leading-relaxed">
                            {project.shortDescription}
                        </p>
                        <p className="text-sm text-gray-500 pt-2 font-medium">Created by Atakan Yağlı</p>
                    </div>
                </div>
                
                {/* Background glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
            </header>

            <section className="space-y-12">
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <h2 className="flex items-center gap-2 text-xl text-white font-bold border-b border-white/10 pb-2">
                            <Activity className="w-5 h-5 text-primary" /> {t.projects.modal.problem}
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            {project.problem}
                        </p>
                    </div>
                    
                    <div className="space-y-4">
                        <h2 className="flex items-center gap-2 text-xl text-white font-bold border-b border-white/10 pb-2">
                            <Workflow className="w-5 h-5 text-primary" /> {t.projects.modal.solution}
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            {project.solution}
                        </p>
                    </div>
                </div>

                <div className="space-y-4">
                    <h2 className="flex items-center gap-2 text-xl text-white font-bold border-b border-white/10 pb-2">
                        <Code2 className="w-5 h-5 text-primary" /> {t.projects.modal.techStack}
                    </h2>
                    <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, i) => (
                            <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-gray-300 font-medium">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 bg-white/5 p-8 rounded-2xl border border-white/10">
                    <div className="space-y-3">
                        <h3 className="text-white font-bold flex items-center gap-2"><Globe className="w-5 h-5 text-gray-400"/> {t.projects.modal.status}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{project.status}</p>
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-white font-bold flex items-center gap-2"><Terminal className="w-5 h-5 text-gray-400"/> {t.projects.modal.impact}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{project.impact}</p>
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-white font-bold flex items-center gap-2"><Map className="w-5 h-5 text-gray-400"/> {t.projects.modal.nextStep}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{project.nextStep}</p>
                    </div>
                </div>

                {project.extraSections && project.extraSections.length > 0 && (
                    <div className="grid md:grid-cols-2 gap-8 pt-8">
                        {project.extraSections.map((section, index) => (
                            <div key={index} className="space-y-4">
                                <h3 className="flex items-center gap-2 text-lg text-white font-bold border-b border-white/10 pb-2">
                                    <Sparkles className="w-5 h-5 text-primary" /> {section.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {section.content}
                                </p>
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </article>
    );
};

export default ProjectDetail;
