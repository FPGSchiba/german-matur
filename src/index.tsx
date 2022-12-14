import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@mui/system';
import { theme } from './shared/theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={ theme }>
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);