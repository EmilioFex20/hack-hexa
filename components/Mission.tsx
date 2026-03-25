import Image from "next/image";

export function Mission() {
  return (
    <section
      id="mission"
      className="relative w-full overflow-hidden py-20 md:py-28 bg-gradient-to-b from-white to-[#fecad4]/20"
    >
      <div className="flex flex-col mx-auto w-5/6 items-center gap-14 ">
        <h2 className="text-2xl font-bold tracking-tight text-black md:text-5xl text-center">
          Tres Momentos, Una Experiencia Integral
        </h2>
        <p className="text-lg leading-relaxed text-neutral-600 md:text-xl text-center">
          HackHexa se organiza en tres momentos que construyen una experiencia
          completa de aprendizaje, colaboración e inspiración.
        </p>

        {/* foto 1*/}
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex flex-col gap-4 w-full md:w-1/2">
            <div className="flex flex-row items-center gap-4">
              <div className="rounded-full bg-[rgb(203,128,158)] w-16 h-16" />
              <h2 className="text-3xl font-bold tracking-tight text-black md:text-5xl text-center">
                Explorar
              </h2>
            </div>
            <p className="text-lg leading-relaxed text-neutral-600 md:text-xl text-left">
              Plática introductoria para conocer el papel de las mujeres en la
              tecnología, romper primeras barreras y despertar interés.
            </p>
          </div>
          <div className="flex-col rounded-4xl overflow-clip w-full md:w-1/2 drop-shadow-2xl">
            <div className="flex-row flex justify-center bg-[oklch(0.985_0.002_247.839)] overflow-clip">
              <Image
                src="/gracehopper.png"
                alt="Grace Hopper"
                width={500}
                height={500}
                className="h-[350px] w-auto hover:scale-110 transition"
              />
            </div>
            <div className="border-t-4 border-[rgb(203,128,158)] bg-white/95  p-4">
              <p className="text-sm leading-relaxed text-neutral-600 md:text-xl text-left">
                Grace Hopper - Pionera de la programación y creadora del primer
                compilador
              </p>
            </div>
          </div>
        </div>

        {/* foto 2*/}
        <div className="flex flex-col md:flex-row-reverse items-center gap-16">
          <div className="flex flex-col gap-4 w-full md:w-1/2">
            <div className="flex flex-row items-center gap-4">
              <div className="rounded-full bg-[rgb(203,128,158)] w-16 h-16" />
              <h2 className="text-3xl font-bold tracking-tight text-black md:text-5xl text-center">
                Experimentar
              </h2>
            </div>
            <p className="text-lg leading-relaxed text-neutral-600 md:text-xl text-left">
              Rally de resolución de problemas y visita a laboratorios, donde
              las participantes trabajan en equipo, enfrentan retos de lógica y
              conocen aplicaciones reales de la ingeniería.
            </p>
          </div>
          <div className="flex-col rounded-4xl overflow-clip w-full md:w-1/2 drop-shadow-2xl">
            <div className="flex-row flex justify-center bg-[oklch(0.985_0.002_247.839)]">
              <Image
                src="/participantes-trabajando.png"
                alt="Grace Hopper"
                width={500}
                height={500}
                className="h-[350px] w-auto hover:scale-110 transition"
              />
            </div>
            <div className="border-t-4 border-[rgb(203,128,158)] bg-white/95  p-4">
              <p className="text-sm leading-relaxed text-neutral-600 md:text-xl text-left">
                Participantes trabajando en equipos colaborativos
              </p>
            </div>
          </div>
        </div>

        {/* foto 3*/}
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex flex-col gap-4 w-full md:w-1/2">
            <div className="flex flex-row items-center gap-4">
              <div className="rounded-full bg-[rgb(203,128,158)] w-16 h-16" />
              <h2 className="text-3xl font-bold tracking-tight text-black md:text-5xl text-center">
                Inspirar
              </h2>
            </div>
            <p className="text-lg leading-relaxed text-neutral-600 md:text-xl text-left">
              Panel de egresadas y mujeres actualmente en la industria, junto
              con videos testimoniales que muestran caminos profesionales
              posibles y cercanos.
            </p>
          </div>
          <div className="flex-col rounded-4xl overflow-clip w-full md:w-1/2 drop-shadow-2xl">
            <div className="flex-row flex justify-center bg-[oklch(0.985_0.002_247.839)]">
              <Image
                src="/mujeres-comp.png"
                alt="Grace Hopper"
                width={500}
                height={500}
                className="h-[350px] w-auto hover:scale-110 transition"
              />
            </div>
            <div className="border-t-4 border-[rgb(203,128,158)] bg-white/95  p-4">
              <p className="text-sm leading-relaxed text-neutral-600 md:text-xl text-left">
                Mujeres compartiendo sus experiencias en tecnología
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
