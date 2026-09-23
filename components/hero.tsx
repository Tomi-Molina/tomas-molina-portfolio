import { ArrowDown, ArrowRight, MapPin } from 'lucide-react'

export function Hero() {
  return (
    <section id="inicio" className="relative isolate flex min-h-[760px] items-center overflow-hidden px-6 pb-20 pt-36 lg:min-h-screen lg:px-8 lg:pb-24">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        <div className="hero-copy relative z-10 max-w-3xl">
          <p className="eyebrow"><span className="status-dot" /> Ideas · Código · Impacto</p>
          <h1 className="mt-7 max-w-4xl text-[clamp(2.8rem,7vw,5.75rem)] font-medium leading-[0.98] tracking-[-0.065em] text-[#f5f5f2]">Programador Junior para <span className="text-[#8faaa0]">IA</span>, automatizaciones y desarrollo web</h1>
          <p className="mt-7 max-w-md text-base leading-7 text-[#9ca7a1] sm:text-lg">Busco mi primera oportunidad para aportar, aprender rápido y construir soluciones reales.</p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="/CV_Tomas_Molina.pdf" download className="button-primary"><ArrowDown className="size-4" /> Descargar CV</a>
            <a href="#proyectos" className="button-quiet">Ver proyectos <ArrowRight className="size-4" /></a>
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-[#7f8b85]"><span className="inline-flex items-center gap-2"><MapPin className="size-3.5 text-[#8faaa0]" /> Córdoba, Argentina</span><span className="inline-flex items-center gap-2"><span className="status-dot" /> Disponible para nuevas oportunidades</span></div>
        </div>
        <div className="hero-visual relative mx-auto aspect-square w-full max-w-[540px]" aria-label="Forma abstracta tecnológica" role="img">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbital-label label-top">APRENDER · CONSTRUIR · MEJORAR</div><div className="orbital-label label-bottom">CÓRDOBA / ARGENTINA</div>
          <div className="core-glow" /><div className="core-sphere"><div className="sphere-shine" /><div className="sphere-line line-a" /><div className="sphere-line line-b" /></div>
        </div>
      </div>
      <div className="absolute bottom-8 left-6 hidden items-center gap-3 text-[10px] tracking-[0.28em] text-[#57645e] lg:flex"><span className="h-px w-10 bg-[#57645e]" /> 01 / 04</div>
    </section>
  )
}

export default Hero
