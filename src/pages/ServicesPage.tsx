const offerings = [
  { title: 'Donation Tracking', description: 'Track donations by member, date, and campaign in real time.' },
  { title: 'Membership Management', description: 'Manage village members, contact details, and contribution histories.' },
  { title: 'Financial Reports', description: 'Download reports for donations, transactions and monthly summaries.' },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-surface py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="rounded-[40px] bg-white p-10 shadow-sm">
          <p className="text-sm uppercase tracking-[0.3em] text-primary">Services</p>
          <h1 className="mt-4 text-4xl font-bold text-slate-900">Digital tools for village NGOs and frontline organizers.</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            Organize donations, manage members, and oversee fund transfers with a clean, mobile-ready frontend backed by a secure Laravel API.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {offerings.map((item) => (
            <div key={item.title} className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-900">{item.title}</h2>
              <p className="mt-3 text-slate-600 leading-7">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
