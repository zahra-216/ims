import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  UserCheck, 
  Users, 
  GraduationCap, 
  BookOpen, 
  QrCode, 
  CreditCard, 
  Bell, 
  Settings 
} from 'lucide-react';

const navItems = [
  { name: 'Dashboard', path: '/', icon: LayoutDashboard },
  { name: 'Admissions', path: '/admissions', icon: UserCheck },
  { name: 'Students', path: '/students', icon: Users },
  { name: 'Academics', path: '/academics', icon: GraduationCap },
  { name: 'LMS', path: '/lms', icon: BookOpen },
  { name: 'Attendance', path: '/attendance', icon: QrCode },
  { name: 'Fees & Payments', path: '/fees', icon: CreditCard },
  { name: 'Announcements', path: '/announcements', icon: Bell },
  { name: 'Client Settings', path: '/settings', icon: Settings },
];

function Sidebar() {
  return (
    <aside style={{ width: '240px', backgroundColor: '#2D4373' }} className="h-screen fixed left-0 top-0 text-white flex flex-col z-20">
      <div className="p-5 border-b border-white/10 flex items-center justify-center">
        <h1 className="text-xl font-bold tracking-wide">IMS Admin</h1>
      </div>
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                  isActive ? 'bg-[#3B5998] text-white' : 'text-gray-200 hover:bg-[#3B5998]/50'
                }`
              }
            >
              <Icon size={18} />
              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}

export default Sidebar;