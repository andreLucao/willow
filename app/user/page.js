"use client"
import React, { useState } from 'react';
import { User, Users, Bell, LogOut, Share2, FileText, ChevronLeft, ChevronRight } from 'lucide-react';

const Dashboard = () => {
  const [activeView, setActiveView] = useState('profile');

  const ProfileView = () => (
    <div className="flex-1 p-8 overflow-auto">
      {/* My Info Card */}
      <div className="bg-[#f5f9f8] rounded-lg p-6 mb-6">
        <div className="flex justify-between items-start">
          <div className="flex items-center space-x-4">
            <img src="/api/placeholder/64/64" alt="Profile" className="rounded-full" />
            <div>
              <h2 className="text-2xl font-semibold text-[#125b50]">Cameron Turner</h2>
              <p className="text-gray-600">Age: 27</p>
            </div>
          </div>
          <button className="px-4 py-2 bg-[#125b50] text-white rounded">
            Review/Update Profile
          </button>
        </div>
      </div>

      {/* Willow's suggestions */}
      <div className="bg-[#f5f9f8] rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-semibold text-[#125b50] mb-2">Willow's suggestions</h2>
        <p className="text-[#125b50] mb-4">Let us help you</p>
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-white rounded">
              <FileText className="text-[#125b50]" size={24} />
            </div>
            <span className="text-[#125b50]">Establish and communicate your medical directives</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-white rounded">
              <FileText className="text-[#125b50]" size={24} />
            </div>
            <span className="text-[#125b50]">Establish your Power of Attorney</span>
          </div>
        </div>
      </div>

      {/* My Documents */}
      <div className="bg-[#f5f9f8] rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-[#125b50] mb-6">My Documents</h2>
        <div className="space-y-6">
          {/* Will Document */}
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-4">
              <div className="p-2 bg-white rounded">
                <FileText className="text-[#125b50]" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-[#125b50]">My will and testament</h3>
                <p className="text-sm text-gray-600">Last Updated: Jan 2nd, 2023</p>
              </div>
            </div>
            <div className="flex space-x-3">
              <button className="px-4 py-2 bg-[#125b50] text-white rounded">Review/Update</button>
              <button className="px-4 py-2 bg-white text-[#125b50] rounded flex items-center space-x-2">
                <Share2 size={16} />
                <span>Share</span>
              </button>
            </div>
          </div>

          {/* HIPAA Document */}
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-4">
              <div className="p-2 bg-white rounded">
                <FileText className="text-[#125b50]" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-[#125b50]">HIPAA Authorization</h3>
                <p className="text-sm text-gray-600">Last Updated: May 24th, 2022</p>
              </div>
            </div>
            <div className="flex space-x-3">
              <button className="px-4 py-2 bg-[#125b50] text-white rounded">Review/Update</button>
              <button className="px-4 py-2 bg-white text-[#125b50] rounded flex items-center space-x-2">
                <Share2 size={16} />
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const FamilyView = () => (
    <div className="flex-1 p-8">
      <div className="w-full">
        <h1 className="text-3xl font-bold mb-8">Ben Turner</h1>
        <div className="grid grid-cols-2 gap-6">
          {/* Checklist */}
          <div className="bg-[#f5f9f8] rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-[#125b50] mb-6">Ben's Checklist</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-6 h-6 border-2 border-[#125b50] rounded-full flex items-center justify-center mr-3">
                  <div className="w-4 h-4 bg-[#125b50] rounded-full"></div>
                </div>
                <span>Ben's Will</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 border-2 border-[#125b50] rounded-full flex items-center justify-center mr-3">
                  <div className="w-4 h-4 bg-[#125b50] rounded-full"></div>
                </div>
                <span>Ben's Hippa Authorization</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 border-2 border-[#125b50] rounded-full mr-3"></div>
                <span>Ben's Power of Attorney</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 border-2 border-[#125b50] rounded-full mr-3"></div>
                <span>Ben's Medical Directives</span>
              </div>
              <button className="mt-4 px-4 py-2 bg-[#125b50] text-white rounded">
                Send Reminder
              </button>
            </div>
          </div>

          {/* Shared Documents */}
          <div className="bg-[#f5f9f8] rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-[#125b50] mb-6">Shared Documents</h2>
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-white rounded">
                    <FileText className="text-[#125b50]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#125b50]">Ben's will and testament</h3>
                    <p className="text-sm text-gray-600">Last Updated: May 7th, 2023</p>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <button className="px-4 py-2 bg-[#125b50] text-white rounded">Review</button>
                  <button className="px-4 py-2 bg-white text-[#125b50] rounded">
                    Send Update reminder
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-white rounded">
                    <FileText className="text-[#125b50]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#125b50]">Ben's HIPAA Authorization</h3>
                    <p className="text-sm text-gray-600">Last Updated: May 24th, 2022</p>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <button className="px-4 py-2 bg-[#125b50] text-white rounded">Review</button>
                  <button className="px-4 py-2 bg-white text-[#125b50] rounded">
                    Send Update reminder
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <div className="w-64 bg-[#125b50] text-white p-6">
        <div className="flex items-center space-x-3 mb-8">
          <img src="/api/placeholder/48/48" alt="Profile" className="rounded-full" />
          <div>
            <p className="text-sm">Hey</p>
            <p className="font-semibold">Cameron</p>
          </div>
        </div>

        <p className="text-sm mb-4">View</p>
        <nav className="space-y-2">
          <button
            onClick={() => setActiveView('profile')}
            className={`flex items-center space-x-3 w-full p-2 rounded ${
              activeView === 'profile' ? 'bg-white/10' : 'hover:bg-white/5'
            }`}
          >
            <User size={20} />
            <span>My profile</span>
          </button>
          <button
            onClick={() => setActiveView('family')}
            className={`flex items-center space-x-3 w-full p-2 rounded ${
              activeView === 'family' ? 'bg-white/10' : 'hover:bg-white/5'
            }`}
          >
            <Users size={20} />
            <span>Family/Friends</span>
          </button>
          <button className="flex items-center space-x-3 w-full p-2 rounded hover:bg-white/5">
            <Bell size={20} />
            <span>Notifications</span>
            <span className="bg-red-500 text-xs rounded-full px-2 ml-auto">3</span>
          </button>
        </nav>

        <button className="flex items-center space-x-3 p-2 rounded hover:bg-white/5 mt-auto absolute bottom-6">
          <LogOut size={20} />
          <span>Sign out</span>
        </button>
      </div>

      {/* Main Content */}
      {activeView === 'profile' ? <ProfileView /> : <FamilyView />}
    </div>
  );
};

export default Dashboard;