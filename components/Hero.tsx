import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Calendar, Clock } from "lucide-react";
import Link from "next/link";

export function Hero() {
  const googleCalendarUrl =
    "https://calendar.google.com/calendar/render?action=TEMPLATE" +
    "&text=" +
    encodeURIComponent("HackHexa 2026") +
    "&dates=" +
    encodeURIComponent("20260409T080000/20260409T140000") +
    "&details=" +
    encodeURIComponent(
      "HackHexa 2026 - Rompiendo esquemas y construyendo futuro. Para mujeres en la tecnología.",
    ) +
    "&location=" +
    encodeURIComponent("Mexicali, Baja California") +
    "&ctz=" +
    encodeURIComponent("America/Tijuana");

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
          <h2 className="mt-8 text-2xl font-light uppercase tracking-wide md:text-5xl">
            Rompiendo esquemas y construyendo futuro
          </h2>

          {/* Subtexto */}
          <h3 className="mt-6 text-lg font-light uppercase tracking-wide md:text-3xl">
            Para mujeres en la tecnología
          </h3>

          {/* Cards de fecha y hora */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href={googleCalendarUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="default"
                size="lg"
                className="flex gap-3 py-6 px-10 transition hover:scale-105 hover:bg-brand hover:text-white hover:cursor-pointer"
              >
                <Calendar />
                <time>9 de Abril, 2026</time>
              </Button>
            </Link>
            <Link
              href={googleCalendarUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="default"
                size="lg"
                className="flex gap-3 py-6 px-10 transition hover:scale-105 hover:bg-brand hover:text-white hover:cursor-pointer"
              >
                <Clock />
                <time>8:00 AM - 2:00 PM</time>
              </Button>
            </Link>
          </div>

          {/* Botón */}
          <div className="mt-10">
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSddBd6WxgemGVC9h9mDuEjA8kCFNQeoKJysiiWn6sLfroxL8w/viewform?pli=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="default"
                size="lg"
                className="py-6 px-10 shadow-xl bg-black text-white transition hover:scale-105 hover:bg-neutral-900 hover:cursor-pointer"
              >
                Inscríbete Ahora
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
