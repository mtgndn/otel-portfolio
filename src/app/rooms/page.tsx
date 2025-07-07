import RoomCard from '../../../components/RoomCard';

const rooms = [
  { title: 'Deniz Manzaralı Oda', description: 'Geniş balkonlu...', image: '/room1.jpeg' },
  { title: 'Bahçe Katı Oda', description: 'Doğa ile iç içe...', image: '/room2.jpeg' },
  { title: 'Suit Oda', description: 'King-size yatak...', image: '/room3.png' },
];

export default function RoomsPage() {
  return (
    <section className="pt-28 pb-16 px-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-10 text-center">Odalarımız</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {rooms.map((room, idx) => (
          <RoomCard key={idx} {...room} />
        ))}
      </div>
    </section>
  );
}
