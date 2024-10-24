// src/renderer.ts
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// Create a simple React component
const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-700 flex items-center justify-center">
      <h1 className="text-sm font-bold text-blue-500">Hello from React + Tailwind CSS!</h1>
    </div>
  );
};

// Get the root element
const rootElement = document.getElementById('app');

// Render the React app into the root element
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<App />);
}