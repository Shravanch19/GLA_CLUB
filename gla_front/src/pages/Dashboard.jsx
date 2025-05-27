import React from 'react';
import { FiUsers, FiCalendar, FiActivity, FiAward } from 'react-icons/fi';

const Dashboard = () => {
  const stats = [
    { id: 1, name: 'Total Members', value: '250', icon: <FiUsers /> },
    { id: 2, name: 'Events', value: '12', icon: <FiCalendar /> },
    { id: 3, name: 'Active Projects', value: '8', icon: <FiActivity /> },
    { id: 4, name: 'Achievements', value: '15', icon: <FiAward /> },
  ];

  const recentActivities = [
    { id: 1, title: 'New member joined', time: '2 hours ago' },
    { id: 2, title: 'Project meeting scheduled', time: '5 hours ago' },
    { id: 3, title: 'Event registration opened', time: '1 day ago' },
    { id: 4, title: 'New achievement unlocked', time: '2 days ago' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="mt-2 text-gray-600">Welcome to GLA Club Dashboard</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                  {stat.icon}
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                  <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div
                key={activity.id}
                className="flex items-center justify-between border-b border-gray-100 pb-4"
              >
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-blue-500 mr-3"></div>
                  <span className="text-gray-700">{activity.title}</span>
                </div>
                <span className="text-sm text-gray-500">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;