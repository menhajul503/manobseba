import StatCard from '../components/StatCard';
import StatusBadge from '../components/StatusBadge';
import { statCards, recentActivities } from '../data/mockData';
import { BarChart2, ShieldCheck, TrendingUp } from 'lucide-react';

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {statCards.map((card) => (
          <StatCard key={card.title} label={card.title} value={card.value} />
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-[2fr_1fr]">
        <section className="overflow-hidden rounded-[32px] bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-slate-500">Income vs Expense</p>
              <h2 className="text-2xl font-semibold text-slate-900">Monthly fund movement</h2>
            </div>
            <div className="inline-flex items-center gap-3 rounded-3xl bg-[#EEF9F5] px-4 py-2 text-sm font-semibold text-primary">
              <TrendingUp className="h-4 w-4" /> Overview
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-[#F0FBF7] p-5">
                <p className="text-sm text-slate-500">Income</p>
                <p className="mt-3 text-3xl font-semibold text-slate-900">৳ 1,45,000</p>
                <div className="mt-4 h-3 rounded-full bg-slate-200">
                  <div className="h-3 w-4/5 rounded-full bg-primary" />
                </div>
              </div>
              <div className="rounded-3xl bg-[#EFF6FF] p-5">
                <p className="text-sm text-slate-500">Expense</p>
                <p className="mt-3 text-3xl font-semibold text-slate-900">৳ 86,500</p>
                <div className="mt-4 h-3 rounded-full bg-slate-200">
                  <div className="h-3 w-1/2 rounded-full bg-secondary" />
                </div>
              </div>
            </div>

            <div className="rounded-[28px] bg-slate-50 p-5">
              <div className="flex items-center gap-3 text-sm text-slate-500">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-3xl bg-white shadow-sm">
                  <BarChart2 className="h-5 w-5 text-primary" />
                </div>
                <p>Last 12 weeks performance</p>
              </div>
              <div className="mt-6 space-y-3">
                {['Week 1', 'Week 2', 'Week 3', 'Week 4'].map((week, index) => (
                  <div key={week} className="flex items-center gap-4">
                    <span className="w-24 text-sm text-slate-500">{week}</span>
                    <div className="h-3 flex-1 rounded-full bg-slate-200">
                      <div
                        className="h-3 rounded-full"
                        style={{ width: `${(index + 4) * 10}%`, backgroundColor: index % 2 === 0 ? '#2F8F7E' : '#54A4D1' }}
                      />
                    </div>
                    <span className="w-14 text-right text-sm font-semibold text-slate-900">{(index + 6) * 10}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="rounded-[32px] bg-white p-6 shadow-sm">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Recent activity</p>
                <h2 className="text-2xl font-semibold text-slate-900">Latest fund updates</h2>
              </div>
              <button className="rounded-3xl bg-[#EEF9F5] px-4 py-2 text-sm font-semibold text-primary">View all</button>
            </div>
            <div className="space-y-4">
              {recentActivities.map((item) => (
                <div key={item.id} className="flex items-center justify-between rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4">
                  <div>
                    <p className="font-semibold text-slate-900">{item.type}</p>
                    <p className="text-sm text-slate-500">{item.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-slate-900">{item.amount}</p>
                    <StatusBadge status={item.status} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] bg-white p-6 shadow-sm">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Quick summary</p>
                <h2 className="text-2xl font-semibold text-slate-900">Fund health</h2>
              </div>
              <span className="inline-flex items-center gap-2 rounded-3xl bg-[#F0F7FF] px-4 py-2 text-sm font-semibold text-[#1F5F93]">
                <ShieldCheck className="h-4 w-4" /> Secure
              </span>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-[#F8FFFA] p-5">
                <p className="text-sm text-slate-500">Donations this month</p>
                <p className="mt-3 text-2xl font-semibold text-slate-900">৳ 1,28,000</p>
              </div>
              <div className="rounded-3xl bg-[#EEF7FF] p-5">
                <p className="text-sm text-slate-500">Distributions completed</p>
                <p className="mt-3 text-2xl font-semibold text-slate-900">72</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
