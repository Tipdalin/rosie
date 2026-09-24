/* eslint-disable @next/next/no-img-element */
const photos = [
  {
    title: "Iced Coffee",
    description: "A refreshing drink perfect for hot days.",
    image: "https://i.pinimg.com/1200x/2c/67/7b/2c677ba0e3f8b3682bda70a01ce53350.jpg",
  },
  {
    title: "Iced Latte",
    description: "A creamy and smooth coffee beverage.",
    image: "https://i.pinimg.com/1200x/48/0b/c7/480bc7b1135cfd4b12281a9a45094462.jpg",
  },
  {
    title: "Matcha Latte",
    description: "A traditional Japanese tea blended with milk.",
    image: "https://i.pinimg.com/1200x/30/e9/c2/30e9c22b5657c95a20ebd5ef2ad3c423.jpg",
  },
  {
    title: "Iced Mocha",
    description: "A rich and indulgent coffee drink with chocolate flavors.",
    image: "https://i.pinimg.com/1200x/ca/b0/30/cab0307382b71b19883629bd87983032.jpg",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="px-6 py-24 text-center">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-pink-400">
          COFFEE 
        </p>

        <h1 className="text-6xl font-bold">COFFEE</h1>

        <p className="mx-auto mt-6 max-w-xl text-gray-400">
          A small fan-style page celebrating the world of coffee,
          its varieties, and the art of brewing.
        </p>
      </section>

      {/* Gallery */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <h2 className="mb-10 text-center text-3xl font-bold">
          COFFEE Gallery
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {photos.map((photo) => (
            <article
              key={photo.title}
              className="overflow-hidden rounded-2xl bg-zinc-900 shadow-lg transition hover:-translate-y-2"
            >
              <img
                src={photo.image}
                alt={photo.title}
                className="h-64 w-full object-cover"
              />

              <div className="p-5">
                <h3 className="text-xl font-semibold">
                  {photo.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-400">
                  {photo.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="border-t border-white/10 bg-zinc-950 px-6 py-20 text-center">
        <h2 className="text-3xl font-bold">About COFFEE</h2>

        <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-400">
          Coffee is a beloved beverage enjoyed by millions around the world.
          From its rich aroma to its invigorating taste, coffee has become an
          integral part of daily life for many. Whether you prefer a simple
          black coffee, a creamy latte, or a sweet mocha, there is a coffee
          style for everyone. This page is dedicated to celebrating the diverse
          world of coffee and the joy it brings to our lives.
        </p>
      </section>
    </main>
  );
}