import Image from "next/image";

const sponsors = [
  {
    name: "Steam Acres",
    src: "/sponsors/steam-acres.png",
    alt: "Logo de Steam Acres",
  },
  {
    name: "Pacha Mama del Desierto",
    src: "/sponsors/pacha-mama.png",
    alt: "Logo de Pacha Mama del Desierto",
  },
  {
    name: "AVA Spa",
    src: "/sponsors/ava-spa.png",
    alt: "Logo de AVA Spa",
  },
  {
    name: "Major League Hacking",
    src: "/sponsors/mlh.png",
    alt: "Logo de Major League Hacking",
  },
];

export function Sponsors() {
  return (
    <section
      id="patrocinadores"
      className="w-full bg-neutral-50 px-4 py-14 sm:px-6 sm:py-16 md:px-10 md:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-2xl font-bold tracking-tight text-black sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            Nuestros <span className="text-brand">Patrocinadores</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-neutral-600 sm:mt-6 sm:text-lg md:text-xl">
            Gracias a nuestros patrocinadores que hacen posible este evento y
            apoyan a mujeres en tecnologia.
          </p>
        </div>

        {/* Sponsors grid */}
        <div className="mt-12 grid grid-cols-2 place-items-center gap-6 sm:mt-14 sm:gap-8 md:mt-16 md:grid-cols-4 md:gap-10 lg:mt-20">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className="group flex h-32 w-32 items-center justify-center rounded-full bg-white shadow-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-xl sm:h-40 sm:w-40 md:h-44 md:w-44 lg:h-48 lg:w-48"
            >
              <div className="relative h-20 w-20 transition-transform duration-200 group-hover:scale-105 sm:h-24 sm:w-24 md:h-28 md:w-28 lg:h-32 lg:w-32">
                <Image
                  src={sponsor.src}
                  alt={sponsor.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 80px, (max-width: 768px) 96px, (max-width: 1024px) 112px, 128px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
