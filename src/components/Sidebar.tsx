import { NavLink } from 'react-router-dom';
import { Bell, Home, Layers, Package, Users2 } from 'lucide-react';

type SidebarProps = {
  open: boolean;
  onClose: () => void;
  role: 'super_admin' | 'sub_admin' | 'admin' | 'user';
};

const superAdminMenu = [
  { label: 'Overview', to: '/dashboard/super', icon: Home },
  { label: 'Users', to: '/dashboard/members', icon: Users2 },
  { label: 'Donations', to: '/dashboard/donations', icon: Layers },
  { label: 'Transactions', to: '/dashboard/transactions', icon: Package },
  { label: 'Reports', to: '/dashboard/admin', icon: Bell }
];

const adminMenu = [
  { label: 'Overview', to: '/dashboard/admin', icon: Home },
  { label: 'Members', to: '/dashboard/members', icon: Users2 },
  { label: 'Donations', to: '/dashboard/donations', icon: Layers },
  { label: 'Transactions', to: '/dashboard/transactions', icon: Package },
];

const userMenu = [
  { label: 'My Dashboard', to: '/dashboard/user', icon: Home },
  { label: 'Donations', to: '/dashboard/donations', icon: Layers },
  { label: 'Transactions', to: '/dashboard/transactions', icon: Package },
];

export default function Sidebar({ open, onClose, role }: SidebarProps) {
  const menuItems = role === 'super_admin' ? superAdminMenu : role === 'sub_admin' || role === 'admin' ? adminMenu : userMenu;

  return (
    <aside>
      <div className={`fixed inset-y-0 left-0 z-30 w-72 transform bg-white shadow-xl transition duration-300 lg:translate-x-0 ${open ? 'translate-x-0' : '-translate-x-full'} lg:static lg:block`}>
        <div className="flex h-full flex-col border-r border-slate-200 bg-white px-6 py-8">
          <div className="mb-10 flex items-center gap-3 rounded-3xl bg-[#E7F1F0] p-4 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-white">M</div>
            <div>
              <p className="text-sm font-semibold text-slate-900">Manobseba Group</p>
              <p className="text-xs text-slate-500">Fund Management</p>
            </div>
          </div>

          <nav className="flex-1 space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-3xl px-4 py-3 text-sm font-medium transition ${
                      isActive ? 'bg-[#E5F4F1] text-primary shadow-sm' : 'text-slate-700 hover:bg-slate-50'
                    }`
                  }
                  onClick={onClose}
                >
                  <Icon className="h-5 w-5" />
                  {item.label}
                </NavLink>
              );
            })}
          </nav>

          <div className="mt-8 rounded-3xl bg-[#EEF9F5] p-5 text-sm text-slate-700 shadow-sm">
            <p className="font-semibold text-slate-900">Ready to help?</p>
            <p className="mt-2 text-sm text-slate-600">Use the menu to navigate between donations, members, and distributions.</p>
          </div>
        </div>
      </div>

      <div className={open ? 'fixed inset-0 z-20 bg-slate-900/40 lg:hidden' : 'hidden'} onClick={onClose} />
    </aside>
  );
}
