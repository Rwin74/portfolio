import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';

function DenizliYazilim() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Denizli Yazılım Firması ve Geliştirme Çözümleri | Loop Technology</title>
        <meta name="description" content="Denizli yazılım şirketi arayışınızda Loop Technology ile özel yazılım, yapay zeka entegrasyonu ve kurumsal çözümler. Geleceğin teknolojisiyle tanışın." />
        <meta name="keywords" content="denizli yazılım, denizli yazılım firması, denizli yazılım şirketi, özel yazılım denizli" />
        <meta property="og:title" content="Denizli Yazılım Firması ve Özel Çözümler" />
        <meta property="og:description" content="İşletmenizi dijitalleştirecek uçtan uca yazılım çözümleri." />
        <link rel="canonical" href="https://atakanyagli.com/denizli-yazilim" />
      </Helmet>

      <Navbar />
      
      <main className="max-w-7xl mx-auto px-6 pt-32 pb-20 space-y-20">
        
        <section className="text-center space-y-8">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-500"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Denizli Yazılım Firması
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Sadece web siteleri değil, süreçlerinizi otomatize eden, verimliliğinizi katlayan yapay zeka destekli <strong>özel yazılımlar</strong> üretiyoruz.
          </motion.p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 text-gray-300">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold text-white">Yazılımda Neden Loop Technology?</h2>
            <p>Standart çözümler herkes içindir. Biz firmanızın DNA'sına uygun, tamamen size özel endüstriyel yazılımlar ve dijital ürünler geliştiriyoruz.</p>
            <p>İster e-ticaret altyapısı, ister ERP sistemleri, ister acil durum teknolojileri olsun, modern teknoloji yığınımızla (React, Node, AI) kalıcı çözümler üretiyoruz.</p>
            <h3 className="text-2xl font-semibold text-white pt-4">Geliştirme Hizmetlerimiz</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Özel Web & Mobil Uygulama Geliştirme</li>
              <li>Endüstriyel Yazılım & ERP Sistemleri</li>
              <li>Yapay Zeka (AI) ve Veri İşleme Entegrasyonları</li>
              <li>API Geliştirme ve Mikroservis Mimarisi</li>
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
                <h3 className="text-xl font-medium text-emerald-400">Yazılım projeleri ne kadar sürüyor?</h3>
                <p className="mt-2 text-sm text-gray-400">Projenin kapsamına bağlı olarak MVP (Minimum Viable Product) aşamasını genellikle 4-8 hafta içinde teslim ediyoruz.</p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-emerald-400">Sadece Denizli'ye mi yazılım hizmeti veriyorsunuz?</h3>
                <p className="mt-2 text-sm text-gray-400">Merkezimiz Denizli odaklı olsa da, global çapta teknoloji üretiyor ve uzaktan (remote) çalışma modeliyle dünyanın her yerine ulaşıyoruz.</p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-emerald-400">Geliştirme sonrası destek var mı?</h3>
                <p className="mt-2 text-sm text-gray-400">Elbette. Yazılım canlıya alındıktan sonra da bakım, güncelleme ve barındırma destekleri sağlamaya devam ediyoruz.</p>
              </div>
            </div>
          </motion.div>
        </section>

        <Contact />
      </main>
    </>
  );
}

export default DenizliYazilim;
