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
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[75vh] md:h-[80vh] w-full overflow-hidden">
      {images.map((src, i) => (
        <Image
          key={i}
          src={src}
          alt={`Slide ${i + 1}`}
          fill
          priority={i === 0}
          sizes="(max-width: 768px) 100vw, 100vw"
          className={`object-cover transition-opacity duration-1000 ease-in-out ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      {/* Hero Metin Alanı */}
      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 drop-shadow-md">
          Hoş Geldiniz
        </h1>
        <p className="text-sm sm:text-base md:text-lg max-w-xl drop-shadow">
          Doğayla iç içe, konforlu ve huzurlu bir konaklama deneyimine hazır olun.
        </p>
      </div>
    </div>
  );
}
