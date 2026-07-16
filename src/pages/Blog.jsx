import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { blogs } from '../data/blogs';

const Blog = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <div className="pt-32 pb-24 min-h-screen px-4">
            <Helmet>
                <title>Denizli Yazılım ve SEO Blogu | Loop Technology</title>
                <meta name="description" content="Denizli'de dijital dönüşüm, web tasarım trendleri, yerel SEO stratejileri ve özel yazılım çözümleri hakkında uzman makaleleri." />
                <link rel="canonical" href="https://atakanyagli.com/blog" />
            </Helmet>

            <main className="max-w-6xl mx-auto">
                <motion.div 
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="mb-16 text-center md:text-left"
                >
                    <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-white">
                        Dijital Rehber & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Blog</span>
                    </motion.h1>
                    <motion.p variants={itemVariants} className="text-gray-400 text-lg md:text-xl max-w-2xl font-light">
                        SEO, Yazılım ve Teknoloji dünyasındaki en güncel stratejileri keşfedin. Özellikle Denizli pazarına özel dijital büyüme ipuçları burada.
                    </motion.p>
                </motion.div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {blogs.map((post) => (
                        <motion.article 
                            key={post.id}
                            variants={itemVariants}
                            className="group flex flex-col bg-[#0A0A0A] rounded-3xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]"
                        >
                            <Link to={`/blog/${post.slug}`} className="relative h-56 w-full overflow-hidden block">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                                <img 
                                    src={post.image} 
                                    alt={post.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                    loading="lazy"
                                />
                                <div className="absolute top-4 left-4 z-20">
                                    <span className="px-3 py-1 text-xs font-semibold bg-black/60 backdrop-blur-md border border-white/10 text-white rounded-full">
                                        {post.category}
                                    </span>
                                </div>
                            </Link>
                            
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                                </div>
                                
                                <Link to={`/blog/${post.slug}`}>
                                    <h2 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-blue-400 transition-colors">
                                        {post.title}
                                    </h2>
                                </Link>
                                
                                <p className="text-gray-400 text-sm mb-6 flex-grow line-clamp-3">
                                    {post.excerpt}
                                </p>
                                
                                <Link 
                                    to={`/blog/${post.slug}`}
                                    className="inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:text-blue-400 transition-colors mt-auto"
                                >
                                    Yazıyı Oku <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>
            </main>
        </div>
    );
};

export default Blog;
