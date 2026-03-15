import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Calendar, Clock } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Imagen de fondo */}
      <Image
        src="/hackhexa-bg.jpeg"
        alt="HackHexa background"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay rosado */}
      <div className="absolute inset-0 bg-pink-300/60" />

      {/* Capa extra para que el texto resalte más */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Contenido */}
      <div className="relative z-10 flex min-h-screen items-center justify-center">
        <div className="mx-auto w-5/6 text-center text-white">
          {/* Logo / título */}
          <h1 className="text-5xl font-bold tracking-tight md:text-8xl">
            <span className="text-brand drop-shadow-lg">Hack</span>
            <span className="text-secondary drop-shadow-lg">Hexa</span>
            <span className="align-top text-3xl md:text-6xl ml-1 relative -top-3 text-white drop-shadow-lg">
              2026
            </span>{" "}
          </h1>

          {/* Subtítulo principal */}
          <p className="mt-8 text-2xl font-light uppercase tracking-wide md:text-5xl">
            Rompiendo esquemas y construyendo futuro
          </p>

          {/* Subtexto */}
          <p className="mt-6 text-lg font-light uppercase tracking-wide md:text-3xl">
            Para mujeres en la tecnología
          </p>

          {/* Cards de fecha y hora */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              variant="default"
              size="lg"
              className="flex gap-3 py-6 px-10"
            >
              <span className="text-brand">
                <Calendar />
              </span>
              <span className="">9 de Abril, 2026</span>
            </Button>
            <Button
              variant="default"
              size="lg"
              className="flex gap-3 py-6 px-10"
            >
              <span className="text-brand">
                <Clock />
              </span>
              <span className="font-semibold text-lg">8:00 AM - 2:00 PM</span>
            </Button>
          </div>

          {/* Botón */}
          <div className="mt-10">
            <Button
              variant="default"
              size="lg"
              className="py-6 px-10 shadow-xl transition bg-black text-white hover:scale-105 hover:bg-neutral-900 hover:cursor-pointer"
            >
              Inscríbete Ahora
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
