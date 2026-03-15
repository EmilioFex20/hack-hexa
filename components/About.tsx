import Image from "next/image";

export function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen w-full overflow-hidden py-20 md:py-28"
    >
      <div className="flex flex-col xl:flex-row mx-auto w-5/6 items-center gap-14">
        {/* Columna izquierda */}
        <div className="flex flex-col xl:w-1/2">
          <h2 className="text-2xl font-bold tracking-tight text-black md:text-5xl">
            ¿Qué es HackHexa?
          </h2>

          <div className="mt-8 space-y-8 text-lg leading-relaxed text-neutral-600 md:text-xl">
            <p>
              <span className="font-bold text-black">HackHexa 2026</span> es un
              evento académico-vivencial dirigido a mujeres interesadas en
              tecnología e ingeniería, enfocado principalmente en alumnas de 4to
              y 6to semestre de preparatoria, así como estudiantes de primeros
              semestres de universidad.
            </p>

            <p>
              No es un hackathon, sino un{" "}
              <span className="font-semibold text-brand">
                primer acercamiento positivo
              </span>{" "}
              a las áreas STEM, diseñado para motivar, inspirar y derribar
              barreras a través de experiencias prácticas, retos de lógica y
              testimonios reales de mujeres en tecnología.
            </p>
          </div>

          {/* Card objetivo */}
          <div className="mt-10 rounded-[2rem] border-l-[6px] border-[#cc7c9c] bg-[#efc0cf] p-8 shadow-sm md:p-10">
            <h3 className="text-xl font-bold text-black md:text-2xl">
              Objetivo
            </h3>

            <p className="mt-5 text-lg leading-relaxed text-black md:text-xl">
              Motivar y acercar a mujeres jóvenes a las áreas STEM,
              particularmente a ingeniería, mediante una experiencia práctica,
              inspiradora y colaborativa, que les permita verse capaces,
              acompañadas y representadas en estos campos.
            </p>
          </div>
        </div>

        {/* Columna derecha */}
        <div className="relative xl:w-1/2">
          {/* Círculo decorativo superior */}
          <div className="absolute -left-6 -top-8 h-28 w-28 rounded-full bg-pink-200/60 md:h-40 md:w-40" />

          {/* Imagen */}
          <div className="relative overflow-hidden rounded-[2rem] shadow-lg">
            <Image
              src="/about-hackhexa (2).jpeg"
              alt="Participantes en HackHexa"
              width={900}
              height={900}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Círculo decorativo inferior derecho */}
          <div className="absolute -bottom-8 -right-6 h-28 w-28 rounded-full bg-[#d3a2b7] md:h-32 md:w-32" />
        </div>
      </div>
    </section>
  );
}
