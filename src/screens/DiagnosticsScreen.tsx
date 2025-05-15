
import React, { useState } from 'react';
import Header from '../components/Header';
import NavigationBar from '../components/NavigationBar';
import { Progress } from '@/components/ui/progress';

const DiagnosticsScreen: React.FC = () => {
  const [systemStatus, setSystemStatus] = useState({
    compressor: 'Good',
    tankPressure: 82, // percentage
    batteryLevel: 68, // percentage
    valves: 'Operational',
    connections: 'Secured',
    errors: []
  });
  
  return (
    <div className="min-h-screen bg-black text-white flex flex-col pb-16">
      <Header title="DIAGNOSTICS" />
      
      <div className="flex-1 p-4">
        <div className="mb-8">
          <h2 className="text-xl text-suspension-blue mb-4">SYSTEM STATUS</h2>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm text-muted-foreground">Compressor</span>
                <span className="text-sm text-green-500">{systemStatus.compressor}</span>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm text-muted-foreground">Tank Pressure</span>
                <span className="text-sm">{systemStatus.tankPressure}%</span>
              </div>
              <Progress value={systemStatus.tankPressure} className="h-2" />
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm text-muted-foreground">Battery Level</span>
                <span className="text-sm">{systemStatus.batteryLevel}%</span>
              </div>
              <Progress value={systemStatus.batteryLevel} className="h-2" />
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm text-muted-foreground">Valves</span>
                <span className="text-sm text-green-500">{systemStatus.valves}</span>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm text-muted-foreground">Connections</span>
                <span className="text-sm text-green-500">{systemStatus.connections}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-xl text-suspension-blue mb-4">RECENT ACTIVITY</h2>
          <div className="bg-suspension-gray/20 rounded-md p-3">
            <div className="mb-3 pb-2 border-b border-suspension-gray">
              <p className="text-sm">Manual mode engaged</p>
              <p className="text-xs text-muted-foreground">Today, 10:42 AM</p>
            </div>
            <div className="mb-3 pb-2 border-b border-suspension-gray">
              <p className="text-sm">Ride height adjusted: Front +15mm</p>
              <p className="text-xs text-muted-foreground">Today, 9:15 AM</p>
            </div>
            <div>
              <p className="text-sm">System started</p>
              <p className="text-xs text-muted-foreground">Today, 9:00 AM</p>
            </div>
          </div>
        </div>
      </div>
      
      <NavigationBar />
    </div>
  );
};

export default DiagnosticsScreen;
