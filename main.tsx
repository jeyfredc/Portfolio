import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './src/App.tsx';
import './i18n.ts'; // Asegúrate de importar esto para inicializar i18n

const rootElement = document.getElementById('root') as HTMLElement;
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
