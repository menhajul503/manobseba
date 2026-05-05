import { distributions } from '../data/mockData';
import StatusBadge from '../components/StatusBadge';
import { Activity, Gift, ListChecks } from 'lucide-react';

export default function DistributionPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-[32px] bg-white p-6 shadow-sm">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-slate-500">Distributions</p>
            <h2 className="text-2xl font-semibold text-slate-900">Create distribution event</h2>
          </div>
          <button className="inline-flex items-center gap-2 rounded-3xl bg-primary px-5 py-3 text-sm font-semibold text-white">
            <Gift className="h-4 w-4" /> New event
          </button>
        </div>

        <form className="grid gap-4 lg:grid-cols-2">
          <select className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-900">
            <option>Distribution type</option>
            <option>Eid package</option>
            <option>Emergency help</option>
            <option>Medical aid</option>
          </select>
          <input className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-900" placeholder="Date" />
          <input className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-900" placeholder="Total budget" />
          <input className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-900" placeholder="Beneficiary count" />
          <textarea rows={3} className="col-span-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-900" placeholder="Notes" />
          <button className="rounded-3xl bg-secondary px-5 py-4 font-semibold text-white">Launch distribution</button>
        </form>
      </section>

      <section className="rounded-[32px] bg-white p-6 shadow-sm">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-slate-500">Active distributions</p>
            <h2 className="text-2xl font-semibold text-slate-900">List of events</h2>
          </div>
          <button className="rounded-3xl bg-[#EEF9F5] px-5 py-3 text-sm font-semibold text-primary">Manage recipients</button>
        </div>

        <div className="grid gap-4 xl:grid-cols-3">
          {distributions.map((item) => (
            <div key={item.id} className="rounded-[28px] border border-slate-200 bg-slate-50 p-5">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-slate-900">{item.type}</h3>
                <StatusBadge status={item.status} />
              </div>
              <p className="text-sm text-slate-600">{item.date}</p>
              <div className="mt-4 space-y-2 text-sm text-slate-700">
                <p>Budget: <span className="font-semibold text-slate-900">{item.budget}</span></p>
                <p>Beneficiaries: <span className="font-semibold text-slate-900">{item.beneficiaries}</span></p>
              </div>
              <button className="mt-6 inline-flex items-center gap-2 rounded-3xl bg-white px-4 py-3 text-sm font-semibold text-primary shadow-sm">
                <ListChecks className="h-4 w-4" /> View details
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-[32px] bg-white p-6 shadow-sm">
        <div className="flex items-center gap-3 text-sm text-slate-500">
          <Activity className="h-5 w-5 text-secondary" /> Track every distribution with clear details and beneficiary records.
        </div>
      </section>
    </div>
  );
}
