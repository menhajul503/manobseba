import { Bell, Menu, Search, UserCircle } from 'lucide-react';

type TopbarProps = {
  title: string;
  onMobileMenu: () => void;
  onLogout: () => void;
};

export default function Topbar({ title, onMobileMenu, onLogout }: TopbarProps) {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-surface/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <button className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-slate-700 shadow-sm lg:hidden" onClick={onMobileMenu}>
          <Menu className="h-5 w-5" />
        </button>
        <div className="flex-1">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Admin panel</p>
          <h1 className="text-2xl font-semibold text-slate-900">{title}</h1>
        </div>

        <div className="hidden flex-1 items-center gap-2 rounded-3xl border border-slate-200 bg-white px-4 py-2 shadow-sm sm:flex">
          <Search className="h-4 w-4 text-slate-400" />
          <input className="flex-1 bg-transparent text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none" placeholder="Search records" />
        </div>

        <div className="flex items-center gap-3">
          <button className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-slate-700 shadow-sm">
            <Bell className="h-5 w-5" />
          </button>
          <button
            onClick={onLogout}
            className="inline-flex items-center gap-2 rounded-3xl bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm"
          >
            <UserCircle className="h-5 w-5 text-primary" />
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}
