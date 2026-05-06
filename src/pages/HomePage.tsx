import { Link } from 'react-router-dom';
import { ArrowRight, HeartPulse, Sparkles } from 'lucide-react';
import NotificationBanner from '../components/NotificationBanner';

const services = [
  { title: 'Community Donations', description: 'Collect and distribute resources transparently.', icon: HeartPulse },
  { title: 'Volunteer Coordination', description: 'Track volunteers, tasks and local outreach.', icon: Sparkles },
  { title: 'Village Impact', description: 'Measure contributions and report community progress.', icon: ArrowRight },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F1FCF8] via-white to-[#F7FAFC] text-slate-900">
      <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto mb-8 max-w-7xl">
          <NotificationBanner />
        </div>
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                <Sparkles className="h-4 w-4" /> Empowering village communities
              </div>
              <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                ManobSheba: village charity, member care, and transparent donations.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                A complete NGO management platform built for Super Admins, Sub Admins, and members to track giving, payments, and local impact.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link to="/register" className="inline-flex items-center justify-center rounded-3xl bg-primary px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition hover:bg-[#266c5f]">
                  Join ManobSheba
                </Link>
                <Link to="/login" className="inline-flex items-center justify-center rounded-3xl border border-slate-200 bg-white px-6 py-4 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-primary hover:text-primary">
                  Login to dashboard
                </Link>
              </div>
            </div>

            <div className="rounded-[40px] border border-slate-200 bg-white/80 p-8 shadow-xl shadow-slate-200/50 backdrop-blur-sm">
              <div className="space-y-6">
                <div className="rounded-3xl bg-[#EEF9F5] p-6">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Latest update</p>
                  <h2 className="mt-3 text-2xl font-semibold text-slate-900">Fund raise completed</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600">Collected 1,56,000 ৳ and distributed support across 12 villages this month.</p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl bg-slate-50 p-5">
                    <p className="text-sm text-slate-500">Members active</p>
                    <p className="mt-3 text-3xl font-semibold text-slate-900">325</p>
                  </div>
                  <div className="rounded-3xl bg-slate-50 p-5">
                    <p className="text-sm text-slate-500">Support programs</p>
                    <p className="mt-3 text-3xl font-semibold text-slate-900">18</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.title} className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
