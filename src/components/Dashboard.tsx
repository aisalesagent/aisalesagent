import React from 'react';
import { Users, Mail, Briefcase, TrendingUp } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard title="Total Leads" value="1,234" icon={<Users className="h-8 w-8 text-blue-500" />} />
        <DashboardCard title="Emails Sent" value="5,678" icon={<Mail className="h-8 w-8 text-green-500" />} />
        <DashboardCard title="Opportunities" value="42" icon={<Briefcase className="h-8 w-8 text-yellow-500" />} />
        <DashboardCard title="Conversion Rate" value="3.2%" icon={<TrendingUp className="h-8 w-8 text-purple-500" />} />
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Recent Activities</h2>
        <div className="bg-white shadow rounded-lg p-4">
          <ActivityItem title="New lead generated" time="2 hours ago" />
          <ActivityItem title="Email campaign sent" time="4 hours ago" />
          <ActivityItem title="CRM data synced" time="6 hours ago" />
          <ActivityItem title="High-priority lead scored" time="1 day ago" />
        </div>
      </div>
    </div>
  );
};

const DashboardCard = ({ title, value, icon }) => (
  <div className="bg-white p-6 rounded-lg shadow">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-gray-500 text-sm font-medium uppercase">{title}</p>
        <p className="mt-1 text-3xl font-semibold text-gray-900">{value}</p>
      </div>
      {icon}
    </div>
  </div>
);

const ActivityItem = ({ title, time }) => (
  <div className="flex items-center justify-between py-3 border-b last:border-b-0">
    <span className="text-sm font-medium text-gray-900">{title}</span>
    <span className="text-sm text-gray-500">{time}</span>
  </div>
);

export default Dashboard;