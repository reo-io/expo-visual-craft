
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
    <div className="relative w-full flex justify-center items-center my-4">
      {/* Car image */}
      <div className="relative w-64 h-64">
        <img 
          src="/lovable-uploads/a08345b2-95a5-4219-b584-631450c741e8.png" 
          alt="Car diagram" 
          className="w-full h-full object-contain"
        />
        
        {/* PSI Indicators */}
        <div className="absolute top-6 left-4 text-sm font-bold bg-black/50 p-1.5 rounded text-suspension-blue">
          {psiValues.frontLeft} PSI
        </div>
        <div className="absolute top-6 right-4 text-sm font-bold bg-black/50 p-1.5 rounded text-suspension-blue">
          {psiValues.frontRight} PSI
        </div>
        <div className="absolute bottom-16 left-4 text-sm font-bold bg-black/50 p-1.5 rounded text-suspension-blue">
          {psiValues.rearLeft} PSI
        </div>
        <div className="absolute bottom-16 right-4 text-sm font-bold bg-black/50 p-1.5 rounded text-suspension-blue">
          {psiValues.rearRight} PSI
        </div>
      </div>
    </div>
  );
};

export default CarVisualization;
