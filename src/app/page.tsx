import Navbar from "../../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="h-[80vh] bg-cover bg-center flex items-center justify-center text-white text-center" style={{ backgroundImage: 'url(/hotel.jpg)' }}>
        <div className="bg-black/50 p-8 rounded-lg">
          <h2 className="text-4xl font-bold mb-4">Hoş Geldiniz</h2>
          <p className="text-lg">Konfor, huzur ve doğa ile iç içe bir tatil sizi bekliyor.</p>
        </div>
      </section>

      <section className="py-16 px-8 max-w-5xl mx-auto">
        <h3 className="text-2xl font-semibold mb-6">Hakkımızda</h3>
        <p className="text-gray-700 leading-relaxed">
          Otelimiz Ege'nin en güzel köşesinde doğa ile iç içe bir tatil deneyimi sunar.
          Yılların tecrübesiyle sizlere konforlu ve huzurlu bir konaklama hizmeti sunmaktan mutluluk duyarız.
        </p>
      </section>
    </>
  );
}
