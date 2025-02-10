import React from 'react';
import { User, FileText, Bell, LogOut, Share2, Edit } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-[#125b50] text-white p-6">
        <div className="flex flex-col items-center mb-8">
          <img
            src="/api/placeholder/64/64"
            alt="Profile"
            className="w-16 h-16 rounded-full mb-4"
          />
          <h2 className="text-xl font-semibold">John Doe</h2>
        </div>

        <nav className="space-y-4">
          <a href="#" className="flex items-center space-x-3 p-2 rounded hover:bg-[#1a7468]">
            <User size={20} />
            <span>Profile</span>
          </a>
          <a href="#" className="flex items-center space-x-3 p-2 rounded hover:bg-[#1a7468]">
            <FileText size={20} />
            <span>Documents</span>
          </a>
          <a href="#" className="flex items-center space-x-3 p-2 rounded hover:bg-[#1a7468]">
            <Bell size={20} />
            <span>Notifications</span>
            <span className="bg-red-500 text-xs rounded-full px-2">2</span>
          </a>
        </nav>

        <button className="flex items-center space-x-3 p-2 rounded hover:bg-[#1a7468] mt-auto absolute bottom-6">
          <LogOut size={20} />
          <span>Sign Out</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-auto">
        {/* User Info Card */}
        <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
          <h2 className="text-2xl font-bold mb-2">John Doe</h2>
          <p className="text-gray-600">Age: 45</p>
        </div>

        {/* Suggestions Section */}
        <div className="bg-blue-50 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold mb-4">Suggested Actions</h3>
          <ul className="space-y-3">
            <li className="flex items-center text-blue-700">
              <span className="mr-2">•</span>
              Complete your Medical Directive
            </li>
            <li className="flex items-center text-blue-700">
              <span className="mr-2">•</span>
              Set up Power of Attorney
            </li>
          </ul>
        </div>

        {/* Documents Section */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="font-semibold">Last Will</h4>
                <p className="text-sm text-gray-500">Updated: Jan 15, 2024</p>
              </div>
              <FileText className="text-gray-400" size={24} />
            </div>
            <div className="flex space-x-4">
              <button className="flex items-center space-x-2 text-sm text-[#125b50]">
                <Edit size={16} />
                <span>Review & Update</span>
              </button>
              <button className="flex items-center space-x-2 text-sm text-gray-600">
                <Share2 size={16} />
                <span>Share</span>
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="font-semibold">HIPAA Authorization</h4>
                <p className="text-sm text-gray-500">Updated: Feb 1, 2024</p>
              </div>
              <FileText className="text-gray-400" size={24} />
            </div>
            <div className="flex space-x-4">
              <button className="flex items-center space-x-2 text-sm text-[#125b50]">
                <Edit size={16} />
                <span>Review & Update</span>
              </button>
              <button className="flex items-center space-x-2 text-sm text-gray-600">
                <Share2 size={16} />
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;