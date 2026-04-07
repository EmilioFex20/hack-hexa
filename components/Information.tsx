import { Star } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";

export function Information() {
    return(
        <section className="relative min-h-screen w-full py-5 md:py-10 overflow-hidden bg-gradient-to-b from-[#fecad4]/20 to-white">
            <div className="flex flex-col mx-auto w-5/6 items-center gap-14 bg-brand p-10 rounded-[2rem] shadow-lg">
               <h2 className="text-2xl font-bold tracking-tight text-white md:text-5xl text-center">
                   ¡Sé Parte de la Próxima Edición!
               </h2>
               <p className="text-lg leading-relaxed text-white md:text-xl text-center max-w-2xl">
                   Únete a cientos de mujeres que ya han descubierto su pasión por la tecnología. HackHexa es más que un evento, es el inicio de tu camino en STEM.
               </p>
               <div className="flex flex-col md:flex-row items-center gap-6">
                    <Button
                        variant="default"
                        size="lg"
                        className="flex gap-3 py-6 px-10 transition text-brand bg-white"
                    >
                        100+ Participantes por edición
                    </Button>
                    <Button
                        variant="default"
                        size="lg"
                        className="flex gap-3 py-6 px-10 transition text-brand bg-white"
                    >
                        Mentoras expertas
                    </Button>
                    <Button
                        variant="default"
                        size="lg"
                        className="flex gap-3 py-6 px-10 transition text-brand bg-white"
                    >
                        Experiencia práctica
                    </Button>
               </div>
            </div>
            <div className="flex flex-col mx-auto w-5/6 items-center gap-14 mt-20">
                <h1 className="text-2xl font-bold tracking-tight text-black md:text-5xl text-center">¿Para Quién es HackHexa?</h1>
                <div className="flex flex-col md:flex-row items-center  gap-16 mt-10">
                    <div className="flex flex-col mx-auto w-5/6 items-center gap-5 bg-brand p-10 rounded-[2rem] shadow-lg">
                        <div className="rounded-full bg-white w-16 h-16" >
                            <Star className="w-10 h-10 text-brand mx-auto my-3" />
                        </div>
                        <p className="text-lg leading-relaxed text-white md:text-xl text-center">
                            Alumnas de 4to y 6to semestre de preparatoria
                        </p>
                    </div>
                    <div className="flex flex-col mx-auto w-5/6 items-center gap-5 bg-brand p-10 rounded-[2rem] shadow-lg">
                        <div className="rounded-full bg-white w-16 h-16" >
                            <Star className="w-10 h-10 text-brand mx-auto my-3" />
                        </div>
                        <p className="text-lg leading-relaxed text-white md:text-xl text-center">
                            Estudiantes de primeros semestres de universidad
                        </p>
                    </div>
                    <div className="flex flex-col mx-auto w-5/6 items-center gap-5 bg-brand p-10 rounded-[2rem] shadow-lg">
                        <div className="rounded-full bg-white w-16 h-16" >
                            <Star className="w-10 h-10 text-brand mx-auto my-3" />
                        </div>
                        <p className="text-lg leading-relaxed text-white md:text-xl text-center">
                            Mujeres jóvenes interesadas en tecnología e ingeniería
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col mx-auto w-5/6 items-center gap-14 bg-brand my-10 p-10 rounded-[2rem] shadow-lg">
               <h2 className="text-2xl font-bold tracking-tight text-white md:text-5xl text-center">
                   ¡Sé Parte de la Próxima Edición!
               </h2>
               <p className="text-lg leading-relaxed text-white md:text-xl text-center max-w-2xl">
                   Únete a cientos de mujeres que ya han descubierto su pasión por la tecnología. HackHexa es más que un evento, es el inicio de tu camino en STEM.
               </p>
               <div className="flex flex-col md:flex-row items-center gap-6">
                    <Button
                        variant="default"
                        size="lg"
                        className="flex gap-3 py-6 px-10 transition text-brand bg-white"
                    >
                        100+ Participantes por edición
                    </Button>
                    <Button
                        variant="default"
                        size="lg"
                        className="flex gap-3 py-6 px-10 transition text-brand bg-white"
                    >
                        Mentoras expertas
                    </Button>
                    <Button
                        variant="default"
                        size="lg"
                        className="flex gap-3 py-6 px-10 transition text-brand bg-white"
                    >
                        Experiencia práctica
                    </Button>
               </div>
            </div>
        </section>
    );
}