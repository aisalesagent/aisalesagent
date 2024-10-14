import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Analytics = () => {
  const data = [
    { name: 'Jan', leads: 400, conversions: 240, revenue: 2400 },
    { name: 'Feb', leads: 300, conversions: 139, revenue: 2210 },
    { name: 'Mar', leads: 200, conversions: 980, revenue: 2290 },
    { name: 'Apr', leads: 278, conversions: 390, revenue: 2000 },
    { name: 'May', leads: 189, conversions: 480, revenue: 2181 },
    { name: 'Jun', leads: 239, conversions: 380, revenue: 2500 },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Analytics Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <MetricCard title="Total Leads" value="1,678" change="+12.3%" />
        <MetricCard title="Conversion Rate" value="3.2%" change="+0.8%" />
        <MetricCard title="Revenue" value="$52,489" change="+15.7%" />
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Performance Overview</h2>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Bar yAxisId="left" dataKey="leads" fill="#8884d8" />
            <Bar yAxisId="left" dataKey="conversions" fill="#82ca9d" />
            <Bar yAxisId="right" dataKey="revenue" fill="#ffc658" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

const MetricCard = ({ title, value, change }) => (
  <div className="bg-white p-6 rounded-lg shadow">
    <h3 className="text-lg font-medium text-gray-900">{title}</h3>
    <p className="mt-2 text-3xl font-semibold text-gray-900">{value}</p>
    <p className={`mt-2 ${change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
      {change}
    </p>
  </div>
);

export default Analytics;