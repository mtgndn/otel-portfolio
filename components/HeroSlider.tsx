'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const images = [
  '/hero1.jpg',
  '/hero2.jpg',
  '/hero3.jpg',
  '/hero4.jpg',
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000); // Her 5 saniyede bir geçiş

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[80vh] w-full overflow-hidden">
      {images.map((src, i) => (
        <Image
          key={i}
          src={src}
          alt={`Slide ${i + 1}`}
          fill
          priority={i === 0}
          className={`object-cover transition-opacity duration-1000 ease-in-out ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-4xl font-bold mb-4">Hoş Geldiniz</h1>
        <p className="text-lg max-w-xl">
          Doğayla iç içe, konforlu ve huzurlu bir konaklama deneyimine hazır olun.
        </p>
      </div>
    </div>
  );
}
