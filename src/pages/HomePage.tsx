import { Link } from 'react-router-dom';
import { ArrowRight, HeartPulse, MapPin, ShieldCheck, Sparkles, Users } from 'lucide-react';
import NotificationBanner from '../components/NotificationBanner';

const features = [
  {
    title: 'Donation tracking',
    description: 'Log every contribution, monitor disbursements, and generate trust reports in one place.',
    icon: HeartPulse,
  },
  {
    title: 'Member management',
    description: 'Add and manage members, volunteers, and administrators with role-based access.',
    icon: Users,
  },
  {
    title: 'Local programs',
    description: 'Coordinate village activities, services, and relief campaigns with clear status views.',
    icon: MapPin,
  },
  {
    title: 'Secure approvals',
    description: 'Guard sensitive actions with login protection and admin workflow controls.',
    icon: ShieldCheck,
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.12),_transparent_35%)] px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <NotificationBanner />

          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                <Sparkles className="h-4 w-4" /> NGO management redesigned for village impact
              </div>
              <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                Build a smarter charity system for donations, members, and community services.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                ManobSheba helps NGOs run with confidence: secure login, role-based dashboards, donation tracking, and service coordination across the whole village.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/register"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition hover:bg-[#266c5f]"
                >
                  Start free registration
                </Link>
                <Link
                  to="/login"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-4 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-primary hover:text-primary"
                >
                  Login to dashboard
                </Link>
              </div>
            </div>

            <div className="rounded-[40px] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/50">
              <div className="space-y-5">
                <div className="rounded-3xl bg-slate-50 p-6">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Trusted by local NGOs</p>
                  <h2 className="mt-3 text-2xl font-semibold text-slate-900">Simplify funding, reporting and field coordination</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600">A polished dashboard helps your team stay aligned while managing donations, volunteers, and program outcomes.</p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl bg-white p-5 shadow-sm">
                    <p className="text-sm text-slate-500">Trusted villages</p>
                    <p className="mt-3 text-3xl font-semibold text-slate-900">28</p>
                  </div>
                  <div className="rounded-3xl bg-white p-5 shadow-sm">
                    <p className="text-sm text-slate-500">Help events</p>
                    <p className="mt-3 text-3xl font-semibold text-slate-900">45</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-sm">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">How it works</p>
              <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">A clean workflow for community funding and member support</h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
                Manage every stage from fundraising to distribution. Administrators can approve donations, monitor transactions, and keep village members informed from one dashboard.
              </p>
            </div>

            <div className="space-y-5">
              <div className="rounded-[32px] border border-slate-200 bg-slate-50 p-6">
                <p className="font-semibold text-slate-900">1. Register your team</p>
                <p className="mt-3 text-sm text-slate-600">Create admin, sub-admin, and member accounts to manage roles clearly.</p>
              </div>
              <div className="rounded-[32px] border border-slate-200 bg-slate-50 p-6">
                <p className="font-semibold text-slate-900">2. Add donations & budgets</p>
                <p className="mt-3 text-sm text-slate-600">Log funding sources and allocate resources with full transparency.</p>
              </div>
              <div className="rounded-[32px] border border-slate-200 bg-slate-50 p-6">
                <p className="font-semibold text-slate-900">3. Report results</p>
                <p className="mt-3 text-sm text-slate-600">View program impact and share progress with your community.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-100 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="rounded-[40px] border border-slate-200 bg-white p-10 shadow-sm">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Ready to begin</p>
              <h2 className="mt-4 text-3xl font-bold text-slate-900">Launch your village support system today</h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                Simple to setup, easy to use, and built for growing rural organizations. Start with registration and manage everything from one secure portal.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link to="/register" className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition hover:bg-[#266c5f]">
                  Register now
                </Link>
                <Link to="/login" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-8 py-4 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-primary hover:text-primary">
                  Login
                </Link>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-[32px] bg-white p-8 shadow-sm">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-primary/10 text-primary">
                  <ArrowRight className="h-6 w-6" />
                </div>
                <p className="text-sm font-semibold text-slate-900">Fast setup</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">Start your NGO portal quickly with ready-made pages and workflows.</p>
              </div>
              <div className="rounded-[32px] bg-white p-8 shadow-sm">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-primary/10 text-primary">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <p className="text-sm font-semibold text-slate-900">Secure login</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">Use Laravel Sanctum tokens for safe access and protected admin pages.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
