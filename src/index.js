import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from './shared/context/ThemeContext';
import { FilmsProvider } from './shared/context/FilmsContext';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <FilmsProvider>
        <App />
      </FilmsProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
