import React, { useState } from 'react';
import { Send, Edit, Trash2, Plus } from 'lucide-react';
import EmailCampaignSetup from './EmailCampaignSetup';

const EmailOutreach = () => {
  const [campaigns, setCampaigns] = useState([
    { id: 1, name: 'Welcome Series', status: 'Active', sent: 1200, opened: 540, clicked: 180 },
    { id: 2, name: 'Product Launch', status: 'Draft', sent: 0, opened: 0, clicked: 0 },
    { id: 3, name: 'Follow-up', status: 'Completed', sent: 800, opened: 400, clicked: 120 },
  ]);
  const [showCampaignSetup, setShowCampaignSetup] = useState(false);

  const handleCreateCampaign = (campaignData) => {
    // Here you would typically send the campaign data to your backend
    console.log(campaignData);
    // For now, let's just add it to our local state
    setCampaigns([...campaigns, {
      id: campaigns.length + 1,
      name: campaignData.campaignName,
      status: 'Draft',
      sent: 0,
      opened: 0,
      clicked: 0
    }]);
    setShowCampaignSetup(false);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Automated Email Outreach</h1>
      <div className="mb-6">
        <button 
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          onClick={() => setShowCampaignSetup(!showCampaignSetup)}
        >
          {showCampaignSetup ? 'Cancel' : 'Create New Campaign'}
        </button>
      </div>
      
      {showCampaignSetup ? (
        <EmailCampaignSetup onSubmit={handleCreateCampaign} />
      ) : (
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Campaign Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sent</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Opened</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Clicked</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {campaigns.map((campaign) => (
                <tr key={campaign.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{campaign.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      campaign.status === 'Active' ? 'bg-green-100 text-green-800' :
                      campaign.status === 'Draft' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {campaign.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{campaign.sent}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{campaign.opened}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{campaign.clicked}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-indigo-600 hover:text-indigo-900 mr-2">
                      <Send className="h-5 w-5" />
                    </button>
                    <button className="text-blue-600 hover:text-blue-900 mr-2">
                      <Edit className="h-5 w-5" />
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default EmailOutreach;