import Image from 'next/image';

interface RoomCardProps {
  title: string;
  description: string;
  image: string;
}

export default function RoomCard({ title, description, image }: RoomCardProps) {
  return (
   <div className="rounded-xl overflow-hidden shadow-lg bg-white">
  {/* Fotoğraf */}
  <div className="relative h-56 w-full">
    <Image src={image} alt={title} fill className="object-cover" />
  </div>

  {/* Metinler */}
  <div className="p-4">
    <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
</div>

  );
}
