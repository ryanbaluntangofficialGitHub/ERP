import React from 'react';
import { NavLink } from 'react-router-dom';
const links = [
  { to: '/', label: 'Dashboard' },
  { to: '/sales', label: 'Sales' },
  { to: '/purchasing', label: 'Purchasing' },
  { to: '/hr', label: 'HR' },
  { to: '/accounting', label: 'Accounting' },
  { to: '/production', label: 'Production' },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r">
      <div className="p-4 border-b">
        <h1 className="text-xl font-bold">ERP System</h1>
      </div>
      <nav className="p-4">
        <ul>
          {links.map(l => (
            <li key={l.to} className="mb-2">
              <NavLink
                to={l.to}
                className={({isActive}) => "block p-2 rounded " + (isActive ? "bg-blue-500 text-white" : "text-gray-700 hover:bg-gray-100")}
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
