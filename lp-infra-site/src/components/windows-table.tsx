type Row = { fund:string; window:string; size:string; premium?:string; status:"Ouverte"|"À venir"|"Clôturée" };
const rows: Row[] = [
  {fund:"Infra Fund I", window:"12–14 Nov", size:"€8m", premium:"+0,8%", status:"Ouverte"},
  {fund:"Core Infra II", window:"25–27 Nov", size:"€5m", premium:"+0,3%", status:"À venir"}
];
export default function WindowsTable(){
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10">
      <table className="w-full text-sm">
        <thead className="bg-white/5">
          <tr className="[&>th]:text-left [&>th]:py-3 [&>th]:px-4 text-white">
            <th>Fonds</th><th>Fenêtre</th><th>Taille</th><th>Prime</th><th>Statut</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/10">
          {rows.map((r,i)=>(
            <tr key={i} className="[&>td]:py-3 [&>td]:px-4 text-slateA">
              <td>{r.fund}</td><td>{r.window}</td><td>{r.size}</td><td>{r.premium or '—'}</td><td>{r.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
