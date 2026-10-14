import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';

function App() {
  return (
    <Router>
      <div className="flex bg-[#F5F7FB] min-h-screen">
        {/* Fixed Sidebar */}
        <Sidebar />

        {/* Main Content Area */}
        <div className="flex-1 ml-[240px] flex flex-col">
          <Header />

          {/* Page Content View */}
          <main className="mt-16 p-6 flex-1">
            <Routes>
              <Route path="/" element={<div className="bg-white p-6 rounded-lg shadow-sm"><h1 className="text-2xl font-bold text-[#2D4373]">Dashboard Overview</h1><p className="text-gray-600 mt-2">Welcome back, Hasmath Hima! IMS Dashboard is loading...</p></div>} />
              <Route path="/admissions" element={<div className="bg-white p-6 rounded-lg shadow-sm"><h1 className="text-2xl font-bold text-[#2D4373]">Admissions Module</h1></div>} />
              <Route path="/students" element={<div className="bg-white p-6 rounded-lg shadow-sm"><h1 className="text-2xl font-bold text-[#2D4373]">Student Management</h1></div>} />
              <Route path="/academics" element={<div className="bg-white p-6 rounded-lg shadow-sm"><h1 className="text-2xl font-bold text-[#2D4373]">Academic Management</h1></div>} />
              <Route path="/lms" element={<div className="bg-white p-6 rounded-lg shadow-sm"><h1 className="text-2xl font-bold text-[#2D4373]">LMS - Online Learning</h1></div>} />
              <Route path="/attendance" element={<div className="bg-white p-6 rounded-lg shadow-sm"><h1 className="text-2xl font-bold text-[#2D4373]">QR Attendance Tracking</h1></div>} />
              <Route path="/fees" element={<div className="bg-white p-6 rounded-lg shadow-sm"><h1 className="text-2xl font-bold text-[#2D4373]">Fees & Payments Module</h1></div>} />
              <Route path="/announcements" element={<div className="bg-white p-6 rounded-lg shadow-sm"><h1 className="text-2xl font-bold text-[#2D4373]">Announcements & Calendar</h1></div>} />
              <Route path="/settings" element={<div className="bg-white p-6 rounded-lg shadow-sm"><h1 className="text-2xl font-bold text-[#2D4373]">Client Branding Settings</h1></div>} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;