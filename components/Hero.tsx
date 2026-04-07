import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ChevronDown } from "lucide-react";
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
      "HackHexa 2026 - Rompiendo esquemas y construyendo futuro. Para mujeres en la tecnología."
    ) +
    "&location=" +
    encodeURIComponent("Mexicali, Baja California") +
    "&ctz=" +
    encodeURIComponent("America/Tijuana");

  return (
    <section
      id="inicio"
      className="relative min-h-screen w-full overflow-hidden"
    >
      {/* Imagen de fondo */}
      <Image
        src="/hackhexa-bg.jpeg"
        alt="HackHexa background"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Overlay rosado */}
      <div className="absolute inset-0 bg-pink-300/50" />

      {/* Capa extra para que el texto resalte más */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Contenido */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 sm:px-6">
        <div className="mx-auto w-full max-w-5xl text-center text-white">
          {/* Logo / título */}
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            <span className="text-brand drop-shadow-lg">Hack</span>
            <span className="text-gray-300 drop-shadow-lg">Hexa</span>
            <span className="relative -top-1 ml-1 align-top text-xl text-white drop-shadow-lg sm:-top-2 sm:text-3xl md:-top-3 md:text-4xl lg:text-5xl">
              2026
            </span>
          </h1>

          {/* Subtítulo principal */}
          <h2 className="mx-auto mt-6 max-w-3xl text-balance text-xl font-light uppercase tracking-wider sm:mt-8 sm:text-2xl md:text-3xl lg:text-4xl">
            Rompiendo esquemas y construyendo futuro
          </h2>

          {/* Subtexto */}
          <p className="mt-4 text-base font-light uppercase tracking-wide text-white/90 sm:mt-6 sm:text-lg md:text-xl lg:text-2xl">
            Para mujeres en la tecnología
          </p>

          {/* Cards de fecha y hora */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4">
            <Link
              href={googleCalendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                variant="default"
                size="lg"
                className="flex w-full items-center justify-center gap-3 rounded-full bg-white px-6 py-5 text-base font-semibold text-black shadow-lg transition-all duration-200 hover:scale-105 hover:bg-brand hover:text-white focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 sm:w-auto sm:px-8 sm:py-6 sm:text-lg"
              >
                <Calendar className="h-5 w-5" />
                <time>9 de Abril, 2026</time>
              </Button>
            </Link>
            <Link
              href={googleCalendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                variant="default"
                size="lg"
                className="flex w-full items-center justify-center gap-3 rounded-full bg-white px-6 py-5 text-base font-semibold text-black shadow-lg transition-all duration-200 hover:scale-105 hover:bg-brand hover:text-white focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 sm:w-auto sm:px-8 sm:py-6 sm:text-lg"
              >
                <Clock className="h-5 w-5" />
                <time>8:00 AM - 2:00 PM</time>
              </Button>
            </Link>
          </div>

          {/* Botón CTA */}
          <div className="mt-8 sm:mt-10">
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSddBd6WxgemGVC9h9mDuEjA8kCFNQeoKJysiiWn6sLfroxL8w/viewform?pli=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="default"
                size="lg"
                className="rounded-full bg-black px-8 py-5 text-base font-semibold text-white shadow-xl transition-all duration-200 hover:scale-105 hover:bg-neutral-800 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:px-12 sm:py-6 sm:text-lg"
              >
                Inscribete Ahora
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <Link
          href="#about"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 transition-colors hover:text-white"
          aria-label="Scroll to next section"
        >
          <ChevronDown className="h-8 w-8 animate-bounce" />
        </Link>
      </div>
    </section>
  );
}
