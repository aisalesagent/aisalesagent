import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import LeadGeneration from './components/LeadGeneration';
import EmailOutreach from './components/EmailOutreach';
import CRMIntegration from './components/CRMIntegration';
import Analytics from './components/Analytics';
import Settings from './components/Settings';
import Auth from './components/Auth';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/*"
          element={
            <div className="flex h-screen bg-gray-100">
              <Sidebar />
              <div className="flex-1 overflow-x-hidden overflow-y-auto">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/lead-generation" element={<LeadGeneration />} />
                  <Route path="/email-outreach" element={<EmailOutreach />} />
                  <Route path="/crm-integration" element={<CRMIntegration />} />
                  <Route path="/analytics" element={<Analytics />} />
                  <Route path="/settings" element={<Settings />} />
                </Routes>
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;