import { Clock } from "lucide-react";

const scheduleItems = [
  {
    activity: "Explorar: Plática inicial",
    time: "8:00 AM",
    description: "CREATIVE LABS, SILVIA ARAMBULA",
  },
  {
    activity: "Inspirar: Panel",
    time: "9:00 AM",
    description: "Panel de Egresadas y Empleadoras",
  },
  {
    activity: "Experimentar: Rally de resolución de problemas",
    time: "10:20 AM",
    description:
      "Se les dan una serie de problemas a resolver y representar las soluciones de acuerdo a su creatividad",
  },
  {
    activity: "Inspirar: Panel\nExperimentar: Visita a laboratorios",
    time: "13:20 PM",
    description:
      "Este fue uno de los puntos que más les agradó la edición pasada, ya que pudieron ver de primera mano el trabajo de las estudiantes destacadas.",
  },
  {
    activity: "Premiación",
    time: "14:00 PM",
    description: "Se dan premios honoríficos",
  },
];

export function Horario() {
  return (
    <section id="horario" className="bg-black py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header with decorative dots */}
        <div className="mb-10 sm:mb-12">
          {/* Decorative dots */}
          <div className="mb-6 flex gap-2">
            <span className="h-3 w-3 rounded-full bg-brand" />
            <span className="h-3 w-3 rounded-full bg-brand" />
            <span className="h-3 w-3 rounded-full bg-brand" />
          </div>

          {/* Title */}
          <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            <span className="text-white">AGENDA </span>
            <span className="text-brand">GENERAL</span>
          </h2>
        </div>

        {/* Schedule items */}
        <div className="space-y-0">
          {scheduleItems.map((item, index) => (
            <div
              key={index}
              className="group border-t border-dashed border-gray-600 py-6 transition-colors first:border-t-0 hover:bg-white/5 sm:py-8"
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-12 sm:items-start sm:gap-6">
                {/* Activity name */}
                <div className="sm:col-span-4">
                  <p className="whitespace-pre-line text-base font-semibold text-white sm:text-lg lg:text-xl">
                    {item.activity}
                  </p>
                </div>

                {/* Time */}
                <div className="sm:col-span-3">
                  <div className="flex items-center gap-2 sm:justify-center">
                    <Clock className="h-4 w-4 text-brand sm:hidden" />
                    <time className="text-2xl font-bold text-brand sm:text-3xl lg:text-4xl">
                      {item.time}
                    </time>
                  </div>
                </div>

                {/* Description */}
                <div className="sm:col-span-5">
                  <p className="text-sm leading-relaxed text-gray-300 sm:text-base lg:text-lg">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom accent bar */}
        <div className="mt-10 h-2 w-full rounded-full bg-brand/30 sm:mt-12">
          <div className="h-full w-1/3 rounded-full bg-brand" />
        </div>
      </div>
    </section>
  );
}
