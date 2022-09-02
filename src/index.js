import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import { ContextProvider } from './contexts/ContextProvider';

ReactDOM.render(
    // Wrap the whole app with context provider to be able to use state
    <ContextProvider>
        <App />
    </ContextProvider>,
    document.getElementById('root')
);