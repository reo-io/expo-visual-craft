
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Circle, Activity } from 'lucide-react';

const NavigationBar: React.FC = () => {
  const location = useLocation();
  
  return (
    <div className="fixed bottom-0 w-full bg-suspension-dark border-t border-suspension-gray flex justify-around py-4">
      <Link to="/" className="nav-button">
        <Home className={`w-6 h-6 ${location.pathname === '/' ? 'text-suspension-blue' : 'text-muted-foreground'}`} />
        <span className={`text-xs mt-1 ${location.pathname === '/' ? 'text-suspension-blue' : 'text-muted-foreground'}`}>HOME</span>
      </Link>
      
      <Link to="/control" className="nav-button">
        <Circle className={`w-6 h-6 ${location.pathname === '/control' ? 'text-suspension-blue' : 'text-muted-foreground'}`} />
        <span className={`text-xs mt-1 ${location.pathname === '/control' ? 'text-suspension-blue' : 'text-muted-foreground'}`}>CONTROL</span>
      </Link>
      
      <Link to="/diagnostics" className="nav-button">
        <Activity className={`w-6 h-6 ${location.pathname === '/diagnostics' ? 'text-suspension-blue' : 'text-muted-foreground'}`} />
        <span className={`text-xs mt-1 ${location.pathname === '/diagnostics' ? 'text-suspension-blue' : 'text-muted-foreground'}`}>DIAGNOSTICS</span>
      </Link>
    </div>
  );
};

export default NavigationBar;
