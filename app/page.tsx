import { About, Contact, Footer, Projects, TechStack } from '@/components/portfolio-sections'
import Hero from '@/components/hero'
import Navbar from '@/components/navbar'

export default function Page() {
  return <main className="min-h-screen overflow-hidden bg-[#050706] text-[#f5f5f2]"><Navbar /><Hero /><About /><TechStack /><Projects /><Contact /><Footer /></main>
}
