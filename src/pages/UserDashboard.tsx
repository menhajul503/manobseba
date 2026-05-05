import StatusBadge from '../components/StatusBadge';
import { donationHistory, notices, profileInfo } from '../data/mockData';
import { ArrowUpRight, CheckCircle2, MessageCircle, Wallet } from 'lucide-react';

export default function UserDashboard() {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 xl:grid-cols-[1.6fr_1fr]">
        <section className="rounded-[32px] bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-slate-500">Your contribution</p>
              <h2 className="text-3xl font-semibold text-slate-900">৳ 42,800</h2>
            </div>
            <div className="inline-flex items-center gap-2 rounded-3xl bg-[#E8F8F4] px-4 py-3 text-sm font-semibold text-[#1E6F50]">
              <ArrowUpRight className="h-4 w-4" /> +18% this month
            </div>
          </div>

          <div className="mt-8 space-y-4 rounded-[28px] bg-[#F0FBF7] p-5">
            <div className="flex items-center gap-4">
              <div className="rounded-3xl bg-primary/10 p-3 text-primary">
                <Wallet className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-slate-500">Next scheduled donation</p>
                <p className="mt-1 font-semibold text-slate-900">10 May 2026 — ৳ 1,500</p>
              </div>
            </div>
            <div className="h-3 rounded-full bg-slate-200">
              <div className="h-3 w-3/4 rounded-full bg-primary" />
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="rounded-[32px] bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-slate-500">Profile</p>
                <h2 className="text-xl font-semibold text-slate-900">{profileInfo.name}</h2>
              </div>
              <span className="rounded-3xl bg-[#E7F1F0] px-4 py-2 text-sm font-semibold text-primary">{profileInfo.role}</span>
            </div>
            <div className="mt-6 space-y-4 text-sm text-slate-600">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <span>Email</span>
                <span>{profileInfo.email}</span>
              </div>
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <span>Phone</span>
                <span>{profileInfo.phone}</span>
              </div>
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <span>Joined</span>
                <span>{profileInfo.joined}</span>
              </div>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-3xl bg-[#F8FEF8] p-4 text-sm font-semibold text-slate-900">
                Donations <span className="block text-2xl">{profileInfo.donations}</span>
              </div>
              <div className="rounded-3xl bg-[#EFF6FF] p-4 text-sm font-semibold text-slate-900">
                Distributions <span className="block text-2xl">{profileInfo.distributions}</span>
              </div>
            </div>
          </div>

          <div className="rounded-[32px] bg-white p-6 shadow-sm">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-slate-500">Notices</p>
                <h2 className="text-xl font-semibold text-slate-900">Latest updates</h2>
              </div>
              <button className="rounded-3xl bg-[#EEF9F5] px-4 py-2 text-sm font-semibold text-primary">View all</button>
            </div>
            <div className="space-y-4">
              {notices.slice(0, 3).map((notice) => (
                <div key={notice.id} className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-semibold text-slate-900">{notice.title}</p>
                    {notice.important && <StatusBadge status="Pending" />}
                  </div>
                  <p className="mt-2 text-sm text-slate-600">{notice.excerpt}</p>
                  <p className="mt-3 text-xs text-slate-500">{notice.date}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <section className="rounded-[32px] bg-white p-6 shadow-sm">
        <div className="mb-6 flex items-center justify-between gap-3">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-slate-500">Payment history</p>
            <h2 className="text-2xl font-semibold text-slate-900">Recent donations</h2>
          </div>
          <button className="rounded-3xl bg-primary px-5 py-3 text-sm font-semibold text-white">Add donation</button>
        </div>

        <div className="overflow-hidden rounded-[28px] border border-slate-200">
          <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-4 font-medium text-slate-500">Date</th>
                <th className="px-6 py-4 font-medium text-slate-500">Amount</th>
                <th className="px-6 py-4 font-medium text-slate-500">Method</th>
                <th className="px-6 py-4 font-medium text-slate-500">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              {donationHistory.map((item) => (
                <tr key={item.id}>
                  <td className="px-6 py-4 text-slate-700">{item.date}</td>
                  <td className="px-6 py-4 font-semibold text-slate-900">{item.amount}</td>
                  <td className="px-6 py-4 text-slate-600">{item.method}</td>
                  <td className="px-6 py-4">
                    <StatusBadge status={item.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-[32px] bg-white p-6 shadow-sm">
        <div className="flex items-center gap-3 text-sm text-slate-500">
          <CheckCircle2 className="h-5 w-5 text-primary" />
          <p>Use the dashboard to track your payments and stay informed about community support.</p>
        </div>
      </section>
    </div>
  );
}
