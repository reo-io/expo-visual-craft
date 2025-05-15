
import React from 'react';

interface ModeButtonsProps {
  activeMode: string;
  onModeChange: (mode: string) => void;
}

const ModeButtons: React.FC<ModeButtonsProps> = ({ activeMode, onModeChange }) => {
  const modes = ['AUTO', 'PRESET', 'CUSTOM'];
  
  return (
    <div className="flex justify-around w-full mt-4 mb-8">
      {modes.map((mode) => (
        <button
          key={mode}
          className={`mode-button rounded-full ${
            activeMode === mode 
              ? 'bg-suspension-blue text-black' 
              : 'bg-transparent'
          }`}
          onClick={() => onModeChange(mode)}
        >
          {mode}
        </button>
      ))}
    </div>
  );
};

export default ModeButtons;
