'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 text-white bg-black/30 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold tracking-wide">Otel Adı</h1>

        {/* Hamburger - Mobil */}
        <button
          className="md:hidden flex items-center focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.3 5.71a1 1 0 00-1.42-1.42L12 9.17 7.12 4.29A1 1 0 105.7 5.71L10.59 10.6 5.7 15.49a1 1 0 101.42 1.42L12 12.83l4.88 4.88a1 1 0 001.42-1.42L13.41 10.6l4.89-4.89z"
              />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Menü - Masaüstü */}
        <ul className="hidden md:flex gap-6 text-sm font-semibold">
          <li className="hover:text-gray-300 transition">
            <Link href="/">Anasayfa</Link>
          </li>
          <li className="hover:text-gray-300 transition">
            <Link href="/about">Hakkımızda</Link>
          </li>
          <li className="hover:text-gray-300 transition">
            <Link href="/rooms">Odalar</Link>
          </li>
          <li className="hover:text-gray-300 transition">
            <Link href="/contact">İletişim</Link>
          </li>
        </ul>
      </div>

      {/* Açılır Menü - Mobil */}
      {isOpen && (
        <ul className="md:hidden bg-black/90 px-6 py-4 space-y-4 text-sm font-semibold">
          <li className="hover:text-gray-300 transition">
            <Link href="/" onClick={() => setIsOpen(false)}>Anasayfa</Link>
          </li>
          <li className="hover:text-gray-300 transition">
            <Link href="/about" onClick={() => setIsOpen(false)}>Hakkımızda</Link>
          </li>
          <li className="hover:text-gray-300 transition">
            <Link href="/rooms" onClick={() => setIsOpen(false)}>Odalar</Link>
          </li>
          <li className="hover:text-gray-300 transition">
            <Link href="/contact" onClick={() => setIsOpen(false)}>İletişim</Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
