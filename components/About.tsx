import Image from "next/image";

export function About() {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden bg-white py-16 sm:py-20 md:py-28"
    >
      <div className="mx-auto flex w-11/12 max-w-7xl flex-col items-center gap-12 lg:flex-row lg:gap-16 xl:gap-20">
        {/* Columna izquierda */}
        <div className="flex w-full flex-col lg:w-1/2">
          <h2 className="text-balance text-2xl font-bold tracking-tight text-black sm:text-3xl md:text-4xl lg:text-5xl">
            ¿Que es HackHexa?
          </h2>

          <div className="mt-6 space-y-6 text-base leading-relaxed text-neutral-600 sm:mt-8 sm:space-y-8 sm:text-lg md:text-xl">
            <p>
              <span className="font-bold text-black">HackHexa 2026</span> es un
              evento academico-vivencial dirigido a mujeres interesadas en
              tecnologia e ingenieria, enfocado principalmente en alumnas de 4to
              y 6to semestre de preparatoria, asi como estudiantes de primeros
              semestres de universidad.
            </p>

            <p>
              No es un hackathon, sino un{" "}
              <span className="font-semibold text-brand">
                primer acercamiento positivo
              </span>{" "}
              a las areas STEM, disenado para motivar, inspirar y derribar
              barreras a traves de experiencias practicas, retos de logica y
              testimonios reales de mujeres en tecnologia.
            </p>
          </div>

          {/* Card objetivo */}
          <div className="mt-8 rounded-2xl border-l-4 border-brand bg-pink-50 p-6 shadow-sm sm:mt-10 sm:rounded-3xl sm:p-8 md:p-10">
            <h3 className="text-lg font-bold text-black sm:text-xl md:text-2xl">
              Objetivo
            </h3>

            <p className="mt-4 text-base leading-relaxed text-neutral-700 sm:mt-5 sm:text-lg md:text-xl">
              Motivar y acercar a mujeres jovenes a las areas STEM,
              particularmente a ingenieria, mediante una experiencia practica,
              inspiradora y colaborativa, que les permita verse capaces,
              acompanadas y representadas en estos campos.
            </p>
          </div>
        </div>

        {/* Columna derecha */}
        <div className="relative w-full lg:w-1/2">
          {/* Círculo decorativo superior */}
          <div className="absolute -left-4 -top-4 z-10 h-20 w-20 rounded-full bg-pink-200/60 opacity-60 sm:-left-6 sm:-top-6 sm:h-28 sm:w-28 md:h-36 md:w-36" />

          {/* Imagen */}
          <div className="relative overflow-hidden rounded-2xl shadow-xl sm:rounded-3xl">
            <Image
              src="/about-hackhexa (2).jpeg"
              alt="Participantes en HackHexa colaborando en actividades de tecnologia"
              width={900}
              height={900}
              className="h-auto w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Círculo decorativo inferior derecho */}
          <div className="absolute -bottom-4 -right-4 h-20 w-20 rounded-full bg-brand/40 opacity-60 sm:-bottom-6 sm:-right-6 sm:h-24 sm:w-24 md:h-28 md:w-28" />
        </div>
      </div>
    </section>
  );
}
