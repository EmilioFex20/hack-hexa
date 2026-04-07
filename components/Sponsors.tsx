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
    <section className="w-full bg-[#f6f3f5] px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-black md:text-6xl">
            Nuestros <span className="text-[#cf89a6]">Patrocinadores</span>
          </h2>

          <p className="mx-auto mt-6 max-w-4xl text-lg leading-relaxed text-[#7b7b7b] md:text-2xl">
            Gracias a nuestros patrocinadores que hacen posible este evento y
            apoyan a mujeres en tecnología.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 place-items-center gap-y-10 md:mt-20 md:grid-cols-4">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className="flex h-[170px] w-[170px] items-center justify-center rounded-full bg-white shadow-[0_10px_30px_rgba(0,0,0,0.12)] md:h-[200px] md:w-[200px]"
            >
              <div className="relative h-[105px] w-[105px] md:h-[125px] md:w-[125px]">
                <Image
                  src={sponsor.src}
                  alt={sponsor.alt}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
