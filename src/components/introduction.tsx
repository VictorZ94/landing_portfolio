"use client"
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

const Introduction = () => {
  return (
    <div className="z-20 w-full bg-darkbg/60">
      <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
        <Image src="/home-4.png" priority width={800} height={800} alt="Profile pic" />

        <div className="flex flex-col justify-center max-w-md">
          <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">Si puedes pensarlo, <br />
            <TypeAnimation sequence={[
              "puedes programarlo",
              1000,
              "puedes optimizarlo",
              1000,
              "puedes desarrollarlo",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="font-bold text-secondary"
            />
          </h1>
          <p className="mx-auto mb-2 text-xl md:mx-0 md:mb-0">
            Soy Victor Zuluaga, desarrollador de software con más de 3 años de experiencia en el desarrollo de aplicaciones web y móviles. Me apasiona la tecnología y la programación, y mi objetivo es ayudar a las empresas a mejorar sus procesos y a tener una presencia digital efectiva.
          </p>

          <div className="flex item-center justify-center gap-3 md:justify-start my-8">
            <Link href="/projects" className="px-3 mr-3 py-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50">
              Ver proyectos
            </Link>
            <Link href="/projects" className="px-3 py-2 transition-all border-2 cursor-pointer text-secondary border-secondary text-md w-fit rounded-xl hover:shadow-xl hover:shadow-secondary">
              Contacta conmigo
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Introduction;