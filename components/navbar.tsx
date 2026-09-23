'use client'

import { useState } from 'react'
import { ArrowDown, Menu, X } from 'lucide-react'

const links = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Contacto', href: '#contacto' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/[0.08] bg-[#080b0a]/75 px-4 py-3 shadow-2xl shadow-black/20 backdrop-blur-xl sm:px-5">
        <a href="#inicio" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex size-8 items-center justify-center rounded-full border border-[#9bb4aa]/40 text-[11px] font-semibold tracking-[-0.08em] text-[#dfe7e2]">TM</span>
          <span className="hidden text-sm font-medium tracking-[-0.02em] text-[#eef1ed] sm:inline">Tomás Molina</span>
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Navegación principal">
          {links.map((link) => <a key={link.href} href={link.href} className="text-xs text-[#8d9993] transition-colors hover:text-[#f5f5f2]">{link.label}</a>)}
        </nav>

        <a href="/CV_Tomas_Molina.pdf" download className="hidden items-center gap-2 rounded-full border border-[#a8c0b4]/30 bg-[#dce8df] px-4 py-2 text-xs font-semibold text-[#111714] transition-transform hover:-translate-y-0.5 sm:flex">
          <ArrowDown aria-hidden="true" className="size-3.5" /> Descargar CV
        </a>
        <button type="button" onClick={() => setOpen(!open)} className="flex size-9 items-center justify-center rounded-full border border-white/10 text-[#dfe7e2] md:hidden" aria-label={open ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={open}>
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </div>
      {open && <nav className="mx-auto mt-2 flex max-w-7xl flex-col gap-1 rounded-2xl border border-white/[0.08] bg-[#0d1110]/95 p-3 shadow-xl backdrop-blur-xl md:hidden" aria-label="Menú móvil">
        {links.map((link) => <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 text-sm text-[#a7b1ac] hover:bg-white/5 hover:text-[#f5f5f2]">{link.label}</a>)}
        <a href="/CV_Tomas_Molina.pdf" download className="mt-1 flex items-center gap-2 rounded-xl bg-[#dce8df] px-4 py-3 text-sm font-semibold text-[#111714]"><ArrowDown className="size-4" /> Descargar CV</a>
      </nav>}
    </header>
  )
}

export default Navbar

