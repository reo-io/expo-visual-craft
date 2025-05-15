
import React from 'react';

interface SuspensionControlProps {
  position: 'frontLeft' | 'frontRight' | 'rearLeft' | 'rearRight';
  psi: number;
  onAdjust: (position: string, direction: 'up' | 'down') => void;
}

const SuspensionControl: React.FC<SuspensionControlProps> = ({ position, psi, onAdjust }) => {
  return (
    <div className="flex flex-col items-center">
      <button 
        className="control-button-diamond up-down-button mb-2 animate-pulse-glow"
        onClick={() => onAdjust(position, 'up')}
      >
        <div className="text-2xl font-bold">^</div>
      </button>
      
      <div className="text-center my-2">
        <div className="text-5xl font-bold">{psi}</div>
        <div className="text-sm text-muted-foreground">PSI</div>
      </div>
      
      <button 
        className="control-button-diamond up-down-button mt-2 animate-pulse-glow"
        onClick={() => onAdjust(position, 'down')}
      >
        <div className="text-2xl font-bold transform rotate-180">^</div>
      </button>
    </div>
  );
};

export default SuspensionControl;
