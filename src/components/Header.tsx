
import React from 'react';
import { Settings } from 'lucide-react';

interface HeaderProps {
  title: string;
  showSettings?: boolean;
}

const Header: React.FC<HeaderProps> = ({ title, showSettings = true }) => {
  return (
    <div className="flex items-center justify-between w-full px-4 py-4">
      <h1 className="text-3xl font-bold tracking-wider text-suspension-blue">{title}</h1>
      {showSettings && (
        <button className="p-2">
          <Settings className="w-6 h-6 text-white" />
        </button>
      )}
    </div>
  );
};

export default Header;
