// src/renderer.ts
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './index.css'

// Create a simple React component
const Root: React.FC = () => {
  return (
    <App />
  );
};

// Get the root element
const rootElement = document.getElementById('app');

// Render the React app into the root element
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<Root />);
}