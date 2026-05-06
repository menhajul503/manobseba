import { NavLink, Outlet } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
];

export default function PublicLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F7FBF9] via-white to-[#EDF7F1] text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <NavLink to="/" className="text-xl font-bold tracking-tight text-slate-900">
            ManobSheba
          </NavLink>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition ${isActive ? 'text-primary' : 'text-slate-600 hover:text-slate-900'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <NavLink
              to="/login"
              className="rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-semibold text-slate-700 transition hover:border-primary hover:text-primary"
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#266c5f]"
            >
              Register
            </NavLink>
          </div>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="border-t border-slate-200 bg-white/95 py-8">
        <div className="mx-auto max-w-7xl px-4 text-sm text-slate-500 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p>ManobSheba NGO Management System</p>
            <p>Designed for village charity, donation tracking and secure member access.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
