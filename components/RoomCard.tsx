'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface RoomCardProps {
  title: string;
  description: string;
  image: string;
}

export default function RoomCard({ title, description, image }: RoomCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition duration-300 hover:scale-105"
    >
      <div className="relative h-56 w-full">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
}
