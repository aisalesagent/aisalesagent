import React from 'react';
import { Save } from 'lucide-react';

const Settings = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">General Settings</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">Company Name</label>
            <input type="text" id="companyName" name="companyName" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input type="email" id="email" name="email" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="timezone" className="block text-sm font-medium text-gray-700">Timezone</label>
            <select id="timezone" name="timezone" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
              <option>Pacific Time (PT)</option>
              <option>Eastern Time (ET)</option>
              <option>Central European Time (CET)</option>
            </select>
          </div>
          <div className="mt-6">
            <button type="submit" className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <Save className="h-5 w-5 mr-2" />
              Save Changes
            </button>
          </div>
        </form>
      </div>
      <div className="mt-8 bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Notification Preferences</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">Email Notifications</span>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">SMS Notifications</span>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">Push Notifications</span>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;