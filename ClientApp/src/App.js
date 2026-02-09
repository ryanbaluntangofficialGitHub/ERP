import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Sales from './pages/Sales';
import Purchasing from './pages/Purchasing';
import HR from './pages/HR';
import Accounting from './pages/Accounting';
import Production from './pages/Production';

function App() {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <main className="flex-1 p-6">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/purchasing" element={<Purchasing />} />
          <Route path="/hr" element={<HR />} />
          <Route path="/accounting" element={<Accounting />} />
          <Route path="/production" element={<Production />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
