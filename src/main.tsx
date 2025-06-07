import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from '@app/index';
import '@shared/style/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <App />
    </div>
  </React.StrictMode>
);
