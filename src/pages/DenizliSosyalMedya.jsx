import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';

function DenizliSosyalMedya() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const schemaJSON = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Denizli Sosyal Medya Yönetimi ve Dijital Pazarlama",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Loop Technology - Atakan Yağlı",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Yenişafak mahallesi 1034 sok.",
        "addressLocality": "Merkezefendi",
        "addressRegion": "Denizli",
        "addressCountry": "TR"
      },
      "telephone": "+905447218974"
    },
    "areaServed": "Denizli",
    "description": "Denizli'deki markalar ve işletmeler için profesyonel sosyal medya yönetimi, içerik üretimi ve performans pazarlaması hizmeti."
  };

  return (
    <>
      <Helmet>
        <title>Denizli Sosyal Medya Yönetimi & Dijital Pazarlama | Loop Technology</title>
        <meta name="description" content="Denizli sosyal medya yönetimi ajansı olarak markanızın Instagram, LinkedIn ve reklam performansını zirveye taşıyoruz. Veri odaklı sosyal medya stratejileri." />
        <meta name="keywords" content="denizli sosyal medya yönetimi, sosyal medya yönetimi denizli, denizli sosyal medya ajansı, denizli dijital pazarlama, denizli reklam ajansı" />
        <meta property="og:title" content="Denizli Sosyal Medya Yönetimi - Loop Technology" />
        <meta property="og:description" content="Markanızı sosyal medyada fark yaratan içerikler ve stratejik reklamlarla büyütüyoruz." />
        <link rel="canonical" href="https://atakanyagli.com/denizli-sosyal-medya-yonetimi" />
        <script type="application/ld+json">
          {JSON.stringify(schemaJSON)}
        </script>
      </Helmet>

      <Navbar />

      <main className="max-w-7xl mx-auto px-6 pt-32 pb-20 space-y-20">
        <section className="text-center space-y-8">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Denizli Sosyal Medya Yönetimi
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Sosyal medyada sadece paylaşım yapmayın; <strong>müşteri kazanın</strong>. Denizli'deki markanızı Instagram, LinkedIn, YouTube ve Meta reklamlarında zirveye taşıyoruz.
          </motion.p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 text-gray-300">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold text-white">Performans Odaklı Sosyal Medya Stratejisi</h2>
            <p>Sıradan şablon tasarımlar hedef kitlenizin dikkatini çekmez. Biz markanızın hikayesini, güçlü görseller, Reels video kurguları ve veri odaklı reklam yönetimiyle buluşturuyoruz.</p>
            <p>Denizli yerel pazar dinamiğini iyi biliyor, hedef kitlenizin tam olarak neye ihtiyaç duyduğunu analiz ederek etkileşimi ve satışları artıran stratejiler uyguluyoruz.</p>
            
            <h3 className="text-2xl font-semibold text-white pt-4">Sosyal Medya Hizmet Kapsamımız</h3>
            <ul className="list-disc list-inside space-y-3 text-gray-300">
              <li><strong>İçerik & Visual Tasarım:</strong> Marka kimliğinize uygun post, story ve carrousel içerik tasarımları.</li>
              <li><strong>Reels & Video Prodüksiyon:</strong> Trend müzikler ve profesyonel kurgu ile yüksek izlenmeli video içerikler.</li>
              <li><strong>Meta & Instagram Reklam Yönetimi:</strong> Minimum bütçe ile maksimum potansiyel müşteri (Lead) dönüşümü.</li>
              <li><strong>Topluluk & İtibar Yönetimi:</strong> Gelen mesaj ve yorumların kurumsal dille anlık takibi ve analizi.</li>
            </ul>
          </motion.div>

          <motion.div 
            className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold text-white mb-6">Sosyal Medya SSS (Sıkça Sorulan Sorular)</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium text-pink-400">Sosyal medya yönetimi ne kadar sürede sonuç verir?</h3>
                <p className="mt-2 text-sm text-gray-400">İlk aydan itibaren etkileşim ve erişim oranlarında belirgin bir artış sağlanır. Satışa dönüşüm ve marka bilinirliği 2-3 ay içerisinde ivme kazanır.</p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-pink-400">Reklam bütçesini kim karşılıyor?</h3>
                <p className="mt-2 text-sm text-gray-400">Sponsorlu reklam bütçeniz tamamen sizin belirlediğiniz tutarda doğrudan Meta/Instagram hesabınızdan çekilir; biz reklam performans yönetimi hizmeti sağlarız.</p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-pink-400">Görsel ve video çekimleri yapıyor musunuz?</h3>
                <p className="mt-2 text-sm text-gray-400">Evet, Denizli içi işletmenizde profesyonel çekim ve içerik kurgusu süreçlerini uçtan uca organize edebiliyoruz.</p>
              </div>
            </div>
          </motion.div>
        </section>

        <Contact />
      </main>
    </>
  );
}

export default DenizliSosyalMedya;
