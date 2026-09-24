/* eslint-disable @next/next/no-img-element */
const photos = [
  {
    title: "Rosé",
    description: "Singer and member of BLACKPINK.",
    image: "https://i.pinimg.com/736x/b2/e0/16/b2e0167518779b96e3d3eecac6a5ded4.jpg",
  },
  {
    title: "On Stage",
    description: "Known for her expressive vocals and stage presence.",
    image: "https://i.pinimg.com/1200x/db/e3/a0/dbe3a0e8c8f3cda3a383ce6ced94a5e0.jpg",
  },
  {
    title: "Music",
    description: "Her solo music explores pop and emotional sounds.",
    image: "https://i.pinimg.com/736x/73/bb/6d/73bb6de9d2f571f7c3cdb18e308f204e.jpg",
  },
  {
    title: "Performance",
    description: "Rosé has performed with BLACKPINK around the world.",
    image: "https://i.pinimg.com/736x/c0/26/ab/c026ab53d7c91dd39fa6b7ad54f0bd0e.jpg",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="px-6 py-24 text-center">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-pink-400">
          BLACKPINK - CI/CD Pipeline
        </p>

        <h1 className="text-6xl font-bold">ROSÉ Baby</h1>

        <p className="mx-auto mt-6 max-w-xl text-gray-400">
          A small fan-style page celebrating Rosé, her music,
          performances, and artistic journey.
        </p>
      </section>

      {/* Gallery */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <h2 className="mb-10 text-center text-3xl font-bold">
          Rosé Gallery
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
        <h2 className="text-3xl font-bold">About Rosé</h2>

        <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-400">
          Rosé is a member of BLACKPINK and is known for her distinctive
          voice and musical style. She has also released music as a solo
          artist.
        </p>
      </section>
    </main>
  );
}