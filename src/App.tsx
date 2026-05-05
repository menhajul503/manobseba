import { useMemo, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import AdminDashboard from './pages/AdminDashboard';
import UserDashboard from './pages/UserDashboard';
import MemberManagement from './pages/MemberManagement';
import DonationsPage from './pages/DonationsPage';
import DistributionPage from './pages/DistributionPage';
import NoticesPage from './pages/NoticesPage';
import LoginPage from './pages/LoginPage';

const routeTitles: Record<string, string> = {
  '/admin/dashboard': 'Dashboard',
  '/admin/members': 'Member Management',
  '/admin/donations': 'Donations',
  '/admin/distributions': 'Distributions',
  '/admin/notices': 'Notices',
  '/user': 'My Dashboard'
};

function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const pageTitle = useMemo(() => {
    const base = Object.keys(routeTitles).find((path) => location.pathname.startsWith(path));
    return base ? routeTitles[base] : 'Manobseba';
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-surface text-slate-900">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} role="admin" />

      <div className="lg:pl-72">
        <Topbar title={pageTitle} onMobileMenu={() => setSidebarOpen(true)} />
        <main className="px-4 pb-10 pt-4 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/members" element={<MemberManagement />} />
            <Route path="/admin/donations" element={<DonationsPage />} />
            <Route path="/admin/distributions" element={<DistributionPage />} />
            <Route path="/admin/notices" element={<NoticesPage />} />
            <Route path="/user" element={<UserDashboard />} />
            <Route path="*" element={<Navigate to="/admin/dashboard" replace />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/*" element={<DashboardLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
