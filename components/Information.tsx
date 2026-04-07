import { UserRound, UsersRound, MapPin, Mail, Handshake } from "lucide-react";

const audienceCards = [
  {
    icon: UserRound,
    text: "Alumnas de 4to y 6to semestre de preparatoria",
  },
  {
    icon: UserRound,
    text: "Estudiantes de primeros semestres de universidad",
  },
  {
    icon: UserRound,
    text: "Mujeres jovenes interesadas en tecnologia e ingenieria",
  },
];

const eventInfo = [
  {
    icon: UsersRound,
    title: "Capacidad Limitada",
    description:
      "Plazas limitadas para garantizar una experiencia personalizada y de alta calidad.",
    variant: "pink" as const,
  },
  {
    icon: MapPin,
    title: "Ubicacion",
    description:
      "Sala Gallegos - El evento se realizara en nuestras instalaciones con laboratorios de ultima generacion.",
    variant: "light" as const,
  },
  {
    icon: Mail,
    title: "Sin Costo",
    description:
      "El evento es completamente gratuito, solo necesitas registrarte.",
    variant: "pink" as const,
  },
  {
    icon: Handshake,
    title: "Trabajo en Equipo",
    description:
      "Actividades colaborativas disenadas para crear redes de apoyo.",
    variant: "light" as const,
  },
];

export function Information() {
  return (
    <section
      id="informacion"
      className="w-full bg-neutral-50 py-14 sm:py-16 md:py-20 lg:py-24"
    >
      <div className="mx-auto flex w-11/12 max-w-7xl flex-col gap-14 sm:gap-16 md:gap-20">
        {/* ¿Para quién es? */}
        <div className="flex flex-col gap-8 sm:gap-10 md:gap-12">
          <h2 className="text-balance text-center text-2xl font-bold text-black sm:text-3xl md:text-4xl lg:text-5xl">
            ¿Para Quien es HackHexa?
          </h2>

          <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-3 md:gap-8">
            {audienceCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <article
                  key={index}
                  className="flex flex-col items-center rounded-2xl bg-pink-100/80 px-6 py-8 text-center shadow-lg transition-transform duration-200 hover:-translate-y-1 sm:rounded-3xl sm:px-8 sm:py-10 md:px-10 md:py-12"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-md sm:mb-6 sm:h-16 sm:w-16">
                    <Icon
                      className="h-6 w-6 text-brand sm:h-7 sm:w-7"
                      strokeWidth={2}
                    />
                  </div>
                  <p className="text-base font-medium leading-relaxed text-neutral-800 sm:text-lg md:text-xl">
                    {card.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>

        {/* Información del Evento */}
        <div className="rounded-2xl bg-neutral-900 px-6 py-10 text-white shadow-2xl sm:rounded-3xl sm:px-10 sm:py-12 md:px-14 md:py-16">
          <h2 className="mb-10 text-balance text-center text-2xl font-bold sm:mb-12 sm:text-3xl md:text-4xl lg:text-5xl">
            Informacion del Evento
          </h2>

          <div className="grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2 md:gap-x-12 md:gap-y-10 lg:gap-x-16">
            {eventInfo.map((item, index) => {
              const Icon = item.icon;
              const isPink = item.variant === "pink";

              return (
                <div key={index} className="flex items-start gap-4 sm:gap-5">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full sm:h-14 sm:w-14 md:h-16 md:w-16 ${
                      isPink ? "bg-brand" : "bg-pink-200"
                    }`}
                  >
                    <Icon
                      className={`h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 ${
                        isPink ? "text-white" : "text-neutral-800"
                      }`}
                      strokeWidth={2}
                    />
                  </div>

                  <div className="space-y-1 sm:space-y-2">
                    <h3 className="text-xl font-bold sm:text-2xl md:text-3xl">
                      {item.title}
                    </h3>
                    <p className="max-w-md text-base leading-relaxed text-white/90 sm:text-lg md:text-xl">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
