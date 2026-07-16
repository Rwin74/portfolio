import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';

function DenizliWebSite() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Denizli Web Tasarım ve Web Site Yapan Firmalar | Loop Technology</title>
        <meta name="description" content="Denizli web site tasarımında şık, hızlı ve SEO uyumlu çözümler. Mobil uyumlu kurumsal web sitenizle müşterilerinizi etkileyin." />
        <meta name="keywords" content="denizli web site, denizli web tasarım, denizli web tasarım firmaları, denizli kurumsal web site" />
        <meta property="og:title" content="Denizli Web Tasarım | Modern ve Hızlı Siteler" />
        <meta property="og:description" content="Sıradan temalardan kurtulun, size özel tasarlanmış web siteleriyle fark yaratın." />
        <link rel="canonical" href="https://atakanyagli.com/denizli-web-tasarim" />
      </Helmet>

      <Navbar />
      
      <main className="max-w-7xl mx-auto px-6 pt-32 pb-20 space-y-20">
        
        <section className="text-center space-y-8">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Denizli Web Tasarım
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            İşletmenizin dijital vitrini olan <strong>web sitenizi</strong> modern, hızlı, mobil uyumlu ve SEO standartlarına uygun olarak tasarlıyoruz.
          </motion.p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 text-gray-300">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold text-white">Neden Profesyonel Bir Web Sitesi?</h2>
            <p>Müşterileriniz sizinle fiziksel olarak tanışmadan önce web sitenizi ziyaret eder. Yavaş, karmaşık ve mobil uyumsuz bir site, müşteriyi saniyeler içinde rakibinize gönderir.</p>
            <p>Loop Technology çatısı altında sıradan, kopyala-yapıştır şablonlar kullanmıyoruz. Performans odaklı, marka kimliğinizi yansıtan "Tailor-made" (Terzi işi) projeler çıkarıyoruz.</p>
            <h3 className="text-2xl font-semibold text-white pt-4">Web Tasarım Özelliklerimiz</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>%100 Mobil ve Tablet Uyumu (Responsive Design)</li>
              <li>Işık Hızında Yükleme Süreleri (Vite & React Mimarisi)</li>
              <li>Google Arama Motoru Dostu (Teknik SEO Entegreli)</li>
              <li>Modern, Çekici ve Premium Kullanıcı Arayüzü (UI/UX)</li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold text-white mb-6">Sıkça Sorulan Sorular (Local FAQ)</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium text-purple-400">Bir web sitesi ne kadara mal olur?</h3>
                <p className="mt-2 text-sm text-gray-400">İhtiyaçlarınıza göre değişmektedir. Kurumsal bir tanıtım sitesi ile e-ticaret veya portal sistemleri farklı iş gücü gerektirir. Ücretsiz ön görüşme ile projenizi değerlendiriyoruz.</p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-purple-400">Mevcut web sitemi yenileyebilir misiniz?</h3>
                <p className="mt-2 text-sm text-gray-400">Evet. Eski, yavaş veya SEO açısından başarısız olan sitenizi modern teknolojilerle (React, Node.js) baştan inşa ediyoruz.</p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-purple-400">Hosting ve alan adı (domain) kime ait olacak?</h3>
                <p className="mt-2 text-sm text-gray-400">Tüm dijital varlıkların mülkiyeti her zaman size aittir. İsterseniz barındırma hizmetini (Hosting) performanslı sunucularımızda biz sağlayabiliriz.</p>
              </div>
            </div>
          </motion.div>
        </section>

        <Contact />
      </main>
    </>
  );
}

export default DenizliWebSite;
