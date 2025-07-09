'use client';
import HeroSlider from '../../components/HeroSlider';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
      <HeroSlider />

      {/* Hakkımızda Bölümü */}
      <section className="bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white py-20 px-6">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block after:block after:w-16 after:h-[3px] after:bg-cyan-400 after:mt-2 after:mx-auto">
            Hakkımızda
          </h2>

          <p className="text-white/90 leading-relaxed max-w-3xl mx-auto text-sm md:text-base mt-6">
            Otelimiz Ege'nin en güzel köşesinde, doğa ile iç içe bir tatil deneyimi sunar.
            Yılların tecrübesiyle sizlere konforlu ve huzurlu bir konaklama hizmeti sunmaktan mutluluk duyarız.
          </p>
        </motion.div>
      </section>
    </>
  );
}
