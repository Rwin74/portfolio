import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';

function DenizliOzelYazilim() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const schemaJSON = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Denizli Özel Yazılım Geliştirme Hizmeti",
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
    "description": "Denizli bölgesindeki şirketler için özel web, mobil, ERP ve otomasyon yazılımları geliştirme hizmeti."
  };

  return (
    <>
      <Helmet>
        <title>Denizli Özel Yazılım Geliştirme & Kurumsal Çözümler | Loop Technology</title>
        <meta name="description" content="Denizli özel yazılım ihtiyaçlarınız için firmanıza özel ERP, CRM, otomasyon ve mobil uygulama çözümleri. İşletmenizi ölçeklendirecek modern kod altyapısı." />
        <meta name="keywords" content="denizli özel yazılım, denizli özel yazılım geliştirme, özel yazılım denizli, denizli kurumsal yazılım, denizli yazılım firması" />
        <meta property="og:title" content="Denizli Özel Yazılım Geliştirme - Loop Technology" />
        <meta property="og:description" content="İşletmenizin ihtiyaçlarına tam uyan özel yazılım projeleri geliştiriyoruz." />
        <link rel="canonical" href="https://atakanyagli.com/denizli-ozel-yazilim" />
        <script type="application/ld+json">
          {JSON.stringify(schemaJSON)}
        </script>
      </Helmet>

      <Navbar />

      <main className="max-w-7xl mx-auto px-6 pt-32 pb-20 space-y-20">
        <section className="text-center space-y-8">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Denizli Özel Yazılım Geliştirme
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hazır paketlerin kısıtlamalarından kurtulun. Denizli'deki sanayi, tekstil, e-ticaret ve hizmet şirketleri için <strong>%100 ölçeklenebilir özel yazılım</strong> sistemleri üretiyoruz.
          </motion.p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 text-gray-300">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold text-white">Neden İşletmenize Özel Yazılım?</h2>
            <p>Her işletmenin çalışma iş akışı benzersizdir. Genel geçer paket yazılımlar operasyonel süreçlerinize tam uyum sağlayamaz ve uzun vadede maliyet yaratır.</p>
            <p>Loop Technology olarak, Denizli'de şirketlerin özel ihtiyaçlarını analiz ediyor, sıfırdan tamamen size ait kaynak kodlar ve yüksek güvenlik standartlarıyla projeler inşa ediyoruz.</p>
            
            <h3 className="text-2xl font-semibold text-white pt-4">Özel Yazılım Alanlarımız</h3>
            <ul className="list-disc list-inside space-y-3 text-gray-300">
              <li><strong>Kurumsal ERP & CRM Sistemleri:</strong> Şirket içi depo, üretim, müşteri ve satış süreçlerinin otomasyonu.</li>
              <li><strong>Özel Mobil Uygulamalar:</strong> iOS ve Android platformları için yüksek performanslı mobil çözümler.</li>
              <li><strong>B2B & B2C E-Ticaret Platformları:</strong> Yüksek trafikli, ödeme entegrasyonlu ve özel panelli pazaryeri/e-ticaret sistemleri.</li>
              <li><strong>Yapay Zeka Destekli Otomasyonlar:</strong> Veri analizi, görüntü işleme ve süreç hızlandırıcı AI algoritmaları.</li>
            </ul>
          </motion.div>

          <motion.div 
            className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold text-white mb-6">Özel Yazılım FAQ (Sıkça Sorulan Sorular)</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium text-cyan-400">Yazılımın kaynak kodları bize mi ait olacak?</h3>
                <p className="mt-2 text-sm text-gray-400">Evet, geliştirdiğimiz tüm özel yazılım projelerinde fikri mülkiyet ve kaynak kod mülkiyeti tamamen müşterimize aittir.</p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-cyan-400">Mevcut sistemlerimizle entegre çalışabilir mi?</h3>
                <p className="mt-2 text-sm text-gray-400">Geliştirdiğimiz esnek API mimarisi sayesinde ön muhasebe, kargo, ERP ve veritabanı sistemlerinizle %100 entegre çözümler sunuyoruz.</p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-cyan-400">Denizli'de yüz yüze toplantı yapabilir miyiz?</h3>
                <p className="mt-2 text-sm text-gray-400">Kesinlikle. Denizli Merkezefendi lokasyonumuzda veya işletmenizde projenizi detaylandırmak için yüz yüze analiz toplantıları gerçekleştiriyoruz.</p>
              </div>
            </div>
          </motion.div>
        </section>

        <Contact />
      </main>
    </>
  );
}

export default DenizliOzelYazilim;
