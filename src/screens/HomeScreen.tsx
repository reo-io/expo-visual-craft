
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import NavigationBar from '../components/NavigationBar';
import { Button } from '@/components/ui/button';

const HomeScreen: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header title="SWIZ AIR" showSettings={false} />
      
      <div className="flex-1 flex flex-col items-center justify-center p-6">
        <h2 className="text-xl text-suspension-blue mb-2">SUSPENSION CONTROL</h2>
        <p className="text-muted-foreground text-center mb-8">
          Welcome to the next generation air suspension control system
        </p>
        
        <div className="w-48 h-48 rounded-full border-2 border-suspension-blue flex items-center justify-center mb-8 animate-pulse-glow">
          <div className="text-4xl font-bold text-suspension-blue">SWIZ</div>
        </div>
        
        <Button 
          className="bg-suspension-blue hover:bg-suspension-blue/80 text-black py-6 px-8 rounded-full text-lg"
          onClick={() => navigate('/control')}
        >
          START CONTROL
        </Button>
      </div>
      
      <NavigationBar />
    </div>
  );
};

export default HomeScreen;
