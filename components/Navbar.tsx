import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      <h1 className="text-xl font-bold">Otel Adı</h1>
      <ul className="flex gap-6 text-sm font-medium">
        <li><Link href="/">Anasayfa</Link></li>
        <li><Link href="/about">Hakkımızda</Link></li>
        <li><Link href="/rooms">Odalar</Link></li>
        <li><Link href="/contact">İletişim</Link></li>
      </ul>
    </nav>
  );
}
