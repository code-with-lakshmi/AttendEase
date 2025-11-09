import { Link, useLocation } from 'react-router-dom';
import { 
  HomeIcon, 
  CalendarIcon, 
  DocumentTextIcon, 
  BellIcon, 
  CogIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

const Sidebar = () => {
  const location = useLocation();
  const navItems = [
    { name: 'Dashboard', path: '/student-dashboard', icon: HomeIcon },
    { name: 'Attendance', path: '/attendance', icon: ChartBarIcon },
    { name: 'OD Requests', path: '/od-requests', icon: DocumentTextIcon },
    { name: 'History', path: '/history', icon: CalendarIcon },
    { name: 'Notifications', path: '/notifications', icon: BellIcon },
    { name: 'Settings', path: '/settings', icon: CogIcon },
  ];

  return (
    <div className="w-64 bg-white h-screen fixed left-0 top-0 shadow-lg">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-800">AttendEase</h1>
        <p className="text-sm text-gray-500">Student Portal</p>
      </div>
      <nav className="mt-8">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center px-6 py-3 text-sm font-medium ${
                isActive
                  ? 'bg-blue-100 text-blue-600 border-r-4 border-blue-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <item.icon className="h-5 w-5 mr-3" />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
