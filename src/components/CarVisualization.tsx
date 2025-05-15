
import React from 'react';

interface CarVisualizationProps {
  psiValues: {
    frontLeft: number;
    frontRight: number;
    rearLeft: number;
    rearRight: number;
  };
}

const CarVisualization: React.FC<CarVisualizationProps> = ({ psiValues }) => {
  return (
    <div className="relative w-full h-48 my-8 flex items-center justify-center">
      {/* Car image */}
      <div className="relative w-48 h-48">
        <img 
          src="/lovable-uploads/a08345b2-95a5-4219-b584-631450c741e8.png" 
          alt="Car diagram" 
          className="w-full h-full object-contain"
        />
        
        {/* PSI Indicators */}
        <div className="absolute top-5 left-2 text-xs font-bold bg-black/50 p-1 rounded text-suspension-blue">
          {psiValues.frontLeft} PSI
        </div>
        <div className="absolute top-5 right-2 text-xs font-bold bg-black/50 p-1 rounded text-suspension-blue">
          {psiValues.frontRight} PSI
        </div>
        <div className="absolute bottom-12 left-2 text-xs font-bold bg-black/50 p-1 rounded text-suspension-blue">
          {psiValues.rearLeft} PSI
        </div>
        <div className="absolute bottom-12 right-2 text-xs font-bold bg-black/50 p-1 rounded text-suspension-blue">
          {psiValues.rearRight} PSI
        </div>
      </div>
    </div>
  );
};

export default CarVisualization;
