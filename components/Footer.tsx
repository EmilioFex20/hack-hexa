import Link from "next/link";
import { Button } from "./ui/button";
import { Heart, Instagram, Mail, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-[#d996af] px-6 py-12 text-white md:px-10 md:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-20">
          <div className="space-y-6">
            <h3 className="text-4xl font-extrabold tracking-tight md:text-6xl">
              <span className="text-[#cf89a6] drop-shadow-[0_4px_10px_rgba(0,0,0,0.15)]">
                Hack
              </span>
              <span className="text-[#6f7f80]">Hexa</span>{" "}
              <span className="text-white">2026</span>
            </h3>

            <p className="max-w-xl text-2xl font-medium leading-snug md:text-4xl">
              Rompiendo Esquemas y Construyendo Futuro para Mujeres en la
              Tecnología
            </p>

            <p className="max-w-2xl text-lg leading-relaxed text-white/95 md:text-2xl">
              Un evento diseñado para inspirar, motivar y conectar a mujeres
              jóvenes con el mundo de la tecnología y la ingeniería.
            </p>
          </div>

          <div className="space-y-6 md:pl-8">
            <h4 className="text-3xl font-bold md:text-5xl">
              ¿Lista para Unirte?
            </h4>

            <p className="max-w-xl text-lg leading-relaxed text-white/95 md:text-2xl">
              No te pierdas esta oportunidad única de explorar el mundo STEM
              junto a otras mujeres apasionadas por la tecnología.
            </p>

            <Button
              size="lg"
              className="mt-4 rounded-full bg-black px-10 py-7 text-lg font-semibold text-white shadow-[0_10px_25px_rgba(0,0,0,0.18)] hover:bg-black/90 md:px-14"
            >
              Regístrate Gratis
            </Button>
          </div>
        </div>

        <div className="my-12 h-px w-full bg-white/30" />

        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p className="flex items-center gap-2 text-lg text-white/95 md:text-2xl">
            Hecho con <Heart className="h-5 w-5 fill-white text-white" /> para
            mujeres en STEM
          </p>

          <div className="flex items-center gap-4">
            <Link
              href="#"
              aria-label="Twitter"
              className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20 transition hover:bg-white/30"
            >
              <Twitter className="h-6 w-6 text-white" />
            </Link>

            <Link
              href="#"
              aria-label="Instagram"
              className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20 transition hover:bg-white/30"
            >
              <Instagram className="h-6 w-6 text-white" />
            </Link>

            <Link
              href="#"
              aria-label="Correo"
              className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20 transition hover:bg-white/30"
            >
              <Mail className="h-6 w-6 text-white" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
