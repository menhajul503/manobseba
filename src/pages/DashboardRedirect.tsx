import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export default function DashboardRedirect() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-surface">
        <div className="rounded-3xl bg-white px-8 py-6 shadow-lg">Loading dashboard…</div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (user.role === 'super_admin') {
    return <Navigate to="/dashboard/super" replace />;
  }

  if (user.role === 'sub_admin' || user.role === 'admin') {
    return <Navigate to="/dashboard/admin" replace />;
  }

  return <Navigate to="/dashboard/user" replace />;
}
