import React, { useEffect, useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react';
import { blogs } from '../data/blogs';

const BlogPost = () => {
    const { slug } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
        const foundPost = blogs.find(b => b.slug === slug);
        setPost(foundPost);
        setLoading(false);
    }, [slug]);

    if (loading) {
        return <div className="min-h-screen pt-32 flex items-center justify-center text-white">Yükleniyor...</div>;
    }

    if (!post) {
        return <Navigate to="/blog" replace />;
    }

    // Article Schema for SEO
    const schemaOrgJSONLD = {
        "@context": "https://schema.org",
        "@type": "Article",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://atakanyagli.com/blog/${post.slug}`
        },
        "headline": post.title,
        "description": post.excerpt,
        "image": post.image,
        "author": {
            "@type": "Person",
            "name": "Atakan Yağlı",
            "url": "https://atakanyagli.com"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Loop Technology",
            "logo": {
                "@type": "ImageObject",
                "url": "https://atakanyagli.com/favicon/android-chrome-192x192.png"
            }
        },
        "datePublished": "2026-06-15T08:00:00+08:00",
        "dateModified": "2026-07-16T08:00:00+08:00"
    };

    return (
        <div className="pt-24 pb-24 min-h-screen px-4 bg-background">
            <Helmet>
                <title>{post.title} | Loop Technology Blog</title>
                <meta name="description" content={post.excerpt} />
                <link rel="canonical" href={`https://atakanyagli.com/blog/${post.slug}`} />
                <meta property="og:title" content={post.title} />
                <meta property="og:description" content={post.excerpt} />
                <meta property="og:image" content={post.image} />
                <meta property="og:type" content="article" />
                <script type="application/ld+json">
                    {JSON.stringify(schemaOrgJSONLD)}
                </script>
            </Helmet>

            <main className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-8">
                        <ArrowLeft className="w-4 h-4" /> Blog'a Dön
                    </Link>

                    <div className="mb-8">
                        <span className="px-3 py-1 text-xs font-semibold bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20 mb-4 inline-block">
                            {post.category}
                        </span>
                        <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6 leading-[1.2]">
                            {post.title}
                        </h1>
                        <div className="flex items-center gap-6 text-sm text-gray-400 border-y border-white/10 py-4">
                            <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {post.date}</span>
                            <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {post.readTime}</span>
                            <span className="flex items-center gap-2"><Share2 className="w-4 h-4" /> Paylaş</span>
                        </div>
                    </div>

                    <div className="relative w-full h-[300px] md:h-[500px] rounded-3xl overflow-hidden mb-12 border border-white/10">
                        <img 
                            src={post.image} 
                            alt={`${post.title} - Loop Technology Denizli`}
                            className="w-full h-full object-cover"
                            fetchpriority="high"
                        />
                    </div>

                    {/* Blog Content */}
                    <div 
                        className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-gray-300 prose-a:text-blue-400 hover:prose-a:text-blue-300 prose-strong:text-white"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    {/* Author Box */}
                    <div className="mt-16 p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center gap-6">
                        <img src="/sad.webp?v=2" alt="Atakan Yağlı" className="w-24 h-24 rounded-full object-cover border border-white/20" />
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2">Atakan Yağlı</h3>
                            <p className="text-gray-400 text-sm">
                                Loop Technology kurucusu. Denizli merkezli yazılım ve yapay zeka sistemleri geliştiricisi. Dijital dünyada işinizi büyütmek için teknik içerikler üretiyor.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </main>
        </div>
    );
};

export default BlogPost;
