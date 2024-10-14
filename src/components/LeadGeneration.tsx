import React, { useState } from 'react';
import { Search, Filter, Download } from 'lucide-react';

const LeadGeneration = () => {
  const [leads, setLeads] = useState([
    { id: 1, name: 'John Doe', company: 'Tech Corp', email: 'john@techcorp.com', score: 85 },
    { id: 2, name: 'Jane Smith', company: 'Innovate Inc', email: 'jane@innovate.com', score: 92 },
    { id: 3, name: 'Bob Johnson', company: 'Global Solutions', email: 'bob@globalsolutions.com', score: 78 },
  ]);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">AI-Powered Lead Generation</h1>
      <div className="mb-6 flex justify-between items-center">
        <div className="relative">
          <input
            type="text"
            placeholder="Search leads..."
            className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
        <div className="flex space-x-4">
          <button className="flex items-center px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">
            <Filter className="h-5 w-5 mr-2" />
            Filter
          </button>
          <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            <Download className="h-5 w-5 mr-2" />
            Export
          </button>
        </div>
      </div>
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lead Score</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {leads.map((lead) => (
              <tr key={lead.id}>
                <td className="px-6 py-4 whitespace-nowrap">{lead.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{lead.company}</td>
                <td className="px-6 py-4 whitespace-nowrap">{lead.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    lead.score >= 90 ? 'bg-green-100 text-green-800' :
                    lead.score >= 80 ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {lead.score}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeadGeneration;