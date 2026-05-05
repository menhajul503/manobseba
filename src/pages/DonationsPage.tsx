import StatusBadge from '../components/StatusBadge';
import { donationHistory } from '../data/mockData';
import { CreditCard, PlusCircle } from 'lucide-react';

export default function DonationsPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-[32px] bg-white p-6 shadow-sm">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-slate-500">Donations</p>
            <h2 className="text-2xl font-semibold text-slate-900">Add donation entry</h2>
          </div>
          <button className="inline-flex items-center gap-2 rounded-3xl bg-primary px-5 py-3 text-sm font-semibold text-white">
            <PlusCircle className="h-4 w-4" /> New donation
          </button>
        </div>

        <form className="grid gap-4 lg:grid-cols-2">
          <input className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-900" placeholder="Donor name" />
          <input className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-900" placeholder="Amount" />
          <input className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-900" placeholder="Date" />
          <select className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-900">
            <option>Payment method</option>
            <option>Bkash</option>
            <option>Cash</option>
            <option>Bank</option>
          </select>
          <input className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-900" placeholder="Receipt number" />
          <button className="rounded-3xl bg-secondary px-5 py-4 font-semibold text-white">Submit gift</button>
        </form>
      </section>

      <section className="rounded-[32px] bg-white p-6 shadow-sm">
        <div className="mb-6 grid gap-4 sm:grid-cols-3">
          <div className="rounded-3xl bg-[#F0FBF7] p-5">
            <p className="text-sm text-slate-500">Total donations</p>
            <p className="mt-3 text-2xl font-semibold text-slate-900">৳ 4,25,000</p>
          </div>
          <div className="rounded-3xl bg-[#EFF6FF] p-5">
            <p className="text-sm text-slate-500">Pending amount</p>
            <p className="mt-3 text-2xl font-semibold text-slate-900">৳ 12,500</p>
          </div>
          <div className="rounded-3xl bg-[#FEF6EC] p-5">
            <p className="text-sm text-slate-500">Collected this month</p>
            <p className="mt-3 text-2xl font-semibold text-slate-900">৳ 1,28,000</p>
          </div>
        </div>

        <div className="overflow-hidden rounded-[28px] border border-slate-200">
          <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-4 font-medium text-slate-500">Donor</th>
                <th className="px-6 py-4 font-medium text-slate-500">Amount</th>
                <th className="px-6 py-4 font-medium text-slate-500">Date</th>
                <th className="px-6 py-4 font-medium text-slate-500">Method</th>
                <th className="px-6 py-4 font-medium text-slate-500">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              {donationHistory.map((item) => (
                <tr key={item.id}>
                  <td className="px-6 py-4 font-semibold text-slate-900">{item.donor}</td>
                  <td className="px-6 py-4 text-slate-900">{item.amount}</td>
                  <td className="px-6 py-4 text-slate-600">{item.date}</td>
                  <td className="px-6 py-4 text-slate-600">{item.method}</td>
                  <td className="px-6 py-4"><StatusBadge status={item.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-[32px] bg-white p-6 shadow-sm">
        <div className="flex items-center gap-3 text-sm text-slate-500">
          <CreditCard className="h-5 w-5 text-secondary" /> Payments are kept transparent for every member and donor.
        </div>
      </section>
    </div>
  );
}
