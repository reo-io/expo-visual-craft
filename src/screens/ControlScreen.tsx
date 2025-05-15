
import React, { useState } from 'react';
import Header from '../components/Header';
import NavigationBar from '../components/NavigationBar';
import SuspensionControl from '../components/SuspensionControl';
import CarVisualization from '../components/CarVisualization';
import ModeButtons from '../components/ModeButtons';
import { toast } from '@/components/ui/use-toast';

const ControlScreen: React.FC = () => {
  const [psiValues, setPsiValues] = useState({
    frontLeft: 45,
    frontRight: 45,
    rearLeft: 45,
    rearRight: 45
  });
  
  const [activeMode, setActiveMode] = useState('AUTO');
  
  const handleAdjust = (position: string, direction: 'up' | 'down') => {
    setPsiValues(prev => {
      const posKey = position as keyof typeof prev;
      const change = direction === 'up' ? 1 : -1;
      const newValue = prev[posKey] + change;
      
      // Prevent going below 20 or above 100 PSI
      if (newValue < 20 || newValue > 100) {
        toast({
          title: "PSI Limit Reached",
          description: `Cannot ${direction === 'up' ? 'increase' : 'decrease'} PSI further`,
          variant: "destructive",
        });
        return prev;
      }
      
      return {
        ...prev,
        [posKey]: newValue
      };
    });
  };
  
  const handleModeChange = (mode: string) => {
    setActiveMode(mode);
    
    // Apply preset values based on mode
    if (mode === 'AUTO') {
      setPsiValues({
        frontLeft: 45,
        frontRight: 45,
        rearLeft: 45,
        rearRight: 45
      });
    } else if (mode === 'PRESET') {
      setPsiValues({
        frontLeft: 60,
        frontRight: 60,
        rearLeft: 40,
        rearRight: 40
      });
    }
    
    toast({
      title: "Mode Changed",
      description: `Switched to ${mode} mode`,
    });
  };
  
  return (
    <div className="min-h-screen bg-black text-white flex flex-col pb-16">
      <Header title="CONTROL" />
      
      <ModeButtons activeMode={activeMode} onModeChange={handleModeChange} />
      
      <div className="flex-1 px-4">
        {/* Enlarged car visualization section */}
        <div className="mt-4 mb-6">
          <CarVisualization psiValues={psiValues} />
        </div>
        
        <div className="grid grid-cols-2 gap-8 mt-2">
          <SuspensionControl 
            position="frontLeft" 
            psi={psiValues.frontLeft} 
            onAdjust={handleAdjust} 
          />
          <SuspensionControl 
            position="frontRight" 
            psi={psiValues.frontRight} 
            onAdjust={handleAdjust} 
          />
          <SuspensionControl 
            position="rearLeft" 
            psi={psiValues.rearLeft} 
            onAdjust={handleAdjust} 
          />
          <SuspensionControl 
            position="rearRight" 
            psi={psiValues.rearRight} 
            onAdjust={handleAdjust} 
          />
        </div>
      </div>
      
      <NavigationBar />
    </div>
  );
};

export default ControlScreen;
