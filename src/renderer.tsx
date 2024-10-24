// src/renderer.ts
import React from 'react';
import ReactDOM from 'react-dom/client';

// Create a simple React component
const App: React.FC = () => {
  return (
    <div>
      
    </div>
  );
};

// Get the root element
const rootElement = document.getElementById('app');

// Render the React app into the root element
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<App />);
}