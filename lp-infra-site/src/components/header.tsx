"use client";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Menu, Moon, Sun } from "lucide-react";
import { useState } from "react";

export default function Header(){
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur glass">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-3 flex items-center gap-6">
        <Link href="/" className="font-semibold text-white">Vault Vert</Link>
        <nav className="hidden md:flex gap-4 text-sm text-slateA">
          <div className="group relative">
            <Link href="/produit/vault-vert">Produit</Link>
            <div className="invisible group-hover:visible absolute mt-2 p-3 rounded-2xl bg-black/70 backdrop-blur">
              <div className="grid gap-1 text-sm">
                <Link href="/produit/vault-vert">Vault Vert</Link>
                <Link href="/produit/auctions">Auctions</Link>
                <Link href="/produit/feeders">Feeders</Link>
              </div>
            </div>
          </div>
          <div className="group relative">
            <span>Pour qui</span>
            <div className="invisible group-hover:visible absolute mt-2 p-3 rounded-2xl bg-black/70 backdrop-blur">
              <div className="grid gap-1 text-sm">
                <Link href="/pour-qui/investisseurs">Investisseurs</Link>
                <Link href="/pour-qui/lp-vendeurs">LP vendeurs</Link>
                <Link href="/pour-qui/gps">GPs</Link>
              </div>
            </div>
          </div>
          <Link href="/reglementaire">Sécurité & Réglementaire</Link>
          <Link href="/tarifs">Tarifs</Link>
          <Link href="/blog">Ressources</Link>
          <Link href="/a-propos">À propos</Link>
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <Link href="/onboarding" className="btn btn-primary">Ouvrir un compte</Link>
          <Link href="/demo" className="btn btn-outline">Demander une démo</Link>
          <button aria-label="toggle theme" className="p-2 rounded-xl hover:bg-white/10" onClick={()=>setTheme(theme==="light"?"dark":"light")}>
            {theme==="light" ? <Moon size={18}/> : <Sun size={18}/>}
          </button>
          <button className="md:hidden p-2" onClick={()=>setOpen(!open)}><Menu/></button>
        </div>
      </div>
      {open && (
        <div className="md:hidden px-4 pb-4 text-slateA space-y-2">
          <Link href="/produit/vault-vert" className="block">Produit</Link>
          <Link href="/pour-qui/investisseurs" className="block">Pour qui</Link>
          <Link href="/reglementaire" className="block">Sécurité & Réglementaire</Link>
          <Link href="/tarifs" className="block">Tarifs</Link>
          <Link href="/blog" className="block">Ressources</Link>
          <Link href="/a-propos" className="block">À propos</Link>
        </div>
      )}
    </header>
  )
}
