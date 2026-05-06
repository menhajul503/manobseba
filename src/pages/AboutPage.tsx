export default function AboutPage() {
  return (
    <div className="min-h-screen bg-surface py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="rounded-[40px] bg-white p-10 shadow-sm">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-primary">About ManobSheba</p>
            <h1 className="text-4xl font-bold text-slate-900">Rural NGO management made clear and collaborative.</h1>
            <p className="max-w-3xl text-lg leading-8 text-slate-600">
              ManobSheba helps villages manage donations, member contributions, reports, and administrative workflows using a role-based dashboard and modern API-first backend.
            </p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[32px] bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">Mission-driven workflow</h2>
            <p className="mt-4 text-slate-600 leading-7">
              We put transparency first: every donation, transaction and member record is visible to the right people in a secure, audited system.
            </p>
          </div>
          <div className="rounded-[32px] bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">Role-based access</h2>
            <p className="mt-4 text-slate-600 leading-7">
              Super Admin, Sub Admin and User roles let the organization scale with safe delegation while preserving oversight for critical financial operations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
