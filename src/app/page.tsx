import HeroSlider from '../../components/HeroSlider';

export default function Home() {
  return (
    <>
      <HeroSlider />
      <section className="text-white py-16 px-8 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Hakkımızda</h2>
        <p className="text-white leading-relaxed max-w-3xl mx-auto">
          Otelimiz Ege'nin en güzel köşesinde, doğa ile iç içe bir tatil deneyimi sunar.
          Yılların tecrübesiyle sizlere konforlu ve huzurlu bir konaklama hizmeti sunmaktan mutluluk duyarız.
        </p>
      </section>
    </>
  );
}
