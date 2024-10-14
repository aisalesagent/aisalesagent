import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Users, Mail, Database, BarChart2, Settings, LogOut } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="bg-indigo-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <Link to="/" className="text-white flex items-center space-x-2 px-4">
        <Database className="h-8 w-8" />
        <span className="text-2xl font-extrabold">AI Sales Agent</span>
      </Link>
      <nav>
        <Link to="/" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-indigo-700 hover:text-white">
          <Home className="inline-block mr-2" size={20} /> Dashboard
        </Link>
        <Link to="/lead-generation" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-indigo-700 hover:text-white">
          <Users className="inline-block mr-2" size={20} /> Lead Generation
        </Link>
        <Link to="/email-outreach" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-indigo-700 hover:text-white">
          <Mail className="inline-block mr-2" size={20} /> Email Outreach
        </Link>
        <Link to="/crm-integration" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-indigo-700 hover:text-white">
          <Database className="inline-block mr-2" size={20} /> CRM Integration
        </Link>
        <Link to="/analytics" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-indigo-700 hover:text-white">
          <BarChart2 className="inline-block mr-2" size={20} /> Analytics
        </Link>
        <Link to="/settings" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-indigo-700 hover:text-white">
          <Settings className="inline-block mr-2" size={20} /> Settings
        </Link>
      </nav>
      <div className="absolute bottom-0 w-full">
        <Link to="/auth" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-indigo-700 hover:text-white">
          <LogOut className="inline-block mr-2" size={20} /> Log Out
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;