import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import user from './user.json';
import 'modern-normalize/modern-normalize.css';
import './style.css';

ReactDOM.render(
  <React.StrictMode>
    <App user={user} />
  </React.StrictMode>,
  document.getElementById('root'),
);
