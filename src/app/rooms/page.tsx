'use client';
import RoomCard from '../../../components/RoomCard';
import { motion } from 'framer-motion';
import Link from 'next/link';

const rooms = [
  {
    slug: 'deniz-manzarali-oda',
    title: 'Deniz Manzaralı Oda',
    description: 'Geniş balkonlu, deniz manzaralı ve ferah bir deneyim.',
    image: '/room1.jpeg',
  },
  {
    slug: 'bahce-kati-oda',
    title: 'Bahçe Katı Oda',
    description: 'Bahçeye açılan, doğayla iç içe huzurlu bir ortam.',
    image: '/room2.jpeg',
  },
  {
    slug: 'suit-oda',
    title: 'Suit Oda',
    description: 'Geniş salon, king-size yatak ve özel jakuzi.',
    image: '/room3.png',
  },
];

export default function RoomsPage() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-slate-100 py-20 px-6">
      <motion.div
        className="max-w-6xl mx-auto text-center mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 relative inline-block after:block after:w-16 after:h-[3px] after:bg-cyan-500 after:mt-2 after:mx-auto">
          Odalarımız
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto text-sm md:text-base mt-2">
          Konfor, doğa ve şıklığın buluştuğu özel oda seçeneklerimizi keşfedin.
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {rooms.map((room, idx) => (
          <Link
            key={idx}
            href={`/rooms/${room.slug}`}
            className="block rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-[1.03]"
          >
            <RoomCard {...room} />
          </Link>
        ))}
      </div>
    </section>
  );
}
