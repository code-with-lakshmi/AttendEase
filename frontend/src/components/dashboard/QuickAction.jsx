import React from 'react';
import { Link } from 'react-router-dom';

const QuickAction = ({ title, description, icon: Icon, to, color = 'blue' }) => {
  const colors = {
    blue: 'bg-blue-50 text-blue-600',
    green: 'bg-green-50 text-green-600',
    purple: 'bg-purple-50 text-purple-600',
    red: 'bg-red-50 text-red-600',
  };

  return (
    <Link 
      to={to}
      className="block group"
    >
      <div className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow h-full">
        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${colors[color]}`}>
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </Link>
  );
};

export default QuickAction;
