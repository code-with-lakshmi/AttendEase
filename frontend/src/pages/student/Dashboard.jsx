import { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/layout/Sidebar';
import Header from '../../components/layout/Header';
import { 
  AcademicCapIcon,
  CheckCircleIcon,
  XCircleIcon,
  ClockIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const StatCard = ({ title, value, icon: Icon, color, trend, trendText }) => {
  const colorClasses = {
    blue: 'bg-blue-100 text-blue-600',
    green: 'bg-green-100 text-green-600',
    red: 'bg-red-100 text-red-600',
    gray: 'bg-gray-100 text-gray-600',
  };

  const iconColors = {
    blue: 'text-blue-600',
    green: 'text-green-600',
    red: 'text-red-600',
    gray: 'text-gray-600',
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-500">{title}</p>
        <p className="text-2xl font-bold text-gray-800 mt-1">{value}</p>
        {trend && (
          <p className={`text-xs mt-1 ${trend > 0 ? 'text-green-500' : 'text-red-500'}`}>
            {trend > 0 ? '↑' : '↓'} {Math.abs(trend)}% {trendText}
          </p>
        )}
      </div>
      <div className={`p-3 rounded-lg ${colorClasses[color]}`}>
        <Icon className="h-6 w-6" />
      </div>
    </div>
  );
};

const QuickAction = ({ title, description, icon: Icon, to, color }) => {
  const colorClasses = {
    blue: 'bg-blue-50 text-blue-600 hover:bg-blue-100',
    green: 'bg-green-50 text-green-600 hover:bg-green-100',
    red: 'bg-red-50 text-red-600 hover:bg-red-100',
  };

  return (
    <Link
      to={to}
      className={`p-4 rounded-xl border border-gray-100 flex items-center justify-between transition-colors ${colorClasses[color]}`}
    >
      <div className="flex items-center">
        <div className="p-2 rounded-lg bg-white mr-4 shadow-sm">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <h3 className="font-medium">{title}</h3>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>
      <ArrowRightIcon className="h-5 w-5" />
    </Link>
  );
};

const Dashboard = () => {
  const [attendanceData] = useState({
    totalClasses: 45,
    attended: 38,
    attendancePercentage: 84.4,
    odRequests: 2,
  });

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 ml-64">
        <Header userName="John" className="12A" />
        
        <main className="pt-24 px-8 pb-8">
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard 
              title="Total Classes" 
              value={attendanceData.totalClasses} 
              icon={AcademicCapIcon} 
              color="blue"
            />
            <StatCard 
              title="Attended" 
              value={attendanceData.attended} 
              icon={CheckCircleIcon} 
              color="green"
              trend={2.5}
              trendText="vs last month"
            />
            <StatCard 
              title="Attendance %" 
              value={`${attendanceData.attendancePercentage}%`} 
              icon={ClockIcon} 
              color={attendanceData.attendancePercentage < 75 ? 'red' : 'green'}
            />
            <StatCard 
              title="OD Requests" 
              value={attendanceData.odRequests} 
              icon={DocumentTextIcon} 
              color="gray"
            />
          </div>

          {/* Quick Actions */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <QuickAction
                title="Mark Attendance"
                description="Mark your attendance for today"
                icon={CheckCircleIcon}
                to="/mark-attendance"
                color="green"
              />
              <QuickAction
                title="Request OD"
                description="Submit a new OD request"
                icon={DocumentTextIcon}
                to="/od-request"
                color="blue"
              />
              <QuickAction
                title="View Calendar"
                description="Check your schedule"
                icon={CalendarIcon}
                to="/calendar"
                color="gray"
              />
            </div>
          </div>

          {/* Attendance Chart Placeholder */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-800">Attendance Overview</h2>
              <select className="text-sm border rounded-lg px-3 py-2 bg-white">
                <option>This Month</option>
                <option>Last Month</option>
                <option>This Semester</option>
              </select>
            </div>
            <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
              <p className="text-gray-400">Attendance chart will be displayed here</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
