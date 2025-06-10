import React from 'react';
import ReactDOM from 'react-dom/client';
import Examples from './Examples';

const App = () => <Examples />;

const container = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(container);
root.render(<App />);
