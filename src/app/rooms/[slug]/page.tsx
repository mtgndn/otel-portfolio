import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { rooms } from '../../../../components/data/rooms';

interface Props {
  params: { slug: string };
}

export default function RoomDetail({ params }: Props) {
  const room = rooms.find((r) => r.slug === params.slug);

  if (!room) return notFound();

  return (
    <section className="min-h-screen py-20 px-6 max-w-5xl mx-auto">
      <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-8 shadow-lg">
        <Image
          src={room.image}
          alt={room.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      <h1 className="text-3xl font-bold mb-4 text-gray-800">{room.title}</h1>
      <p className="text-gray-700 mb-6 leading-relaxed">{room.description}</p>

      <h2 className="text-xl font-semibold mb-2 text-gray-700">Özellikler</h2>
      <ul className="list-disc list-inside text-gray-600 mb-10 space-y-1">
        {room.features.map((feature, idx) => (
          <li key={idx}>{feature}</li>
        ))}
      </ul>

      <Link
        href="/rooms"
        className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white px-5 py-2 rounded-lg transition"
      >
        ← Geri Dön
      </Link>
    </section>
  );
}
