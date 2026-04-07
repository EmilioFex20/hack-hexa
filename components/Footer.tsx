import Link from "next/link";
import { Button } from "./ui/button";
import { Heart, Instagram, Mail, Twitter } from "lucide-react";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#about", label: "Que es" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#informacion", label: "Informacion" },
  { href: "#patrocinadores", label: "Patrocinadores" },
];

const socialLinks = [
  { href: "#", icon: Twitter, label: "Twitter" },
  { href: "#", icon: Instagram, label: "Instagram" },
  { href: "#", icon: Mail, label: "Correo" },
];

export function Footer() {
  return (
    <footer className="w-full bg-brand px-4 py-12 text-white sm:px-6 sm:py-14 md:px-10 md:py-16">
      <div className="mx-auto max-w-7xl">
        {/* Main content */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
          {/* Left column - Brand */}
          <div className="space-y-5 sm:space-y-6">
            <h3 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
              <span className="text-pink-200">Hack</span>
              <span className="text-neutral-300">Hexa</span>{" "}
              <span className="text-white">2026</span>
            </h3>

            <p className="max-w-lg text-lg font-medium leading-snug sm:text-xl md:text-2xl">
              Rompiendo Esquemas y Construyendo Futuro para Mujeres en la
              Tecnologia
            </p>

            <p className="max-w-lg text-base leading-relaxed text-white/90 sm:text-lg">
              Un evento disenado para inspirar, motivar y conectar a mujeres
              jovenes con el mundo de la tecnologia y la ingenieria.
            </p>
          </div>

          {/* Right column - CTA */}
          <div className="space-y-5 sm:space-y-6 md:pl-4 lg:pl-8">
            <h4 className="text-2xl font-bold sm:text-3xl md:text-4xl">
              ¿Lista para Unirte?
            </h4>

            <p className="max-w-lg text-base leading-relaxed text-white/90 sm:text-lg">
              No te pierdas esta oportunidad unica de explorar el mundo STEM
              junto a otras mujeres apasionadas por la tecnologia.
            </p>

            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSddBd6WxgemGVC9h9mDuEjA8kCFNQeoKJysiiWn6sLfroxL8w/viewform?pli=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="mt-2 rounded-full bg-black px-8 py-6 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:bg-neutral-800 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand sm:px-10 sm:text-lg"
              >
                Registrate Gratis
              </Button>
            </Link>
          </div>
        </div>

        {/* Navigation links */}
        <nav
          className="mt-10 border-t border-white/20 pt-8 sm:mt-12 sm:pt-10"
          aria-label="Footer navigation"
        >
          <ul className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-white/90 transition-colors hover:text-white sm:text-base"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Bottom section */}
        <div className="mt-8 flex flex-col items-center gap-6 sm:mt-10 sm:flex-row sm:justify-between">
          <p className="flex items-center gap-2 text-sm text-white/90 sm:text-base">
            Hecho con{" "}
            <Heart
              className="h-4 w-4 fill-white text-white sm:h-5 sm:w-5"
              aria-hidden="true"
            />{" "}
            para mujeres en STEM
          </p>

          {/* Social links */}
          <div className="flex items-center gap-3 sm:gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 transition-colors hover:bg-white/25 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand sm:h-12 sm:w-12"
                >
                  <Icon className="h-5 w-5 text-white sm:h-6 sm:w-6" />
                </Link>
              );
            })}
          </div>
        </div>

        {/* Copyright */}
        <p className="mt-8 text-center text-xs text-white/70 sm:text-sm">
          &copy; {new Date().getFullYear()} HackHexa. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}
