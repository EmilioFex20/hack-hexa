import Image from "next/image";
import { Search, Lightbulb, Star } from "lucide-react";
import { Reveal } from "./reveal";

const moments = [
  {
    icon: Search,
    title: "Explorar",
    description:
      "Platica introductoria para conocer el papel de las mujeres en la tecnologia, romper primeras barreras y despertar interes.",
    image: "/gracehopper.png",
    imageAlt: "Grace Hopper - Pionera de la programacion",
    caption:
      "Grace Hopper - Pionera de la programacion y creadora del primer compilador",
    reverse: false,
  },
  {
    icon: Lightbulb,
    title: "Experimentar",
    description:
      "Rally de resolucion de problemas y visita a laboratorios, donde las participantes trabajan en equipo, enfrentan retos de logica y conocen aplicaciones reales de la ingenieria.",
    image: "/participantes-trabajando.png",
    imageAlt: "Participantes trabajando en equipos colaborativos",
    caption: "Participantes trabajando en equipos colaborativos",
    reverse: true,
  },
  {
    icon: Star,
    title: "Inspirar",
    description:
      "Panel de egresadas y mujeres actualmente en la industria, junto con videos testimoniales que muestran caminos profesionales posibles y cercanos.",
    image: "/mujeres-comp.png",
    imageAlt: "Mujeres compartiendo sus experiencias en tecnologia",
    caption: "Mujeres compartiendo sus experiencias en tecnologia",
    reverse: false,
  },
];

export function Mission() {
  return (
    <section
      id="experiencia"
      className="relative w-full overflow-hidden bg-gradient-to-b from-white to-pink-50/50 py-16 sm:py-20 md:py-28"
    >
      <div className="mx-auto flex w-11/12 max-w-7xl flex-col items-center gap-12 sm:gap-16 md:gap-20">
        {/* Header */}
        <Reveal className="max-w-3xl text-center mb-28">
          <h2 className="text-balance text-2xl font-bold tracking-tight text-black sm:text-3xl md:text-4xl lg:text-5xl">
            Tres Momentos, Una Experiencia Integral
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-600 sm:mt-6 sm:text-lg md:text-xl">
            HackHexa se organiza en tres momentos que construyen una experiencia
            completa de aprendizaje, colaboracion e inspiracion.
          </p>
        </Reveal>

        {/* Moments */}
        {moments.map((moment, index) => {
          const Icon = moment.icon;
          return (
            <div
              key={index}
              className={`flex w-full flex-col items-center gap-8 sm:gap-12 md:gap-16 ${
                moment.reverse ? "md:flex-row-reverse" : "md:flex-row"
              }`}
            >
              {/* Text content */}
              <Reveal
                className="flex w-full flex-col gap-4 md:w-1/2"
                delay={240}
              >
                <div className="flex flex-row items-center gap-3 sm:gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand sm:h-14 sm:w-14 md:h-16 md:w-16">
                    <Icon className="h-6 w-6 text-white sm:h-7 sm:w-7 md:h-8 md:w-8" />
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight text-black sm:text-3xl md:text-4xl lg:text-5xl">
                    {moment.title}
                  </h3>
                </div>
                <p className="text-base leading-relaxed text-neutral-600 sm:text-lg md:text-xl">
                  {moment.description}
                </p>
              </Reveal>

              {/* Image card */}
              <Reveal
                className="w-full overflow-hidden rounded-2xl shadow-xl sm:rounded-3xl md:w-1/2"
                delay={480}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
                  <Image
                    src={moment.image}
                    alt={moment.imageAlt}
                    fill
                    className={`transition-transform duration-300 hover:scale-105 ${
                      moment.image === "/gracehopper.png"
                        ? "object-cover object-[center_1%] "
                        : "object-cover"
                    }`}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="border-t-4 border-brand bg-white p-4 sm:p-5">
                  <p className="text-center text-sm leading-relaxed text-neutral-600 sm:text-base md:text-lg">
                    {moment.caption}
                  </p>
                </div>
              </Reveal>
            </div>
          );
        })}
      </div>
    </section>
  );
}
