import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashboardLayout from './components/DashboardLayout';
import ProtectedRoute from './components/ProtectedRoute';
import PublicLayout from './components/PublicLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AdminDashboard from './pages/AdminDashboard';
import SuperAdminDashboard from './pages/SuperAdminDashboard';
import UserDashboard from './pages/UserDashboard';
import MemberManagement from './pages/MemberManagement';
import DonationsPage from './pages/DonationsPage';
import TransactionsPage from './pages/TransactionsPage';
import DashboardRedirect from './pages/DashboardRedirect';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>

        <Route
          path="/dashboard/*"
          element={<ProtectedRoute><DashboardLayout /></ProtectedRoute>}
        >
          <Route index element={<DashboardRedirect />} />
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="super" element={<SuperAdminDashboard />} />
          <Route path="user" element={<UserDashboard />} />
          <Route path="members" element={<MemberManagement />} />
          <Route path="donations" element={<DonationsPage />} />
          <Route path="transactions" element={<TransactionsPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
