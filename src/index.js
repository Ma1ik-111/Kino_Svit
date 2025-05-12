import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/Kino_Svit">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
