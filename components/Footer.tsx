import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Otel adı ve kısa açıklama */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-white">Otel Adı</h2>
          <p className="text-sm">
            Ege'nin incisi, doğa ile iç içe konforlu konaklama deneyimi.
          </p>
        </div>

        {/* Hızlı Linkler */}
        <div>
          <h3 className="font-semibold mb-4 text-white">Hızlı Linkler</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-white transition">
                Anasayfa
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white transition">
                Hakkımızda
              </Link>
            </li>
            <li>
              <Link href="/rooms" className="hover:text-white transition">
                Odalar
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition">
                İletişim
              </Link>
            </li>
          </ul>
        </div>

        {/* İletişim Bilgileri */}
        <div>
          <h3 className="font-semibold mb-4 text-white">İletişim</h3>
          <p>Adres: Ege Mah. Sahil Cad. No:123, İzmir</p>
          <p>Telefon: +90 555 123 45 67</p>
          <p>E-posta: info@oteladi.com</p>

          {/* Sosyal Medya İkonları (isteğe göre icon kütüphanesi ekleyebilirsin) */}
          <div className="flex space-x-4 mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
              aria-label="Facebook"
            >
              <svg
                className="w-6 h-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M22 12a10 10 0 10-11.6 9.9v-7h-3v-3h3v-2.3c0-3 1.8-4.7 4.5-4.7 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 1-2 2v2.3h3.4l-.5 3h-2.9v7A10 10 0 0022 12z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
              aria-label="Instagram"
            >
              <svg
                className="w-6 h-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M7 2C4 2 2 4 2 7v10c0 3 2 5 5 5h10c3 0 5-2 5-5V7c0-3-2-5-5-5H7zm10 3a1 1 0 110 2 1 1 0 010-2zm-5 1.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM12 8a4 4 0 110 8 4 4 0 010-8z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
              aria-label="Twitter"
            >
              <svg
                className="w-6 h-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.1.9 4.7 4.7 0 002-2.6 10.6 10.6 0 01-3.3 1.3 5.3 5.3 0 00-9 4.8 15 15 0 01-11-5.7 5.3 5.3 0 001.6 7 4.9 4.9 0 01-2.4-.6v.1a5.3 5.3 0 004.3 5.2 5 5 0 01-2.3.1 5.3 5.3 0 004.9 3.6 10.7 10.7 0 01-6.7 2.3A10.8 10.8 0 012 19a15 15 0 008 2c9.5 0 14.7-8 14.7-15v-.7A10.3 10.3 0 0023 3z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
        © 2025 Otel Adı. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}
