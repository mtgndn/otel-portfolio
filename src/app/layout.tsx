// src/app/layout.tsx
import './globals.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';  // Footer import edildi

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body>
        <Navbar />
        {children}
        <Footer />   {/* Footer burada */}
      </body>
    </html>
  );
}
