import React from 'react';
import { 
  Users, 
  GraduationCap, 
  BookOpen, 
  CreditCard, 
  TrendingUp, 
  CheckCircle, 
  Clock 
} from 'lucide-react';

const stats = [
  { name: 'Total Students', value: '1,280', change: '+12%', icon: Users, color: 'bg-blue-500' },
  { name: 'Active Teachers', value: '84', change: '+4%', icon: GraduationCap, color: 'bg-indigo-500' },
  { name: 'Active Courses', value: '32', change: 'Stable', icon: BookOpen, color: 'bg-purple-500' },
  { name: 'Fees Collected', value: '$45,200', change: '+18%', icon: CreditCard, color: 'bg-emerald-500' },
];

const recentActivities = [
  { id: 1, text: 'New student admission application submitted by Sara Ahmed', time: '10 mins ago', status: 'Pending' },
  { id: 2, text: 'Fee payment of $450 received from Rahul Verma', time: '25 mins ago', status: 'Completed' },
  { id: 3, text: 'Grade 10 Mathematics Exam timetable published', time: '1 hour ago', status: 'Info' },
  { id: 4, text: 'Attendance report for CS Department generated', time: '2 hours ago', status: 'Completed' },
];

function DashboardOverview() {
  return (
    <div className="space-y-6">
      {/* Top Welcome Banner */}
      <div className="bg-[#2D4373] text-white p-6 rounded-xl shadow-md flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Welcome back, Hasmath Hima! 👋</h1>
          <p className="text-gray-200 mt-1 text-sm">Here is what is happening across the institution today.</p>
        </div>
        <button className="bg-[#3B5998] hover:bg-opacity-80 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors border border-white/20">
          Generate Quick Report
        </button>
      </div>

      {/* Analytics Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.name} className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">{stat.name}</p>
                <h3 className="text-2xl font-bold text-gray-800 mt-1">{stat.value}</h3>
                <span className="inline-flex items-center text-xs font-semibold text-emerald-600 mt-2">
                  <TrendingUp size={12} className="mr-1" /> {stat.change} this month
                </span>
              </div>
              <div className={`p-3.5 rounded-xl text-white ${stat.color}`}>
                <Icon size={24} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Analytics & Activity Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity List */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Recent Institutional Activity</h2>
          <div className="space-y-4">
            {recentActivities.map((act) => (
              <div key={act.id} className="flex items-start justify-between p-3.5 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                <div className="flex items-center gap-3">
                  <Clock size={18} className="text-[#3B5998] shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-gray-800">{act.text}</p>
                    <span className="text-xs text-gray-400">{act.time}</span>
                  </div>
                </div>
                <span className={`text-xs px-2.5 py-1 rounded-full font-semibold ${
                  act.status === 'Completed' ? 'bg-emerald-100 text-emerald-700' :
                  act.status === 'Pending' ? 'bg-amber-100 text-amber-700' : 'bg-blue-100 text-blue-700'
                }`}>
                  {act.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* System Health / Quick Info */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-between">
          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-2">System Status</h2>
            <p className="text-sm text-gray-500 mb-6">All core modules and services operating normally.</p>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600 flex items-center gap-2">
                  <CheckCircle size={16} className="text-emerald-500" /> Database Sync
                </span>
                <span className="font-semibold text-emerald-600">Active</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600 flex items-center gap-2">
                  <CheckCircle size={16} className="text-emerald-500" /> QR Attendance Portal
                </span>
                <span className="font-semibold text-emerald-600">Active</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600 flex items-center gap-2">
                  <CheckCircle size={16} className="text-emerald-500" /> Payment Gateway
                </span>
                <span className="font-semibold text-emerald-600">Active</span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-gray-100 text-center">
            <span className="text-xs text-gray-400">IMS System Version 1.0.0</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardOverview;