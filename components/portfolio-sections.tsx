import { ArrowUpRight } from 'lucide-react'
import { projects, technologies } from '@/data/projects'

export function About() {
  return <section id="sobre-mi" className="section-shell border-t border-white/[0.07]"><div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24"><div><p className="eyebrow">Sobre mí</p><h2 className="section-title mt-5">Curioso. Proactivo.<br /><span className="text-[#71837a]">Siempre aprendiendo.</span></h2></div><p className="max-w-xl text-lg leading-8 text-[#a1aaa5] lg:pt-10">Soy Tomás Molina, desarrollador junior en Córdoba con interés en desarrollo web, inteligencia artificial y automatización. Me gusta resolver problemas, aprender nuevas herramientas y transformar ideas en soluciones funcionales.</p></div></section>
}

export function TechStack() {
  return <section className="section-shell pt-0"><div className="flex flex-col gap-6 border-y border-white/[0.07] py-8 sm:flex-row sm:items-center sm:justify-between"><p className="eyebrow">Stack principal</p><div className="flex max-w-3xl flex-wrap gap-x-5 gap-y-3">{technologies.map((tech) => <span key={tech} className="text-sm text-[#b7c1bb]">{tech}</span>)}</div></div></section>
}

export function Projects() {
  return (
    <section id="proyectos" className="section-shell pt-12 lg:pt-24">
      <div className="mb-12 flex items-end justify-between gap-6">
        <div>
          <p className="eyebrow">Proyectos destacados</p>

          <h2 className="section-title mt-5">
            Ideas que se
            <br />
            <span className="text-[#71837a]">vuelven reales.</span>
          </h2>
        </div>

        <span className="hidden text-xs text-[#77847d] sm:block">
          03 proyectos seleccionados
        </span>
      </div>

      <div className="flex flex-col">
        {projects.map((project) => (
          <a
            key={project.number}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-row group"
          >
            <div className="flex items-start gap-5 sm:gap-10">
              <span className="pt-1 text-xs text-[#617069]">
                {project.number}
              </span>

              <div className="max-w-2xl">
                <h3 className="text-xl font-medium tracking-[-0.03em] text-[#edf1ed] sm:text-2xl">
                  {project.title}
                </h3>

                <p className="mt-3 max-w-xl text-sm leading-6 text-[#8d9992]">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/[0.1] px-3 py-1 text-[11px] text-[#8e9a94]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <ArrowUpRight
              aria-hidden="true"
              className="mt-1 size-5 shrink-0 text-[#788a81] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>
        ))}
      </div>
    </section>
  )
}

export function Contact() {
  return (
    <section
      id="contacto"
      className="section-shell pb-24 pt-28 lg:pb-32 lg:pt-44"
    >
      <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#0d1110] px-6 py-14 sm:px-12 lg:px-20 lg:py-20">
        <div className="cta-light" />

        <div className="relative">
          <p className="eyebrow">Siguiente paso</p>

          <h2 className="mt-6 max-w-2xl text-[clamp(2.8rem,7vw,5.5rem)] font-medium leading-[0.95] tracking-[-0.065em] text-[#f5f5f2]">
            ¿Hablamos?
          </h2>

          <p className="mt-6 max-w-md text-base leading-7 text-[#9ca7a1]">
            Estoy buscando mi primera oportunidad profesional en tecnología.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="/CV_Tomas_Molina.pdf"
              download
              className="button-primary"
            >
              <span aria-hidden="true">↓</span>
              Descargar CV
            </a>

            <a
              href="mailto:tomimolina525@gmail.com"
              className="button-quiet"
            >
              Email <ArrowUpRight className="size-4" />
            </a>
          </div>

          <div className="mt-16 flex flex-wrap gap-6 text-xs text-[#7f8b85]">
            <a
              href="https://www.linkedin.com/in/tomas-molina-5819513a0"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[#f5f5f2]"
            >
              LinkedIn ↗
            </a>

            <a
              href="https://github.com/Tomi-Molina"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[#f5f5f2]"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Footer() { return <footer className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-white/[0.07] px-6 py-7 text-xs text-[#68756e] sm:flex-row sm:items-center sm:justify-between lg:px-8"><span className="text-[#a4afa9]">Tomás Molina <span className="text-[#68756e]">/ Desarrollador Junior</span></span><span>Córdoba, Argentina · Aprender · Construir · Mejorar</span></footer> }
