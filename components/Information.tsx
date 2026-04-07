import { UserRound, UsersRound, MapPin, Mail, Handshake } from "lucide-react";

const audienceCards = [
  {
    icon: <UserRound className="h-7 w-7 text-[#c97f9c]" strokeWidth={2} />,
    text: "Alumnas de 4to y 6to semestre de preparatoria",
  },
  {
    icon: <UserRound className="h-7 w-7 text-[#c97f9c]" strokeWidth={2} />,
    text: "Estudiantes de primeros semestres de universidad",
  },
  {
    icon: <UserRound className="h-7 w-7 text-[#c97f9c]" strokeWidth={2} />,
    text: "Mujeres jóvenes interesadas en tecnología e ingeniería",
  },
];

const eventInfo = [
  {
    icon: <UsersRound className="h-7 w-7 text-white" strokeWidth={2} />,
    title: "Capacidad Limitada",
    description:
      "Plazas limitadas para garantizar una experiencia personalizada y de alta calidad.",
  },
  {
    icon: <MapPin className="h-7 w-7 text-black" strokeWidth={2} />,
    title: "Ubicación",
    description:
      "Sala Gallegos - El evento se realizará en nuestras instalaciones con laboratorios de última generación.",
  },
  {
    icon: <Mail className="h-7 w-7 text-white" strokeWidth={2} />,
    title: "Sin Costo",
    description:
      "El evento es completamente gratuito, solo necesitas registrarte.",
  },
  {
    icon: <Handshake className="h-7 w-7 text-black" strokeWidth={2} />,
    title: "Trabajo en Equipo",
    description:
      "Actividades colaborativas diseñadas para crear redes de apoyo.",
  },
];

export function Information() {
  return (
    <section className="w-full bg-[#f5f5f5] py-14 md:py-20">
      <div className="mx-auto flex w-[92%] max-w-7xl flex-col gap-14 md:gap-20">
        {/* ¿Para quién es? */}
        <div className="flex flex-col gap-8 md:gap-10">
          <h2 className="text-center text-3xl font-bold text-black md:text-5xl">
            ¿Para Quién es HackHexa?
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {audienceCards.map((card, index) => (
              <article
                key={index}
                className="rounded-[28px] bg-[#ead2db] px-10 pb-10 pt-8 shadow-xl text-center"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-md mx-auto">
                  {card.icon}
                </div>
                <p className="text-lg font-medium text-black md:text-xl text-center">
                  {card.text}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Información del Evento */}
        <div className="rounded-[32px] bg-black px-8 py-12 text-white shadow-[0_12px_30px_rgba(0,0,0,0.18)] md:px-14 md:py-16">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-5xl">
            Información del Evento
          </h2>

          <div className="grid grid-cols-1 gap-x-16 gap-y-12 md:grid-cols-2">
            {eventInfo.map((item, index) => {
              const pinkIcon = index === 0 || index === 2;

              return (
                <div key={index} className="flex items-start gap-5">
                  <div
                    className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-full ${
                      pinkIcon ? "bg-[#d98faf]" : "bg-[#f4c9d6]"
                    }`}
                  >
                    {item.icon}
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold md:text-3xl">
                      {item.title}
                    </h3>
                    <p className="max-w-[480px] text-lg text-white/95 md:text-xl">
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
