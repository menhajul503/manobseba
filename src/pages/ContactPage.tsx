export default function ContactPage() {
  return (
    <div className="min-h-screen bg-surface py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-[40px] bg-white p-10 shadow-sm">
        <h1 className="text-4xl font-bold text-slate-900">Contact ManobSheba</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
          Need help onboarding, setting up the NGO registry, or customizing the donation workflow? Reach out and we’ll help you get village operations live quickly.
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Visit us</p>
            <p className="mt-4 text-xl font-semibold text-slate-900">ManobSheba Village Center</p>
            <p className="mt-3 text-slate-600">Dhaka, Bangladesh</p>
          </div>
          <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Get support</p>
            <p className="mt-4 text-xl font-semibold text-slate-900">support@manobsheba.org</p>
            <p className="mt-3 text-slate-600">+880 1234 567890</p>
          </div>
        </div>
      </div>
    </div>
  );
}
