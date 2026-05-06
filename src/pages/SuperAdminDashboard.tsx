import StatCard from '../components/StatCard';

export default function SuperAdminDashboard() {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Total Members" value="325" />
        <StatCard label="Active Donations" value="148" />
        <StatCard label="Transactions" value="376" />
        <StatCard label="System Uptime" value="99.9%" description="Secure" accent="bg-[#EFF6FF] text-[#1F5F93]" />
      </div>

      <div className="grid gap-6 xl:grid-cols-[2fr_1fr]">
        <section className="overflow-hidden rounded-[32px] bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-slate-500">Governance</p>
              <h2 className="text-2xl font-semibold text-slate-900">Platform oversight</h2>
            </div>
            <span className="inline-flex items-center gap-2 rounded-3xl bg-[#EEF9F5] px-4 py-2 text-sm font-semibold text-primary">Live</span>
          </div>

          <div className="space-y-4 text-slate-600">
            <p>Review user roles, donation approvals, and financial summaries from a single control center.</p>
            <p>Super Admin can manage every user, donation, transaction, and configuration record for ManobSheba.</p>
            <p>Secure API authentication ensures requests use Laravel Sanctum tokens and role-based middleware.</p>
          </div>
        </section>

        <section className="rounded-[32px] bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">Quick actions</h2>
          <div className="mt-6 space-y-4">
            <div className="rounded-3xl bg-slate-50 p-5">
              <p className="text-sm text-slate-500">Manage users</p>
              <p className="mt-2 text-lg font-semibold text-slate-900">Add or remove admins and members.</p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-5">
              <p className="text-sm text-slate-500">Review donations</p>
              <p className="mt-2 text-lg font-semibold text-slate-900">Approve incoming donations and allocations.</p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-5">
              <p className="text-sm text-slate-500">Export reports</p>
              <p className="mt-2 text-lg font-semibold text-slate-900">Generate monthly summaries for stakeholders.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
