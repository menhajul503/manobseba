import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-surface px-4 py-16">
      <div className="rounded-[32px] bg-white p-10 text-center shadow-lg">
        <p className="text-sm uppercase tracking-[0.3em] text-primary">404</p>
        <h1 className="mt-4 text-4xl font-bold text-slate-900">Page not found</h1>
        <p className="mt-3 text-slate-600">We couldn’t find the page you are looking for.</p>
        <Link to="/" className="mt-8 inline-flex rounded-3xl bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#266c5f]">
          Return home
        </Link>
      </div>
    </div>
  );
}
