import React, { useState } from 'react';
import { Send, Plus, Trash2 } from 'lucide-react';

const EmailCampaignSetup = ({ onSubmit }) => {
  const [campaignName, setCampaignName] = useState('');
  const [subject, setSubject] = useState('');
  const [emailBody, setEmailBody] = useState('');
  const [steps, setSteps] = useState([{ delay: 1, subject: '', body: '' }]);

  const addStep = () => {
    setSteps([...steps, { delay: 1, subject: '', body: '' }]);
  };

  const removeStep = (index) => {
    setSteps(steps.filter((_, i) => i !== index));
  };

  const updateStep = (index, field, value) => {
    const newSteps = [...steps];
    newSteps[index][field] = value;
    setSteps(newSteps);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ campaignName, subject, emailBody, steps });
  };

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-6">Create New Campaign</h2>
      <form onSubmit={handleSubmit}>
        {/* ... (rest of the form remains the same) ... */}
        <div className="flex items-center justify-between">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            <Send className="h-5 w-5 inline-block mr-2" /> Create Campaign
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmailCampaignSetup;