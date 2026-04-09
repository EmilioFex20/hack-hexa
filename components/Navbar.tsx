"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#about", label: "Acerca de" },
  { href: "#mision", label: "Misión" },
  { href: "#informacion", label: "Información" },
  { href: "#horario", label: "Horario" },
  { href: "#sponsors", label: "Sponsors" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/90 shadow-lg backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="#inicio"
          className="text-xl font-bold tracking-tight text-white transition-colors hover:text-brand sm:text-2xl"
        >
          <span className="text-brand">Hack</span>
          <span className="text-gray-300">Hexa</span>
          <span className="ml-0.5 text-sm text-white sm:text-base">2026</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-1 md:flex lg:gap-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white lg:px-4 lg:text-base"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSddBd6WxgemGVC9h9mDuEjA8kCFNQeoKJysiiWn6sLfroxL8w/viewform?pli=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="sm"
              className="rounded-full bg-brand px-5 py-2 text-sm font-semibold text-white transition-all duration-200 hover:scale-105 hover:bg-brand/90"
            >
              Inscribete
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 text-white transition-colors hover:bg-white/10 md:hidden"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-black/95 px-4 pb-6 pt-2 backdrop-blur-md">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={closeMenu}
                  className="block rounded-lg px-4 py-3 text-base font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 px-4">
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSddBd6WxgemGVC9h9mDuEjA8kCFNQeoKJysiiWn6sLfroxL8w/viewform?pli=1"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              <Button className="w-full rounded-full bg-brand py-3 text-base font-semibold text-white transition-all duration-200 hover:bg-brand/90">
                Inscribete Ahora
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
