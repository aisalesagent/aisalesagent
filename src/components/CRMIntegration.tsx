import React from 'react';
import { Database, Check, X } from 'lucide-react';

const CRMIntegration = () => {
  const crmSystems = [
    { name: 'HubSpot', connected: true, lastSync: '2 hours ago' },
    { name: 'Salesforce', connected: false, lastSync: 'Never' },
    { name: 'Pipedrive', connected: true, lastSync: '1 day ago' },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">CRM Integration</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {crmSystems.map((crm, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <Database className="h-8 w-8 text-indigo-500 mr-3" />
                <h2 className="text-xl font-semibold">{crm.name}</h2>
              </div>
              {crm.connected ? (
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">Connected</span>
              ) : (
                <span className="px-2 py-1 bg-red-100 text-red-800 text-xs font-medium rounded-full">Disconnected</span>
              )}
            </div>
            <p className="text-gray-600 mb-4">Last synced: {crm.lastSync}</p>
            {crm.connected ? (
              <button className="w-full px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 flex items-center justify-center">
                <X className="h-5 w-5 mr-2" />
                Disconnect
              </button>
            ) : (
              <button className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 flex items-center justify-center">
                <Check className="h-5 w-5 mr-2" />
                Connect
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CRMIntegration;