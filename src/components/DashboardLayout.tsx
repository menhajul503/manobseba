import { useMemo, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import { useAuth } from '../hooks/useAuth';

const routeTitles: Record<string, string> = {
  '/dashboard': 'Dashboard',
  '/dashboard/admin': 'Admin Dashboard',
  '/dashboard/super': 'Super Admin Dashboard',
  '/dashboard/user': 'My Dashboard',
  '/dashboard/members': 'Member Management',
  '/dashboard/donations': 'Donations',
  '/dashboard/transactions': 'Transactions',
  '/dashboard/profile': 'Profile',
};

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const pageTitle = useMemo(() => {
    const base = Object.keys(routeTitles).find((path) => location.pathname.startsWith(path));
    return base ? routeTitles[base] : 'ManobSheba';
  }, [location.pathname]);

  const role = user?.role || 'user';

  return (
    <div className="min-h-screen bg-surface text-slate-900">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} role={role as 'super_admin' | 'sub_admin' | 'admin' | 'user'} />

      <div className="lg:pl-72">
        <Topbar title={pageTitle} onMobileMenu={() => setSidebarOpen(true)} onLogout={async () => {
          await logout();
          navigate('/login');
        }} />
        <main className="px-4 pb-10 pt-4 sm:px-6 lg:px-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
