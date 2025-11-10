import Link from "next/link";

export default function Footer(){
  return (
    <footer className="mt-24 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-10 grid md:grid-cols-5 gap-8 text-slateA">
        <div className="space-y-2">
          <div className="text-white font-semibold">Produit</div>
          <Link href="/produit/vault-vert">Vault Vert</Link><br/>
          <Link href="/produit/auctions">Auctions</Link><br/>
          <Link href="/produit/feeders">Feeders</Link>
        </div>
        <div>
          <div className="text-white font-semibold">Pour qui</div>
          <ul className="space-y-2">
            <li><Link href="/pour-qui/investisseurs">Investisseurs</Link></li>
            <li><Link href="/pour-qui/lp-vendeurs">LP vendeurs</Link></li>
            <li><Link href="/pour-qui/gps">GPs</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-white font-semibold">Légal</div>
          <ul className="space-y-2">
            <li><Link href="/legal/mentions-legales">Mentions légales</Link></li>
            <li><Link href="/legal/conditions">Conditions</Link></li>
            <li><Link href="/legal/confidentialite">Confidentialité</Link></li>
            <li><Link href="/legal/risques">Risques</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-white font-semibold">Réglementaire</div>
          <ul className="space-y-2">
            <li><Link href="/reglementaire">Cadre & Sécurité</Link></li>
            <li><Link href="/politique-exclusion">Politique d’exclusion</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-white font-semibold">Ressources</div>
          <ul className="space-y-2">
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 md:px-6 pb-8 text-xs text-slateA">
        © {new Date().getFullYear()} Vault Vert. FR/EN · Cookies
      </div>
    </footer>
  )
}
