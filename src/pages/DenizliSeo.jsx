import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';

function DenizliSeo() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Denizli SEO Ajansı ve Danışmanlığı | Atakan Yağlı - Loop Technology</title>
        <meta name="description" content="Denizli SEO ajansı arayan işletmeler için Loop Technology güvencesiyle arama motoru optimizasyonu hizmeti. Rakiplerinizi geride bırakın, organik trafiğinizi artırın." />
        <meta name="keywords" content="denizli seo, denizli seo ajansı, denizli seo danışmanlığı, denizli seo uzmanı" />
        <meta property="og:title" content="Denizli SEO Ajansı ve Danışmanlığı | Atakan Yağlı" />
        <meta property="og:description" content="Denizli'de işletmenizi Google'da üst sıralara taşıyacak SEO çözümleri." />
        <link rel="canonical" href="https://atakanyagli.com/denizli-seo" />
      </Helmet>

      <Navbar />
      
      <main className="max-w-7xl mx-auto px-6 pt-32 pb-20 space-y-20">
        
        {/* Hero Section */}
        <section className="text-center space-y-8">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-600"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Denizli SEO Ajansı & Danışmanlığı
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Dijital dünyada rakiplerinizin önüne geçmek ve markanızı hedef kitlenizle organik olarak buluşturmak için <strong>Denizli SEO</strong> uzmanı olarak Loop Technology vizyonuyla yanınızdayız.
          </motion.p>
        </section>

        {/* Content Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 text-gray-300">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold text-white">Neden Denizli'de SEO Hizmeti Almalısınız?</h2>
            <p>Denizli gibi rekabetin yüksek olduğu bir sanayi ve ticaret şehrinde, potansiyel müşterileriniz her gün Google'da sizin verdiğiniz hizmetleri aratıyor. Eğer ilk sayfada değilseniz, müşteri kaybediyorsunuz demektir.</p>
            <p>Loop Technology kurucusu Atakan Yağlı olarak, kodlama ve yapay zeka alanındaki tecrübemi teknik SEO altyapısıyla birleştiriyor, algoritmaların beklentilerini eksiksiz karşılıyorum.</p>
            <h3 className="text-2xl font-semibold text-white pt-4">Sunduğumuz SEO Süreçleri</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Teknik SEO Altyapı Analizi (Hız, Core Web Vitals)</li>
              <li>Sektörel Rakip ve Anahtar Kelime Analizi</li>
              <li>Sayfa İçi (On-Page) SEO ve Semantik Kurgu</li>
              <li>Yerel SEO (Google Haritalar ve Local Pack Optimizasyonu)</li>
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
                <h3 className="text-xl font-medium text-blue-400">SEO çalışması ne kadar sürer?</h3>
                <p className="mt-2 text-sm text-gray-400">SEO uzun vadeli bir yatırımdır. Sektör rekabetine göre ilk gözle görülür sonuçlar 3-6 ay içerisinde alınmaktadır.</p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-blue-400">Denizli dışındaki firmalara hizmet veriyor musunuz?</h3>
                <p className="mt-2 text-sm text-gray-400">Evet, önceliğimiz Denizli SEO olmakla beraber tüm Türkiye'ye ve yurt dışına yazılım ve SEO danışmanlığı sağlıyoruz.</p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-blue-400">Garanti veriyor musunuz?</h3>
                <p className="mt-2 text-sm text-gray-400">Google algoritmalarında kesin garanti vermek etik değildir, ancak uyguladığımız teknik standartlar (LoopOS) başarısı kanıtlanmış yöntemlerdir.</p>
              </div>
            </div>
          </motion.div>
        </section>

        <Contact />
      </main>
    </>
  );
}

export default DenizliSeo;
