export default function Timeline(){
  const steps = [
    {title:"Déposer", desc:"Investissez dans le Vault Vert (obligations vertes tokenisées)."},
    {title:"Sourcer", desc:"Fenêtre ouverte quand un LP souhaite sortir."},
    {title:"Switcher", desc:"Allouez du Vault vers le feeder dédié."},
    {title:"Exécuter", desc:"DvP rapide, registre on‑chain mis à jour."},
    {title:"Organiser", desc:"Liquidité en fenêtres programmées."},
  ];
  return (
    <ol className="grid md:grid-cols-5 gap-6">
      {steps.map((s,i)=>(
        <li key={i} className="card p-4">
          <div className="text-primary font-semibold">{i+1}. {s.title}</div>
          <div className="body mt-1">{s.desc}</div>
        </li>
      ))}
    </ol>
  )
}
