
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
  // This is a simplified car outline - in a real app, this would be more sophisticated
  return (
    <div className="relative w-full h-40 my-8">
      {/* Car outline */}
      <svg 
        className="absolute inset-0 w-full h-full" 
        viewBox="0 0 240 120" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M60,100 C60,80 70,40 100,30 C130,20 160,20 180,40 C200,60 210,80 210,100 L60,100 Z" 
          stroke="#FF3B30" 
          strokeWidth="1.5"
        />
        <circle cx="80" cy="100" r="15" stroke="#FF3B30" strokeWidth="1.5" />
        <circle cx="190" cy="100" r="15" stroke="#FF3B30" strokeWidth="1.5" />
      </svg>
      
      {/* PSI Indicators */}
      <div className="absolute top-8 left-16 text-xs font-bold text-suspension-blue">{psiValues.frontLeft} PSI</div>
      <div className="absolute top-8 right-16 text-xs font-bold text-suspension-blue">{psiValues.frontRight} PSI</div>
      <div className="absolute bottom-4 left-16 text-xs font-bold text-suspension-blue">{psiValues.rearLeft} PSI</div>
      <div className="absolute bottom-4 right-16 text-xs font-bold text-suspension-blue">{psiValues.rearRight} PSI</div>
    </div>
  );
};

export default CarVisualization;
