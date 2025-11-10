import Link from "next/link";
import Timeline from "@/components/timeline";
import WindowsTable from "@/components/windows-table";

export default function Home(){
  return (
    <div>
      <section className="hero-gradient">
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-24">
          <h1 className="h1 max-w-3xl">Le LP secondaire parfait pour l’infrastructure.</h1>
          <p className="lead mt-4 max-w-2xl">Feeder tokenisé par fonds. Auctions en fenêtres. DvP rapide. Accès prioritaire via le Vault Vert.</p>
          <div className="mt-8 flex gap-3">
            <Link href="/onboarding" className="btn btn-primary">Ouvrir un compte</Link>
            <Link href="/demo" className="btn btn-outline">Demander une démo</Link>
          </div>
          <p className="mt-3 text-xs text-slateA">Investisseurs qualifiés et retail encadré (juridictions éligibles).</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-6 py-16">
        <div className="h2">Pourquoi nous</div>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div className="card card-hover p-6">
            <div className="text-white font-semibold">LP vendeurs</div>
            <p className="body mt-2">Liquidité organisée, rapide, proche NAV.</p>
            <Link className="btn btn-link mt-4" href="/pour-qui/lp-vendeurs">En savoir plus</Link>
          </div>
          <div className="card card-hover p-6">
            <div className="text-white font-semibold">Investisseurs</div>
            <p className="body mt-2">Tickets fractionnés, fenêtres d’enchères, priorité via le Vault Vert.</p>
            <Link className="btn btn-link mt-4" href="/pour-qui/investisseurs">En savoir plus</Link>
          </div>
          <div className="card card-hover p-6">
            <div className="text-white font-semibold">GPs</div>
            <p className="body mt-2">Un seul LP en face (feeder dédié). Gouvernance et reporting simplifiés.</p>
            <Link className="btn btn-link mt-4" href="/pour-qui/gps">En savoir plus</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-6 py-16">
        <div className="h2 mb-6">Comment ça marche</div>
        <Timeline/>
        <div className="mt-6">
          <Link href="/demo" className="btn btn-outline">Voir un exemple d’allocation</Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-6 py-16">
        <div className="h2">Produit</div>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div className="card p-6">
            <div className="text-white font-semibold">Vault Vert</div>
            <p className="body mt-2">Parking de cash rémunéré, liquide, vert, tokenisé.</p>
            <p className="text-xs text-slateA mt-2">Rendements cibles non garantis. Risques de marché et de crédit.</p>
          </div>
          <div className="card p-6">
            <div className="text-white font-semibold">Auctions (fenêtres)</div>
            <p className="body mt-2">Marché secondaire en fenêtres, price discovery clair, exécution proche NAV.</p>
          </div>
          <div className="card p-6">
            <div className="text-white font-semibold">Feeders par fonds</div>
            <p className="body mt-2">Feeder SPV dédié par fonds. Tokenisation des parts. Le GP ne voit qu’un seul LP: nous.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-6 py-16">
        <div className="h2 mb-6">Réglementaire & Sécurité</div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-6">
            <div className="text-white font-semibold">Cadre</div>
            <p className="body mt-2">AIFM partenaire, dépositaire, MTF/MTF‑DLT.</p>
          </div>
          <div className="card p-6">
            <div className="text-white font-semibold">Conformité</div>
            <p className="body mt-2">KYC/AML, sanctions, PEP, travel rule le cas échéant.</p>
          </div>
          <div className="card p-6">
            <div className="text-white font-semibold">Garde</div>
            <p className="body mt-2">Conservation qualifiée, clés & HSM, attestations SOC2/ISO si dispo.</p>
          </div>
          <div className="card p-6">
            <div className="text-white font-semibold">Transparence</div>
            <p className="body mt-2">NAV, fenêtres planifiées, rapports.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-6 py-16">
        <div className="h2 mb-4">Fenêtres</div>
        <WindowsTable/>
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-6 py-16">
        <div className="card p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="h2">Devenez LP secondaire prioritaire.</div>
            <p className="body mt-2">Sous réserve d’éligibilité, KYC/AML, et disponibilité des fenêtres.</p>
          </div>
          <div className="flex gap-3">
            <a className="btn btn-primary" href="/onboarding">Ouvrir un compte</a>
            <a className="btn btn-outline" href="/demo">Demander une démo</a>
          </div>
        </div>
      </section>
    </div>
  );
}
