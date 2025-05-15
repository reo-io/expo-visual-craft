
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { defineCustomElements } from '@ionic/pwa-elements/loader';

// Call this to define the web components for Capacitor
defineCustomElements(window);

createRoot(document.getElementById("root")!).render(<App />);
